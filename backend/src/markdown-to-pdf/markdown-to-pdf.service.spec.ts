import { Test, TestingModule } from '@nestjs/testing';
import { MarkdownToPdfService } from './markdown-to-pdf.service';

describe('MarkdownToPdfService', () => {
  let service: MarkdownToPdfService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarkdownToPdfService],
    }).compile();

    service = module.get<MarkdownToPdfService>(MarkdownToPdfService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
