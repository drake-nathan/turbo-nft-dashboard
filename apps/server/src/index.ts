import { envVars } from "@repo/env-vars";

import { getNfts } from "./handlers/get-nfts";

const server = Bun.serve({
  fetch: (req) => {
    const url = new URL(req.url);

    if (url.pathname === "/nfts") return getNfts();

    return new Response("Hello, degenerates.");
  },
  port: envVars.PORT ?? 4269,
});

console.info(
  `Server listening at ${new Date().toLocaleTimeString()} on http://localhost:${server.port}`,
);
