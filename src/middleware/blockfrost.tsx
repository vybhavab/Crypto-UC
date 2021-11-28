import React, {useState, useEffect}from 'react';
import { fetchBlockfrost } from 'utils/blockfrost';

const Blockfrost= () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState("");

    let address = "addr_test1vphexqqpvzu2suzdxqvhj978ra8ecz7z0aauyl8dlsds5wqfvczmp";

    let blockfrostObj = {
        health : "health",
        walletInfo : `addresses/${address}`
    }

    useEffect(() => {
        async function fetchMyAPI() {
            let walletInfo = await fetchBlockfrost(blockfrostObj.walletInfo)
            setItems(walletInfo);
          }
        fetchMyAPI()
    }, [])
    return(
        <div>
            <p>{JSON.stringify(items)}</p>
        </div>
    )
}
export default Blockfrost;