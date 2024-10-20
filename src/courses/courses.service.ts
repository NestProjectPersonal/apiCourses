import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';

import { CreateCourseDto } from './dto/create-course.dto';
import { Course } from './entities/course.entity';


@Injectable()
export class CoursesService {

  constructor(

    @InjectModel(Course.name)
    private readonly coursesModel: Model<Course>,

  ) { }


  async create(createCourseDto: CreateCourseDto) {

    createCourseDto.name = createCourseDto.name.toLocaleLowerCase();
    try {
      const course = await this.coursesModel.create(createCourseDto);
      return course;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  findAll() {
    try {
      const findAll = this.coursesModel.find()
      return findAll

    } catch (error) {

      this.handleExceptions(error);
    }
  }

  findOne(_id: string) {
    return this.coursesModel.findById({ _id })
  }

  /* 
  update(id: string, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }
  
  remove(id: string) {
    return `This action removes a #${id} course`;
  }
  
  */


  /*
    getAllCourses() {
      return this.coursesModel.find();
    }
  
    getCoursesByuuid(_id: string) {
      const course = this.coursesModel.findOne({ where: { id: _id } });
      if (!course) {
        throw new NotFoundException(`Curso con UUID ${_id} no encontrado`);
      }
      return course;
    }
  
  */
  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(`Courses exists in db ${JSON.stringify(error.keyValue)}`);
    }
    console.log(error);
    throw new InternalServerErrorException(`Can't create Courses - Check server logs`);
  }
}
