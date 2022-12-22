// import {
//   Entity,
//   Column,
//   PrimaryGeneratedColumn,
//   ManyToOne,
//   OneToMany,
// } from 'typeorm';
//
// @Entity()
// export class Category {
//   @PrimaryGeneratedColumn()
//   id: number;
//
//   @Column()
//   name: string;
//
//   @Column()
//   description: string;
//
//   @ManyToOne((type) => Category, (category) => category.children)
//   parent: Category;
//   @OneToMany((type) => Category, (category) => category.parent)
//   children: Category[];
// }
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Tree,
  TreeChildren,
  TreeParent,
  TreeLevelColumn,
} from 'typeorm';

@Entity()
@Tree('closure-table')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @TreeChildren()
  children: Category[];

  @TreeParent()
  parent: Category;

  @TreeLevelColumn()
  level: number;
}
