import { getAuth } from "~/util/server/auth";

async function handler(request: Request) {
  try {
    return await getAuth().handler(request);
  } catch (error) {
    const url = new URL(request.url);
    console.error("[auth]", request.method, url.pathname, error);
    throw error;
  }
}

export {
  handler as DELETE,
  handler as GET,
  handler as PATCH,
  handler as POST,
  handler as PUT,
};
