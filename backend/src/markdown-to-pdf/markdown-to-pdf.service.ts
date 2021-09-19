import { Injectable } from '@nestjs/common';
import { mdToPdf } from 'md-to-pdf';

@Injectable()
export class MarkdownToPdfService {
    async convert(content: string): Promise<Buffer> {
        const md = `---
stylesheet: https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css
body_class: markdown-body
pdf_options:
    format: A5
    margin: 10mm
    printBackground: true
    headerTemplate: |-
        <style>
            section {
                margin: 0 auto;
                font-family: system-ui;
                font-size: 11px;
            }
        </style>
        <section>
            <span class="date"></span>
        </section>
    footerTemplate: |-
        <section>
            <div style="display: flex; justify-content: center; width: 100%;">
                <a href="http://schoolnotes.felixwochnick.de>School Notes</a>
            </div>
        </section>
    emoji: true
---
${content}`;
        const pdf = await mdToPdf({ content: md });

        return pdf.content;
    }
}
