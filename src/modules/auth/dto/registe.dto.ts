import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class AuthRegisterDto {

    @ApiProperty({example: 'Muhammadrizo'})
    @IsString()
    @IsNotEmpty()
    name: string

    @ApiProperty({example: 'm701rizo@gmail.com'})
    @IsEmail()
    @IsNotEmpty()
    email: string
}
