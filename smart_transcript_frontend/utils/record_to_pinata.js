import axios from 'axios';
require('dotenv').config();
const key = process.env.PINATA_API_KEY;
const secret = process.env.PINATA_SECRET;
/*const key = "b0b8a0096bc4b4957cc4";
const secret = "e8ff08a04ce87e3171d5482fe6aae97ad6c60cc15ec72889aaccfe4f4b95947d";*/


export const pinJSONToIPFS = async (JSONBody) => {
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
    //making an axios POST request to Pinata
    return axios
        .post(url, JSONBody, {
            headers: {
                pinata_api_key: key,
                pinata_secret_api_key: secret,
            }
        })
        .then(function (response) {
            return {
                success: true,
                pinataUrl: "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash
            };
        })
        .catch(function (error) {
            console.log(error)
            return {
                success: false,
                message: error.message,
            }

        });
};