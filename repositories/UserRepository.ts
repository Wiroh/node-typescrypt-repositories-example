import { Repository } from "./base/Repository";
import { User } from "../entities/User";

export class UserRepository extends Repository<User> {
    constructor(connexion) {
        super(connexion, 'user');
    }
}