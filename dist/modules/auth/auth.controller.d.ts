import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/login.dto';
import { AuthRegisterDto } from './dto/registe.dto';
import { VerificationDto } from './dto/verifiacation.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(payload: AuthRegisterDto): Promise<{
        message: string;
    }>;
    verify(payload: VerificationDto): Promise<{
        message: string;
    }>;
    login(payload: AuthLoginDto): Promise<{
        message: string;
    }>;
}
