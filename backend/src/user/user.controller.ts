import { Controller, Post, Redirect } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api/user')
export class UserController {
    constructor(private userservice: UserService) {}

    @Post('register')
    async register() {
        await this.userservice.register();
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
