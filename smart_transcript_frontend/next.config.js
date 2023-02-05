/** @type {import('next').NextConfig} */
const Dotenv = require("dotenv-webpack");
const nextConfig = {
  reactStrictMode: true,
  plugins: [
    new Dotenv(),
  ],
}

module.exports = nextConfig
