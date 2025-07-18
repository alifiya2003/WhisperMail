// /api/clerk/webhook
import { db } from '@/server/db';

export const POST = async (req: Request) => {
    const { data } = await req.json();
    console.log('Received Clerk webhook data:', data);

    const emailAddress = data.email_addresses[0].email_address;
    const firstName = data.first_name;
    const lastName = data.last_name;
    const imageUrl = data.image_url;
    const id = data.id;

    await db.user.create({
        data: {
            id: id,
            emailAddress: emailAddress,
            firstName: firstName,
            lastName: lastName,
            imageUrl: imageUrl,
            
        },
    });

    console.log('User created in database:', {
        emailAddress,
        firstName,
        lastName,
        imageUrl,
        id,
    });
    // Respond to Clerk webhook
    // Clerk expects a 200 OK response for successful processing
    return new Response('Webhook received', {
        status: 200,
    });
}