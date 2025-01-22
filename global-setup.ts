import { FullConfig } from "@playwright/test";
import dotenv from "dotenv";

export const test_env = process.env.test_env !! "preprod";

async function globalSetup(config: FullConfig) {
    console.log('Running Global Setup...');
    if (test.env){
        dotenv.config([path: `.env.${test_env}`, override:true]);
    };
    
    // Access baseURL from config
    // console.log(`Base URL: ${config.projects[0].use.baseURL}`);
  
    // Perform authentication and store session
    // (Assuming login logic to fetch a token)
  }
  
  export default globalSetup;