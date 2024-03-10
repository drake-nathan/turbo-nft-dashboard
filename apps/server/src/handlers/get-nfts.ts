import { prisma } from "../../prisma";

export const getNfts = async (): Promise<Response> => {
  try {
    const nfts = await prisma.nft.findMany();

    return new Response(JSON.stringify(nfts), {
      headers: {
        "content-type": "application/json",
      },
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching NFTs", error);
    return new Response("Internal server error", {
      status: 500,
    });
  }
};
