import { IsEmail, IsNotEmpty, IsString } from "class-validator";

//https://betterprogramming.pub/nest-js-project-with-typeorm-and-postgres-ce6b5afac3be
export class CreateLoginDto {

    @IsString()
    @IsNotEmpty()
    public name :string;

    @IsEmail()
    public email:string;

}
