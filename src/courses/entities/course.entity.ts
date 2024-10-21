import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Schema()
export class Course extends Document {

    @Prop({ type: String, default: uuidv4 }) 
    _id: string;

    @Prop({
        unique: true,
        index: true,
    })
    name: string;

    @Prop({
        unique: true,
        index: true,
    })
    description: string;

    @Prop({
        unique: true,
        index: true,
    })
    credits: number;

}
export const CourseSchema = SchemaFactory.createForClass(Course);