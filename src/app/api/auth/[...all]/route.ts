import { getAuth } from "~/util/server/auth";

function handler(request: Request) {
  return getAuth().handler(request);
}

export {
  handler as DELETE,
  handler as GET,
  handler as PATCH,
  handler as POST,
  handler as PUT,
};
