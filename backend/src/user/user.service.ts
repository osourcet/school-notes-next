import { Injectable } from '@nestjs/common';
import { GqlClientService } from 'src/gql-client/gql-client.service';
import { Register } from 'src/gql/gql-interfaces';

@Injectable()
export class UserService {
    constructor(private gql: GqlClientService) {}

    async register(user: {
        username: string;
        email: string;
        password: string;
    }) {
        await this.gql.mutate(Register, user);
    }

    async resetPassword() {
        throw 'No resetPassword method defined'; // Replace this line with your register action
    }

    async changePassword() {
        throw 'No changePassword method defined'; // Replace this line with your register action
    }
}
