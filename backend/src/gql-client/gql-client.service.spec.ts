import { Test, TestingModule } from '@nestjs/testing';
import { GqlClientService } from './gql-client.service';

describe('GqlClientService', () => {
  let service: GqlClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GqlClientService],
    }).compile();

    service = module.get<GqlClientService>(GqlClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
