import { Injectable } from '@nestjs/common';
import { GqlClientService } from 'src/gql-client/gql-client.service';
import { Register } from 'src/gql/gql-interfaces';

@Injectable()
export class UserService {
    constructor(private gql: GqlClientService) {}

    /* eslint-disable no-control-regex */
    emailRegEx =
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    /* eslint-enable no-control-regex */

    async register(user: {
        username: string;
        email: string;
        password: string;
    }) {
        if (
            !this.emailRegEx.test(user.email) ||
            this.emailRegEx.test(user.username)
        )
            throw 'Email not a email or username is a email!';

        await this.gql.mutate(Register, user);
    }

    async resetPassword() {
        throw 'No resetPassword method defined'; // Replace this line with your register action
    }

    async changePassword() {
        throw 'No changePassword method defined'; // Replace this line with your register action
    }
}
