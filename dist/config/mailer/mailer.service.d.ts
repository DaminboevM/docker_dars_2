import { MailerService as NestMailerService } from '@nestjs-modules/mailer';
export declare class MailerService {
    private readonly mailerService;
    constructor(mailerService: NestMailerService);
    sendConfigurationMailer(email: string, code: number): Promise<void>;
}
