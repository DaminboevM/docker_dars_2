import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsNumber } from "class-validator"

export class VerificationDto {
    
    @ApiProperty({example: 'm701rizo@gmail.com'})
    @IsEmail()
    @IsNotEmpty()
    email  : string

    @ApiProperty({example: 123456})
    @IsNumber()
    @IsNotEmpty()
    code : number
}