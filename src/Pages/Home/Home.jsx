import React, { useEffect } from "react";
import "./Home.css";
import homeStore from "../../Store/homeStore.js";
import CurrenciesBox from "../../Components/Phone/CurrenciesBox/CurrenciesBox.jsx";
import Phone from "../../Components/Phone/Phone/Phone.jsx";

const Home = () => {
  const store = homeStore();
  const popularCoins = store.popularCoins;
  useEffect(() => {
    store.getPopularCoins();
  }, []);

  const currencies = popularCoins.map(coin => {
    return (
      <CurrenciesBox key={coin.id} name={coin.name} price={coin.price} image={coin.image} />
  )})

  return (
    <div className="home">
      <div className="tablet-simulator">
        <div className="popular-list">
          <h3>Popular cryptocurrencies</h3>
          {currencies}
        </div>
        <div className="search-section">
          <Phone/>
        </div>
      </div>
    </div>
  );
};

export default Home;
