import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { tSecuserService } from '#/tSecuser/tSecuser.service';
import { tSecuser } from '#/tSecuser/tSecuser';
import { AuthGuard } from '#/auth/auth.guard';
import { IMessage } from '#/entities/Message';

@Controller('/users')
export class TSecuserController {
  constructor(private readonly tSecuserService: tSecuserService) {}

  @UseGuards(AuthGuard)
  @Get('/')
  findAll(): Promise<tSecuser[]> {
    return this.tSecuserService.findAll();
  }

  @Post('/')
  create(@Body() newUser: tSecuser): Promise<IMessage> {
    return this.tSecuserService.create(newUser);
  }

  @UseGuards(AuthGuard)
  @Get('/:userlogin')
  findOne(@Param('userlogin') userlogin: string): Promise<tSecuser> {
    return this.tSecuserService.findOne(userlogin);
  }

  @UseGuards(AuthGuard)
  @Post(':userlogin/update')
  update(@Body() newUser: tSecuser): Promise<tSecuser> {
    return this.tSecuserService.update(newUser);
  }
}
