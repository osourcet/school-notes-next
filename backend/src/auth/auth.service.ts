import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}

    user = { name: 'test', password: 'test' };

    async validate(
        username: string,
        password: string,
    ): Promise<{ username: string; userid: number }> {
        throw 'No validate method defined'; // Replace this line with your validation; See: https://docs.nestjs.com/security/authentication#jwt-functionality
    }

    async login(user: { username: string; userid: number }) {
        return {
            token: this.jwtService.sign(user),
        };
    }
}
