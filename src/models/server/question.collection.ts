import { IndexType, Permission } from "node-appwrite";
import { db, questionCollection } from "../name";
import { databases } from "./config";

export default async function createQuestionCollection() {
	// create collection
	await databases.createCollection(
		db,
		questionCollection,
		questionCollection,
		[
			Permission.read("any"),
			Permission.read("users"),
			Permission.write("users"),
			Permission.delete("users"),
			Permission.create("users"),
			Permission.update("users"),
		]
	);
	console.log("Collection created: ", questionCollection);

	// creating attributes in question collection
	await Promise.all([
		databases.createStringAttribute(
			db,
			questionCollection,
			"title",
			100,
			true
		),
		databases.createStringAttribute(
			db,
			questionCollection,
			"content",
			10000,
			true
		),
		databases.createStringAttribute(
			db,
			questionCollection,
			"authorID",
			50,
			true
		),
		databases.createStringAttribute(
			db,
			questionCollection,
			"tags",
			50,
			true,
			undefined,
			true
		),
		databases.createStringAttribute(
			db,
			questionCollection,
			"attachmentID",
			50,
			false
		),
	]);
	console.log("Attributes created in collection: ", questionCollection);

	// creating indexes in question collection
	await Promise.all([
		databases.createIndex(
			db,
			questionCollection,
			"title",
			IndexType.Fulltext,
			["title"],
			["asc"]
		),
		databases.createIndex(
			db,
			questionCollection,
			"content",
			IndexType.Fulltext,
			["content"],
			["asc"]
		),
	]);
}
