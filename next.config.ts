import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "*": ["types/*"]
    }
  }


  /* config options here */
};

export default nextConfig;
