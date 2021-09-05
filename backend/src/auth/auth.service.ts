import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { GqlClientService } from 'src/gql-client/gql-client.service';
import { Login, LoginQuery } from './../gql/gql-interfaces';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private gql: GqlClientService,
    ) {}

    async validate(
        username: string,
        password: string,
    ): Promise<{ username: string; id: string }> {
        const {
            data: {
                schoolnotes_users: [{ id, password: password_db }],
            },
        } = (await this.gql.mutate(Login, {
            username,
        })) as { data: LoginQuery };

        if (!(await compare(password, password_db)))
            throw 'Password is incorrect';

        return { username, id };
    }

    async verify(token: string) {
        try {
            return this.jwtService.verify(token.split(' ')[1]);
        } catch (error) {
            throw error;
        }
    }

    async login(user: { username: string; id: string }) {
        return {
            token: this.jwtService.sign(user),
        };
    }
}
