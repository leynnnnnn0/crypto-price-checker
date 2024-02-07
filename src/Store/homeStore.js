import axios from "axios";
import { create } from "zustand";

const homeStore = create((set) => ({
    popularCoins: [],
    query: "",
    coinSearched: [],
    graphData: [],

    setQuery: (e) => {
        set({ query: e.target.value });
    },

    searchByQuery: async () => {
        const { query } = homeStore.getState();
        try {
            const result = await axios.get(`https://api.coingecko.com/api/v3/coins/${query}`);
            set({ coinSearched: result });
        } catch (err) {
            console.log(err);
        }
    },
    getPopularCoins: async () => {
        try {
            const res = await axios.get(
              "https://api.coingecko.com/api/v3/search/trending"
            );
            const popularCoins = res.data.coins.map(coin => {      
                return {
                    name: coin.item.name,
                    id: coin.item.id,
                    image: coin.item.large,
                    price: coin.item.price_btc
                };
            })

            const top5 = popularCoins.slice(0, 5);

            set({ popularCoins: top5 });
        } catch (err) {
            console.log(err)
        }
    },

    getGraphData: async () => {
        const { query } = homeStore.getState();
        try {
            const result = await axios.get(
              `https://api.coingecko.com/api/v3/coins/${query}/market_chart?vs_currency=usd&days=120`
            ); 

            const graphData = result.data.prices.map(price => {
                const [timestamp, p] = price;
                return {
                    Date: timestamp,
                    Price: p
                }
                
            })

            set({graphData})

        } catch (err) {
            console.log(err)
        }
    }
   
}));

export default homeStore;
