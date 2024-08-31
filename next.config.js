"use server";

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_API_BASE_URL: process.env.API_BASE_URL,
    NEXT_API_PATH_LOGIN: process.env.API_PATH_LOGIN,
    NEXT_MQTT_BROKER_URL: process.env.MQTT_BROKER_URL,
    NEXT_MQTT_BROKER_USERNAME: process.env.MQTT_BROKER_USERNAME,
    NEXT_MQTT_BROKER_PASSWORD: process.env.MQTT_BROKER_PASSWORD

  },
  reactStrictMode: true,
};

module.exports = nextConfig;
