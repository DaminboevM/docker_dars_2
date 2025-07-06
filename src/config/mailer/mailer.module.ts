import { Global, Module } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { MailerModule as NestMailerModule } from '@nestjs-modules/mailer';
import { join } from 'path';
import { HandlebarsAdapter } from  '@nestjs-modules/mailer/dist/adapters/handlebars.adapter'

@Global()
@Module({
  imports: [
    NestMailerModule.forRoot({
      transport: {
        service: 'gmail',
        auth: {
          user: 'dilbarziaev@gmail.com',
          pass: 'shla cqzz fuqq jdju'
        }
      },
      defaults: {
        from: 'Tizim <dilbarziaev@gmail.com>',
        subject: 'Verification Code !'
      },
      template: {
        dir: join(process.cwd(), 'src', 'template'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true
        }
      }
    })
  ],
  providers: [MailerService],
  exports: [MailerService]
})
export class MailerModule {}