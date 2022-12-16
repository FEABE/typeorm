import { IsInt, IsNumber, IsString } from 'class-validator';
export class UpdateUserDto {
  @IsInt()
  readonly user_idx: string;
  @IsString()
  readonly username: string;
  @IsInt()
  readonly password: number;
  // 알아서 추가 하기
}
