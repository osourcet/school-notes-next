import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { GqlClientService } from '../gql-client/gql-client.service';

@Module({
    imports: [
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: `${jwtConstants.expiresIn}s` },
        }),
        PassportModule,
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy, GqlClientService],
    controllers: [AuthController],
    exports: [JwtModule],
})
export class AuthModule {}
