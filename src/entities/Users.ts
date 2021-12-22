import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNumber, IsString, IsEmail } from 'class-validator';

@Entity('users')
export class Users extends BaseEntity {
  @IsNumber()
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column()
  name: string;

  @IsEmail()
  @Column()
  email: string;
}
