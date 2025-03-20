import { Permission } from "node-appwrite";
import { questionAttachmentBucket } from "../name";
import { storage } from "./config";

export default async function getOrCreateStorage() {
	try {
		await storage.getBucket(questionAttachmentBucket);
		console.log("Bucket exists: ", questionAttachmentBucket);
	} catch (error) {
		try {
			await storage.createBucket(
				questionAttachmentBucket,
				questionAttachmentBucket,
				[
					Permission.read("any"),
					Permission.read("users"),
					Permission.write("users"),
					Permission.delete("users"),
					Permission.create("users"),
					Permission.update("users"),
				],
				false,
				undefined,
				undefined,
				["jpg", "png", "gif", "jpeg", "webp", "heic"]
			);
			console.log("Bucket created: ", questionAttachmentBucket);
			console.log("Bucket connected: ", questionAttachmentBucket);
		} catch (error) {
			console.error("Error creating bucket: ", questionAttachmentBucket);
			console.error(error);
		}
	}
}
