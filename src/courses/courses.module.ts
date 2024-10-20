import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CoursesController } from './courses.controller';
import { Course, CourseSchema } from './entities/course.entity';
import { CoursesService } from './courses.service';

@Module({
  
  imports: [
    MongooseModule.forFeature([
      {
        name: Course.name, //name extends de documento
        schema: CourseSchema,
      }
    ])
  ],

  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule { }
