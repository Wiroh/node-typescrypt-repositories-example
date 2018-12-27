import { ConnectionKnex } from "../../connexion/connexionKnex";
import { Repository } from "../base/Repository";
import { UserRepository } from "../UserRepository";
import { User } from "../../entities/User";
import { Post } from "../../entities/Post";
import { PostRepository } from "../PostRepository";

export class RepositoryFactory {
    protected static knex = new ConnectionKnex().knex();

    public static getUserRepository(): Repository<User> {
        return new UserRepository(RepositoryFactory.knex);
    }

    public static getPostRepository(): Repository<Post> {
        return new PostRepository(RepositoryFactory.knex);
    }
}