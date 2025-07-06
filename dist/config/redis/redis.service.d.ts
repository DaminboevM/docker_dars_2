import { OnModuleInit } from '@nestjs/common';
export declare class RedisService implements OnModuleInit {
    private client;
    onModuleInit(): void;
    get(key: string): Promise<string | null>;
    set(key: string, code: string, second: number): Promise<"OK">;
    del(key: string): Promise<number>;
}
