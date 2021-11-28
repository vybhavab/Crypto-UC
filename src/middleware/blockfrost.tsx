import React, {useState, useEffect}from 'react';
import { fetchBlockfrost } from 'utils/blockfrost';

    // const API = new BlockFrostAPI({
    //     projectId: process.env.REACT_APP_BLOCKFROST_API_KEY as string
    //   });
    //   try {
    //     const latestBlock = await API.blocksLatest();
    //     const networkInfo = await API.network();
    //     const latestEpoch = await API.epochsLatest();
    //     const health = await API.health();
    //     const address = await API.addresses(
    //       'addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz',
    //     );
    //     const pools = await API.pools({ page: 1, count: 10, order: 'asc' });
      
    //     console.log('pools', pools);
    //     console.log('address', address);
    //     console.log('networkInfo', networkInfo);
    //     console.log('latestEpoch', latestEpoch);
    //     console.log('latestBlock', latestBlock);
    //     console.log('health', health);
    //   } catch (err) {
    //     console.log('error', err);
    //   }
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