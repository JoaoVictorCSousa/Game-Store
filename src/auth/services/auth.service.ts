import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { CustumerService } from "../../customer/services/custumer.service";
import { Bcrypt } from "../bcrypt/bcrypt";

@Injectable()
export class AuthService{
    constructor(
        private custumerService: CustumerService,
        private jwtService: JwtService,
        private bcrypt: Bcrypt
    ) {}

    async validateUser(username: string, password: string): Promise<any>{
        const searchCustumer = await this.custumerService.findByCustumer(username)

        if(!searchCustumer)
        throw new HttpException('User not found!', HttpStatus.NOT_FOUND);

        const match = await this.bcrypt.comparePassword(searchCustumer.password, password)
    }
}

