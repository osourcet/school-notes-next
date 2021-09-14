import { Injectable } from '@nestjs/common';
import { mdToPdf } from 'md-to-pdf';

@Injectable()
export class MarkdownToPdfService {
    async convert(content: string): Promise<Buffer> {
        const md = `---
stylesheet: https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css
body_class: markdown-body
highlight_style: monokai
pdf_options:
    format: A4
    margin: 10mm
    printBackground: true
---
${content}`;
        const pdf = await mdToPdf({ content: md });

        return pdf.content;
    }
}
