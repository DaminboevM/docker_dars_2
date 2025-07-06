import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { RedisService } from './config/redis/redis.service';
import { RedisModule } from './config/redis/redis.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [AuthModule, UsersModule, PrismaModule, RedisModule],
  providers: [RedisService],
})
export class AppModule {}