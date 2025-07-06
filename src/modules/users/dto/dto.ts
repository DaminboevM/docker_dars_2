import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator"


export class UpdateUserDto {

    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    id: string


    @ApiProperty({example: 'Muhammadrizo'})
    @IsString()
    @IsOptional()
    name?: string

    @ApiProperty({example: 'm701rizo@gmail.com'})
    @IsEmail()
    @IsOptional()
    email?: string
}