import * as dotenv from 'dotenv';
dotenv.config();

export const apiBaseUrl = process.env.HEVY_BASE_URL;
export const apiKey = process.env.HEVY_API_KEY;
export const databaseUrl = process.env.DB_URL;
