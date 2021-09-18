import {
    ConnectedSocket,
    MessageBody,
    OnGatewayConnection,
    SubscribeMessage,
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
        try {
            const user = await this.authService.verify(
                client.handshake.headers.authorization as string,
            );

            console.log('user', user);
            console.log('headers', client.handshake.headers);

            if (user) {
                console.log(user);

                const { id } = user;

                client.join(id);
            }
        } catch (error) {
            console.log(error);
        }
    }

    @SubscribeMessage('auth')
    async auth(
        @MessageBody() authorization: string,
        @ConnectedSocket() client: Socket,
    ) {
        try {
            const user = await this.authService.verify(authorization);

            console.log('user', user);
            console.log('headers', authorization);

            if (user) {
                console.log(user);

                const { id } = user;

                client.join(id);
            }
        } catch (error) {
            console.log(error);
        }
    }
}
