import { Client, Databases } from 'appwrite';

const client = new Client()
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const databases = new Databases(client);

export const APPWRITE_DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
export const APPWRITE_PROJECTS_ID = import.meta.env.VITE_APPWRITE_PROJECTS_ID;
export const APPWRITE_SKILLS_ID = import.meta.env.VITE_APPWRITE_SKILLS_ID;

export { client, databases };
