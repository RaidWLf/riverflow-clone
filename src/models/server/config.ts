import env from "@/env"; // Import the env object from the env.ts file
import { Client, Databases, Avatars, Users, Storage } from "node-appwrite"; // Import the Client class from the node-appwrite package

const client = new Client()
	.setEndpoint(env.appwrite.endpoint)
	.setProject(env.appwrite.projectId)
	.setKey(env.appwrite.apiKey); // Create a new instance of the Client class and set the endpoint, project ID, and API key

const databases = new Databases(client);
const avatars = new Avatars(client);
const users = new Users(client);
const storage = new Storage(client);

export { client, databases, avatars, users, storage };
