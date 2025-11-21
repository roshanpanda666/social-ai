import dotenv from 'dotenv';
dotenv.config({ path: './.env', override: true });

// read at runtime, not destructured at import time
const USER = process.env.MONGO_USER;
const PASS = process.env.MONGO_PASS;

console.log('mongo user ->', USER); // should print sabyasachipanda410

export const connectionSTR = `mongodb+srv://${USER}:${encodeURIComponent(PASS)}@cluster01.wclpnsu.mongodb.net/social-ai-collection?appName=Cluster01`;