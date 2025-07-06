import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class AuthLoginDto {

    @ApiProperty({example: 'm701rizo@gmail.com'})
    @IsEmail()
    @IsNotEmpty()
    email: string
}
