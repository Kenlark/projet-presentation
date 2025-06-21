import { Module } from '@nestjs/common';
import { MatchingService } from './matching.service';

@Module({
  providers: [MatchingService],
  exports: [MatchingService],
})
export default class MatchingModule {}
