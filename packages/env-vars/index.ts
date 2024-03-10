import { z } from "zod";

const envVarsSchema = z.object({
  CHANNEL_ID_REKT: z.string(),
  DATABASE_URL: z.string(),
  DISCORD_TOKEN: z.string(),
  ETHERSCAN_API_KEY: z.string(),
  INFURA_KEY: z.string(),
  NODE_ENV: z.enum(["development", "production", "test"]),
  OPENSEA_API_KEY: z.string(),
  PORT: z.string().nullish(),
});

export const envVars = envVarsSchema.parse(process.env);
