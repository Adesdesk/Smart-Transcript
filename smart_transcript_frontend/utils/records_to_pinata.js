import axios from 'axios';
const key = process.env.NEXT_PUBLIC_PINATA_API_KEY
const secret = process.env.NEXT_PUBLIC_PINATA_SECRET


// creating a database of all successful tokens to pinata
export const pinJSONToIPFS = async (JSONBody) => {
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
    // making an axios POST request to Pinata
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
        // handle success or error cases
        .catch(function (error) {
            console.log(error)
            return {
                success: false,
                message: error.message,
            }

        });
};