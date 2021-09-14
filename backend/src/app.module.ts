import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { GqlClientService } from './gql-client/gql-client.service';
import { NotesService } from './notes/notes.service';
import { NotesController } from './notes/notes.controller';
import { NotesModule } from './notes/notes.module';
import { Markdown2pdfService } from './markdown2pdf/markdown2pdf.service';
import { MarkdownToPdfService } from './markdown-to-pdf/markdown-to-pdf.service';

@Module({
    imports: [
        AuthModule,
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, 'static'),
        }),
        NotesModule,
    ],
    controllers: [
        AppController,
        AuthController,
        UserController,
        NotesController,
    ],
    providers: [
        AppService,
        AuthService,
        UserService,
        GqlClientService,
        NotesService,
        Markdown2pdfService,
        MarkdownToPdfService,
    ],
})
export class AppModule {}
