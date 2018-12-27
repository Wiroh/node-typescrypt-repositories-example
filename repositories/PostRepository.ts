import { Repository } from "./base/Repository";
import { Post } from "../entities/Post";
import { RepositoryFactory } from "./factories/RepositoryFactory";

export class PostRepository extends Repository<Post> {
    constructor(connexion) {
        super(connexion, 'post');
    }
}