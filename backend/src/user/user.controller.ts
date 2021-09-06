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

        await this.userservice
            .register({
                username,
                email,
                password: await hash(password, process.env.SALT || ''),
            })
            .catch((err) => {
                res.status(HttpStatus.FORBIDDEN).json({ error: err });
            });

        res.sendStatus(HttpStatus.CREATED);
    }

    @Post('login')
    @Redirect('/api/auth/login', 308)
    async login() {} // eslint-disable-line @typescript-eslint/no-empty-function

    @Post('resetpassword')
    async resetPassword() {
        await this.userservice.resetPassword();
    }

    @Post('changepassword')
    async changePassword() {
        await this.userservice.changePassword();
    }
}
