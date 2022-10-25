import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt'

@Injectable()
export class Bcrypt{

    async encryptPassword(password:string): Promise<string>{

        let jump: number = 10
        return await bcrypt.hash(password, jump);
    }

    async comparePassword(dataPassword: string, typedPassword: string): Promise<boolean>{
        return bcrypt.compareSync(typedPassword, dataPassword);
    }
}