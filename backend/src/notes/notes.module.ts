import { Module } from '@nestjs/common';
import { NotesGateway } from './notes.gateway';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { GqlClientService } from 'src/gql-client/gql-client.service';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { MarkdownToPdfService } from '../markdown-to-pdf/markdown-to-pdf.service';

@Module({
    imports: [AuthModule],
    providers: [
        NotesGateway,
        NotesService,
        GqlClientService,
        AuthService,
        MarkdownToPdfService,
    ],
    controllers: [NotesController],
    exports: [NotesGateway],
})
export class NotesModule {}
