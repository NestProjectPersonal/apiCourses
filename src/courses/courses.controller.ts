import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Controller('courses')


export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

 

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }
  
  @Get(':_id')
  findOne(@Param('_id') _id: string) {
    return this.coursesService.findOne(_id);
  }
  /*
  
  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(id, updateCourseDto);
  }
  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(id);
  }
  
  @Get()
  getCourses() {
    return this.coursesService.findAll();
  }
  
  @Get(':_id')
  async getCoursesByuuid(@Param('_id') _id: string) {
    return this.coursesService.findOne(_id);
  }
  
  */

}
