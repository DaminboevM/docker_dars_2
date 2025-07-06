import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/dto';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}


  @ApiOperation({summary: 'Hamma foydalanuvchilarni olish'})
  @Get()
  getAll () {
    return this.userService.getAll()
  }

  @ApiOperation({ summary: 'Foydalanuvchini yangilash' })
  @ApiBody({ type: UpdateUserDto })
  @Put('update')
  async update(@Body() payload: UpdateUserDto) {
    return this.userService.update(payload);
  }

  @ApiOperation({ summary: 'Foydalanuvchini ochirish' })
  @ApiParam({ name: 'id', description: 'Foydalanuvchi IDsi' })
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}