"use server";

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_API_BASE_URL: process.env.API_BASE_URL,
    NEXT_API_PATH_LOGIN: process.env.API_PATH_LOGIN
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
