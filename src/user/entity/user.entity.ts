import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'varchar' })
  firstname: string;

  @Column({ type: 'varchar' })
  username: string;

  @Column({ type: 'varchar' })
  lastname: string;

  @Column({ type: 'int' })
  age: number;

  @Column({ type: 'varchar', nullable: true })
  birthcity: string ;
}
