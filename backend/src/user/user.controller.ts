import {
    Body,
    Controller,
    HttpStatus,
    Post,
    Redirect,
    Res,
} from '@nestjs/common';
import { Response } from 'express';
import { UserService } from './user.service';
import { hash } from 'bcrypt';

@Controller('api/user')
export class UserController {
    constructor(private userservice: UserService) {}

    @Post('register')
    async register(
        @Body() body,
        @Body('username') username,
        @Body('email') email,
        @Body('password') password,
        @Res() res: Response,
    ) {
        console.log(body);

        try {
            await this.userservice.register({
                username,
                email,
                password: await hash(password, process.env.SALT || ''),
            });
            res.sendStatus(HttpStatus.CREATED);
        } catch (error) {
            res.status(HttpStatus.FORBIDDEN).json({ error });
        }
    }

    @Post('login')
    @Redirect('/api/auth/login', 308)
    async login() {
        return;
    }

    @Post('verify')
    @Redirect('/api/auth/verify', 308)
    async verify() {
        return;
    }

    @Post('resetpassword')
    async resetPassword() {
        await this.userservice.resetPassword();
    }

    @Post('changepassword')
    async changePassword() {
        await this.userservice.changePassword();
    }
}
