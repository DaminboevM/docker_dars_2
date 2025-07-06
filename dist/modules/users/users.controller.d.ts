import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
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
