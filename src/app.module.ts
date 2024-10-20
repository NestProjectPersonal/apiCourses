import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/apicourses'),
    CoursesModule,
  ],

})
export class AppModule {}
