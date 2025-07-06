import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<{
        id: string;
        name: string;
        email: string;
    }[]>;
    update(payload: UpdateUserDto): Promise<{
        message: string;
    }>;
    delete(id: string): Promise<{
        message: string;
    }>;
}
