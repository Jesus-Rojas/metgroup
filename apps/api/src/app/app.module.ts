import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceConfig } from './database/data-source-config';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceConfig),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
