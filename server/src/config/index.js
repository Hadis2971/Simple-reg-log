import dotenv from "dotenv";

dotenv.config();

export const port = process.env.PORT;

export const dbConfig = {
    dbName: process.env.DB_Name,
    dbUser: process.env.DB_USER,
    dbHost: process.env.DB_HOST,
    dbPassword: process.env.DB_PASSWORD
}

export const secretOrKey = process.env.AUTH_SECRET;