import { getEnvVariable } from "../lib/utils";

export const enviromentConfig = {
    port: parseInt(getEnvVariable('PORT'), 10) || 3000,
  };