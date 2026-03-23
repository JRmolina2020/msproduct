import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products') // 👈 AQUÍ ESTÁ LA CLAVE
export class Product {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;
}