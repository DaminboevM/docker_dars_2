import { AuthRegisterDto } from './dto/registe.dto';
import { AuthLoginDto } from './dto/login.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { MailerService } from '../../config/mailer/mailer.service';
import { RedisService } from 'src/config/redis/redis.service';
import { VerificationDto } from './dto/verifiacation.dto';
export declare class AuthService {
    private readonly prisma;
    private readonly mailerService;
    private readonly redisService;
    constructor(prisma: PrismaService, mailerService: MailerService, redisService: RedisService);
    register(payload: AuthRegisterDto): Promise<{
        message: string;
    }>;
    verification(payload: VerificationDto): Promise<{
        message: string;
    }>;
    login(payload: AuthLoginDto): Promise<{
        message: string;
    }>;
}
