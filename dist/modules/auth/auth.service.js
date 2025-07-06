"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const mailer_service_1 = require("../../config/mailer/mailer.service");
const redis_service_1 = require("../../config/redis/redis.service");
let AuthService = class AuthService {
    prisma;
    mailerService;
    redisService;
    constructor(prisma, mailerService, redisService) {
        this.prisma = prisma;
        this.mailerService = mailerService;
        this.redisService = redisService;
    }
    async register(payload) {
        if (await this.prisma.user.findFirst({ where: { email: payload.email } })) {
            throw new common_1.ConflictException('email alredy  exists !');
        }
        const code = Math.floor(100000 + Math.random() * 900000);
        this.mailerService.sendConfigurationMailer(payload.email, code);
        await this.redisService.set(`register: ${payload.email}`, JSON.stringify({ ...payload, code }), 600);
        return { message: 'emailga habar bordi !' };
    }
    async verification(payload) {
        const data = await this.redisService.get(`register: ${payload.email}`);
        if (!data)
            throw new common_1.BadRequestException('OTp expire ');
        const user = JSON.parse(data);
        if (user.code != payload.code)
            throw new common_1.BadRequestException('Otp Invalide !');
        await this.redisService.del(`register: ${payload.email}`);
        delete user.code;
        await this.prisma.user.create({ data: user });
        return { message: 'user succes created !' };
    }
    async login(payload) {
        if (!await this.prisma.user.findFirst({ where: { email: payload.email } })) {
            throw new common_1.NotFoundException('user not found !');
        }
        return { message: 'user succes login' };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        mailer_service_1.MailerService,
        redis_service_1.RedisService])
], AuthService);
//# sourceMappingURL=auth.service.js.map