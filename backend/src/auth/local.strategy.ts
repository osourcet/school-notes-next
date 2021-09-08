import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super();
    }

    async validate(
        username: string,
        password: string,
    ): Promise<{ username: string; id: string }> {
        const user = await this.authService.validate(username, password);
        if (!user) {
            return null;
        }
        return user;
    }
}
