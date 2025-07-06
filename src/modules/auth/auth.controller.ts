import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/login.dto';
import { AuthRegisterDto } from './dto/registe.dto';
import { VerificationDto } from './dto/verifiacation.dto';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Royxatdan otish' })
  @ApiBody({ type: AuthRegisterDto })
  @Post('register')
  register(@Body() payload: AuthRegisterDto) {
    return this.authService.register(payload);
  }

  @ApiOperation({ summary: 'Email tasdiqlash (OTP)' })
  @ApiBody({ type: VerificationDto })
  @Post('verify')
  verify(@Body() payload: VerificationDto) {
    return this.authService.verification(payload);
  }

  @ApiOperation({ summary: 'Tizimga kirish' })
  @ApiBody({ type: AuthLoginDto })
  @Post('login')
  login(@Body() payload: AuthLoginDto) {
    return this.authService.login(payload);
  }
}