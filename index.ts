import { RepositoryFactory } from "./repositories/factories/RepositoryFactory";
import { User } from "./entities/User";
import { Post } from "./entities/Post";

(async () => {
    const postRepo = RepositoryFactory.getPostRepository();
    const userRepo = RepositoryFactory.getUserRepository();

    const user = await userRepo.create(
        new User('John', 'doe')
    );
    const post = await postRepo.create(
        new Post('un titre bidon', user.uid)
    );
    console.log(post);
})();