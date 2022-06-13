import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { Login } from './entities/login.entity';

@Injectable()
export class LoginService {

  @InjectRepository(Login)
  private readonly repository:Repository<Login>;

  public getUser(id: number): Promise<Login> {
    return this.repository.findOne({where:{id}});
    //return this.repository.findOne(+id);
  }

  public createUser(body: CreateLoginDto): Promise<Login> {
    const user: Login = new Login();

    user.name = body.name;
    user.email = body.email;

    console.log(`dddd`, 'login');

    return this.repository.save(user);
  }
  
  create(createLoginDto: CreateLoginDto) {
    return 'This action adds a new login';
  }

  findAll() {
    return `This action returns all login`;
  }

  findOne(id: number) {
    return `This action returns a #${id} login`;
  }

  update(id: number, updateLoginDto: UpdateLoginDto) {
    return `This action updates a #${id} login`;
  }

  remove(id: number) {
    return `This action removes a #${id} login`;
  }
}
