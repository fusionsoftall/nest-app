import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Login {

    @PrimaryGeneratedColumn()
    public id : number;

    @Column({type:'varchar', length:120})
    public name:string;

    @Column({type:'varchar', length:120})
    public email:string;

    @Column({type:'boolean', default:false})
    public isDeleted:boolean;

    @CreateDateColumn({type:'timestamp'})
    public createAt !: Date;

    @UpdateDateColumn({type:'timestamp'})
    public updateAt !: Date;

}
