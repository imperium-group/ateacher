import { BaseEntity } from './BaseEntity'
import { Entity, Column, ManyToOne } from 'typeorm';
import { Category } from './Category'

@Entity({ name: 'SubCategory' })
export class SubCategory extends BaseEntity {

  @Column({ type: 'varchar', length: 100 })
  name: string

  @Column()
  cost: number

  @Column({ type: 'varchar', length: 1000, nullable: true })
  description: string

  // Muitas subcategorias para uma categoria
  @ManyToOne(() => Category, {eager: true}) //Eager => AutoPopulate => Carrega a entidade relacionada
  category: Category

}