import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://ulianchenko:a1b2c3d4e5@cluster0.nzybwy4.mongodb.net/dbNextEvents?retryWrites=true&w=majority&appName=Cluster0"
  );

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function getAllDocuments(client, collection, sort, filter = {}) {
  const db = client.db();
  const documents = await db.collection(collection).find(filter).sort(sort).toArray();

  return documents;
}
