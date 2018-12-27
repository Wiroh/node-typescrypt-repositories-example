import { MongoClient, Db } from "mongodb";

export class ConnexionMongodb {
    private static connexion: MongoClient;

    public async mongodb(): Promise<MongoClient> {
        if (!ConnexionMongodb.connexion) {
            ConnexionMongodb.connexion = await MongoClient.connect(
                'mongodb://localhost', 
                { useNewUrlParser: true }
            );
        }
        return ConnexionMongodb.connexion;
    }
}