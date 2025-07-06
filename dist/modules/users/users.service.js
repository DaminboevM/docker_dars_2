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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let UsersService = class UsersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll() {
        return this.prisma.user.findMany();
    }
    async update(payload) {
        if (!await this.prisma.user.findFirst({ where: { id: payload.id } }) || (payload.email && !await this.prisma.user.findFirst({ where: { email: payload.email } }))) {
            throw new common_1.BadRequestException();
        }
        await this.prisma.user.update({ where: { id: payload.id }, data: payload });
        return { message: 'user succesfull updated !' };
    }
    async delete(id) {
        if (!await this.prisma.user.findFirst({ where: { id } })) {
            throw new common_1.NotFoundException('user not found !');
        }
        await this.prisma.user.delete({ where: { id } });
        return { message: 'user succesfull deletedd !' };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map