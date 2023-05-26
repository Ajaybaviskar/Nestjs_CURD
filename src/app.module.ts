import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './task/task.module';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';

@Module({
  // imports: [],
  //   MongooseModule.forRoot(),
  //
  controllers: [AppController, TasksController],
  providers: [AppService, TasksService],
  imports: [TaskModule],
})
export class AppModule {}
