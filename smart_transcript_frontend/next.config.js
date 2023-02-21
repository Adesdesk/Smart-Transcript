/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // add environment variables
  env: {
    NEXT_PUBLIC_PINATA_API_KEY: 'b0b8a0096bc4b4957cc4',
    NEXT_PUBLIC_PINATA_SECRET: 'e8ff08a04ce87e3171d5482fe6aae97ad6c60cc15ec72889aaccfe4f4b95947d',
    NEXT_PUBLIC_ALCHEMY_KEY: 'https://eth-goerli.g.alchemy.com/v2/zDVopI9bKu4AMOsJc6RnlYfReVlfSRCH',

  },
}

module.exports = nextConfig
