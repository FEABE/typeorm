import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  fistName: string;
  @Column()
  lastName: string;
  @Column()
  isActive: boolean;
}
