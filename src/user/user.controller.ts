import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';
import { ParseIntPipe } from './common/parse-int.pipe';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('signup')
  signup(@Body() createUserDto: CreateUserDto): User {
    const { username, password } = createUserDto;
    return this.userService.signup(createUserDto);
  }
  @Post('signin')
  signin(@Body() createUserDto: CreateUserDto): boolean {
    return this.userService.signin(createUserDto);
  }
  @Get(':user_idx')
  findOne(
    @Param('user_idx', new ParseIntPipe())
    user_idx: number,
  ): string {
    //get by ID logic
    return this.userService.findID(user_idx);
  }
  @Patch()
  edituser(@Body() updateUserDto: UpdateUserDto): any {
    return this.userService.updateUser(updateUserDto);
  }
  @Get()
  getList(): User[] {
    return this.userService.findAll();
  }
}
