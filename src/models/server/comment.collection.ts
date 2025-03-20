import { Permission } from "node-appwrite";
import { db, commentCollection } from "../name";
import { databases } from "./config";

export default async function createCommentCollection() {
	// create collection
	await databases.createCollection(db, commentCollection, commentCollection, [
		Permission.read("any"),
		Permission.read("users"),
		Permission.write("users"),
		Permission.delete("users"),
		Permission.create("users"),
		Permission.update("users"),
	]);
	console.log("Collection created: ", commentCollection);

	// creating attributes in question collection
	await Promise.all([
		databases.createStringAttribute(
			db,
			commentCollection,
			"content",
			10000,
			true
		),
		databases.createEnumAttribute(
			db,
			commentCollection,
			"type",
			["question", "answer"],
			true
		),
		databases.createStringAttribute(
			db,
			commentCollection,
			"typeID",
			50,
			true
		),
		databases.createStringAttribute(
			db,
			commentCollection,
			"authorID",
			50,
			true
		),
	]);
	console.log("Attributes created in collection: ", commentCollection);
}
