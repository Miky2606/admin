/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  env: {
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    FIREBASE_KEYS: process.env.FIREBASE_KEYS,
    LOCAL_AUTH_URL: process.env.LOCAL_AUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    API_URL: process.env.API_URL,
    CLIENT_EMAIL: process.env.CLIENT_EMAIL,
    PROJECT_ID: process.env.PROJECT_ID,
  },
};

module.exports = nextConfig;
