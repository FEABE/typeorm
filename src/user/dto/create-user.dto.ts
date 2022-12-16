import { IsInt, IsString } from 'class-validator';
export class CreateUserDto {
  @IsString()
  readonly username: string;
  @IsInt()
  readonly password: number;
  // 알아서 추가 하기
}
