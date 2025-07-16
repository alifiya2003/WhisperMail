import { db } from "./server/db";


await db.user.create({
    data: {
        emailAddress: "test@example.com",
        firstName: "ada",
        lastName: "Doe",
        imageUrl: "https://example.com/image.jpg"
    }
});
console.log("User created successfully");