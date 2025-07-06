import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MailerModule } from 'src/config/mailer/mailer.module';
import { RedisModule } from 'src/config/redis/redis.module';

@Module({
  imports: [PrismaModule, MailerModule, RedisModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
