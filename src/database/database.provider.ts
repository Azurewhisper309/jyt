import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class databaseProvider {
  constructor(private configService: ConfigService) {}
  async testDbConnection(): Promise<any> {
    const { Client } = require('pg');
    const port = this.configService.get<number>('POSTGRES_DB_PORT');
    const user = this.configService.get<string>('POSTGRES_DB_USER');
    const host = this.configService.get<string>('POSTGRES_DB_HOST');
    const password = this.configService.get<string>('POSTGRES_DB_PASSWORD');
    const name = this.configService.get<string>('POSTGRES_DB_NAME');
    const client = new Client({
      port: Number(port),
      user,
      host,
      password,
      name,
    });
    if (!host || !user || !password || !name) {
      throw new Error('PostgreSQL configuration is invalid or incomplete');
    }
    console.log(port, typeof port);
    try{
      await client.connect();
      const res = await client.query('SELECT NOW()');
      await client.end();
      return {time: res.rows[0].now};
    }
    catch (error){
      return {error: error.message};
    }
}
}