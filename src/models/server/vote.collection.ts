import { db, voteCollection } from "../name";
import { databases } from "./config";
import { Permission } from "node-appwrite";

export default async function createVoteCollection() {
	// create vote collection
	databases.createCollection(db, voteCollection, voteCollection, [
		Permission.read("any"),
		Permission.read("users"),
		Permission.write("users"),
		Permission.delete("users"),
		Permission.create("users"),
		Permission.update("users"),
	]);
	console.log("Collection created: ", voteCollection);

	// creating attributes in vote collection
	await Promise.all([
		databases.createEnumAttribute(
			db,
			voteCollection,
			"type",
			["question", "answer"],
			true
		),
		databases.createStringAttribute(db, voteCollection, "typeID", 50, true),
		databases.createEnumAttribute(
			db,
			voteCollection,
			"voteStatus",
			["upVoted", "downVoted"],
			true
		),
		databases.createStringAttribute(
			db,
			voteCollection,
			"voteByID",
			50,
			true
		),
	]);
	console.log("Attributes created in collection: ", voteCollection);
}
