import theme from "theme";
/*
Specific wallet address
{
    "address": "addr_test1vphexqqpvzu2suzdxqvhj978ra8ecz7z0aauyl8dlsds5wqfvczmp",
    "received_sum": [
        {
            "unit": "lovelace",
            "quantity": "1001310316"
        },
        {
            "unit": "6b8d07d69639e9413dd637a1a815a7323c69c86abbafb66dbfdb1aa7",
            "quantity": "2"
        }
    ],
    "sent_sum": [
        {
            "unit": "lovelace",
            "quantity": "0"
        }
    ],
    "tx_count": 2
}
*/

const testnet_url = "https://cardano-testnet.blockfrost.io/api/v0";


export async function fetchBlockfrost(getInfo:string){
    return await fetch(`${testnet_url}/${getInfo}`,{headers:{"project_id":process.env.REACT_APP_BLOCKFROST_API_KEY as string}})
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    return result
                },
                (error) => {
                    throw new RangeError();
                }
    )
}


