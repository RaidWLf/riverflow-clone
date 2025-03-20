import { Avatars, Client, Databases, Account, Storage } from "appwrite";
import env from "../../env";

const client = new Client()
	.setEndpoint(env.appwrite.endpoint)
	.setProject(env.appwrite.projectId);

const databases = new Databases(client);
const avatars = new Avatars(client);
const account = new Account(client);
const storage = new Storage(client);

export { client, databases, avatars, account, storage };
