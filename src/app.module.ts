import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectController } from './project/project.controller';
import { ProjectService } from './project/project.service';
import { ProjectModule } from './project/project.module';
import { DatabaseService } from './database/database.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';






@Module({
  imports: [ProjectModule, ConfigModule.forRoot(), DatabaseModule],
  controllers: [AppController, ProjectController],
  providers: [AppService, ProjectService, DatabaseService, ConfigService],
})
export class AppModule {}
