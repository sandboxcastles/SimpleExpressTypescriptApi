import { environment } from "../environment";
import { MongoDatabase } from "./mongo";

export async function addCollections(db: MongoDatabase) {
    await db.startDatabase();
    environment.collections
        ?.filter(collection => collection.items?.length)
        .forEach(collection => db.insertMany(collection.items, collection.collectionName))
}
