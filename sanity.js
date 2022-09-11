import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

const client = sanityClient({
    projectId: "cftmjm7a",
    dataset: "production",
    apiHost: "2021-10-21",
});

const builder = imageUrlBuilder(client);
export const urlFrom = (source) => builder.image(source);

// RUN THIS to add exeption for localhost 3000 CORS policy
// sanity cors add http://localhost:3000

export default client;