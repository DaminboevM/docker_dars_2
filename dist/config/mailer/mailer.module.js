"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailerModule = void 0;
const common_1 = require("@nestjs/common");
const mailer_service_1 = require("./mailer.service");
const mailer_1 = require("@nestjs-modules/mailer");
const path_1 = require("path");
const handlebars_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
let MailerModule = class MailerModule {
};
exports.MailerModule = MailerModule;
exports.MailerModule = MailerModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule.forRoot({
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
                    dir: (0, path_1.join)(process.cwd(), 'src', 'template'),
                    adapter: new handlebars_adapter_1.HandlebarsAdapter(),
                    options: {
                        strict: true
                    }
                }
            })
        ],
        providers: [mailer_service_1.MailerService],
        exports: [mailer_service_1.MailerService]
    })
], MailerModule);
//# sourceMappingURL=mailer.module.js.map