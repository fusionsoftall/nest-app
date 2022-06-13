import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseInterceptors, UseGuards, HttpCode, Redirect } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { Login } from './entities/login.entity';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoggingInterceptor } from 'src/Interceptor/logging.interceptor';
import { RoleGuard } from 'src/Guards/user.guard';
import { writeLog } from 'src/common/utility/consol-log';

@Controller('login')
@ApiTags("Login API")
@UseGuards(RoleGuard)
//@UseInterceptors(LoggingInterceptor)
export class LoginController {
  constructor(private readonly loginService: LoginService) {}


  @Get(':id')
  @ApiOperation({summary:'login api check', description:'login processing'})
  @ApiCreatedResponse({description:'login create....', type:Login})
  @Redirect('https://www.naver.com/', 302)
  async getUser(@Param('id', ParseIntPipe) id: number): Promise<Login> {
    writeLog("entry point")
    return await this.loginService.getUser(id);
  }
  
  @Post()
  @HttpCode(201)
  public createUser(@Body() body: CreateLoginDto): Promise<Login> {
    console.log(body);
    return this.loginService.createUser(body);
  }

  @Post()
  @ApiOperation({summary:'login api check', description:'login processing'})
  @ApiCreatedResponse({description:'login create....', type:Login})
  create(@Body() createLoginDto: CreateLoginDto) {
    return this.loginService.create(createLoginDto);
  }

  @Get()
  findAll() {
    return this.loginService.findAll();
  }

  // @Get(':id2')
  // findOne(@Param('id2') id: string) {
  //   return this.loginService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoginDto: UpdateLoginDto) {
    return this.loginService.update(+id, updateLoginDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loginService.remove(+id);
  }
}
