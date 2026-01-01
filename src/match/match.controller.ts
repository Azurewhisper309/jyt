import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { databaseProvider } from 'src/database/database.provider';

@Controller('match')
export class MatchController {
  constructor(private readonly databaseProvider1: databaseProvider) {}

  @Get()
  testDbConnection(): Promise<any> {
    return this.databaseProvider1.testDbConnection();
  }
  
}
