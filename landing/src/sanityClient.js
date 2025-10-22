import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Configure your client
export const client = createClient({
  projectId: "uh2xny5y", // see below
  dataset: "blog_posts", // default dataset in Sanity Studio
  useCdn: true, // set to false for fresh data
  apiVersion: "2025-10-21", // use today's date
});

// Helper to build image URLs
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
