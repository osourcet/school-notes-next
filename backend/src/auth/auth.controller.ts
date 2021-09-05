import {
    Controller,
    HttpStatus,
    Post,
    Req,
    Res,
    UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('api/auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(
        @Req() req: { user: { username: string; id: string } },
        @Res() res: Response,
    ) {
        try {
            res.status(HttpStatus.OK).json(
                await this.authService.login(req.user),
            );
        } catch (error) {
            res.sendStatus(HttpStatus.FORBIDDEN);
        }
    }
}
