import { IsNumber, IsString, IsUUID, MinLength } from "class-validator";

export class CreateCourseDto {

    //@IsUUID()  // Esta validación asegura que el UUID sea del formato correcto
    //_id: string;
    
    @IsString()
    @MinLength(1)
    name:string;
    
    @IsString()
    @MinLength(1)
    description:string;
    
    @IsNumber()
    credits: number


}
