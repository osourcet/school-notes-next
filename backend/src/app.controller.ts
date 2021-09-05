import { Controller } from '@nestjs/common';
import { WebSocketGateway } from '@nestjs/websockets';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}
}
