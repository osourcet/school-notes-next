import { config } from 'dotenv';
config();

export const jwtConstants = {
    secret: process.env.SECRET,
    expiresIn: process.env.EXPIRES_IN_SECONDS,
};
