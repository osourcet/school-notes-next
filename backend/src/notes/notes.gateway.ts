import {
    OnGatewayConnection,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { AuthService } from 'src/auth/auth.service';

@WebSocketGateway()
export class NotesGateway implements OnGatewayConnection {
    constructor(private authService: AuthService) {}

    @WebSocketServer()
    public server!: Server;

    async handleConnection(client: Socket) {
        const user = await this.authService
            .verify(client.handshake.headers.authorization as string)
            .catch(() => {
                client.disconnect();
            });

        console.log('user', user);
        console.log('headers', client.handshake.headers);

        if (!user) client.disconnect();

        console.log(user);

        const { id } = user;

        client.join(id);
    }
}
