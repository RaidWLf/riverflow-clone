import { Permission } from "node-appwrite";
import { db, answerCollection } from "../name";
import { databases } from "./config";

export default async function createAnswerCollection() {
	// create collection
	await databases.createCollection(db, answerCollection, answerCollection, [
		Permission.read("any"),
		Permission.read("users"),
		Permission.write("users"),
		Permission.delete("users"),
		Permission.create("users"),
		Permission.update("users"),
	]);
	console.log("Collection created: ", answerCollection);

	// creating attributes in answer collection
	await Promise.all([
		databases.createStringAttribute(
			db,
			answerCollection,
			"content",
			10000,
			true
		),
		databases.createStringAttribute(
			db,
			answerCollection,
			"questionID",
			50,
			true
		),
		databases.createStringAttribute(
			db,
			answerCollection,
			"authorID",
			50,
			true
		),
	]);
	console.log("Attributes created in collection: ", answerCollection);
}
