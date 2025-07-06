import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { AuthRegisterDto } from './dto/registe.dto';
import { AuthLoginDto } from './dto/login.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { MailerService } from '../../config/mailer/mailer.service';
import { RedisService } from 'src/config/redis/redis.service';
import { VerificationDto } from './dto/verifiacation.dto';


@Injectable()
export class AuthService {

  constructor(
    private readonly prisma: PrismaService,
    private readonly mailerService: MailerService,
    private readonly redisService: RedisService
  ) {}

  async register(payload: AuthRegisterDto) {
    if (await this.prisma.user.findFirst({where: {email: payload.email}})) {
        throw new ConflictException('email alredy  exists !')
    }

    
    const code = Math.floor(100000 + Math.random() * 900000)    
    this.mailerService.sendConfigurationMailer(payload.email, code)
    
    await this.redisService.set(`register: ${payload.email}`, JSON.stringify({...payload, code}), 600)
    return {message: 'emailga habar bordi !'}
  }


  async verification (payload: VerificationDto) {
    const data = await this.redisService.get(`register: ${payload.email}`)
    if(!data) throw new BadRequestException('OTp expire ')

    const user = JSON.parse(data)
    if(user.code != payload.code) throw new BadRequestException('Otp Invalide !')

    await this.redisService.del(`register: ${payload.email}`)
    delete user.code

    await this.prisma.user.create({data: user})
    return {message: 'user succes created !'}
    }


  async login (payload: AuthLoginDto) {
    if( !await this.prisma.user.findFirst({where: {email: payload.email}})) {
      throw new NotFoundException('user not found !')
    }

    return {message: 'user succes login'}
  }
}
