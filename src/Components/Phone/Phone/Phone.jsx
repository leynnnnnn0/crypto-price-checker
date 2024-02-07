import "./Phone.css";
import btc from "../../../images/btc.png"
import homeStore from "../../../Store/homeStore";
import { CiSearch } from "react-icons/ci";
import {
  AreaChart,
  Area,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const Phone = () => {
    const store = homeStore();
  const item = store.coinSearched;
  const graphData = store.graphData;

  const handleSearch = () => {
    store.getGraphData();
    store.searchByQuery();
  }

    return (
      <div className="phone-simulator">
        <div className="search-section">
          <input
            type="text"
            className="search-bar"
            placeholder="Search...."
            value={store.query}
            onChange={store.setQuery}
          />
          <CiSearch className="search-icon" onClick={handleSearch} />
        </div>
        <div className="chart">
          <AreaChart
            width={220}
            height={150}
            data={graphData ? graphData : data}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <Area
              type="monotone"
              dataKey="Price"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </div>
        <div className="more-information">
          {item.length !== 0 ? (
            <>
              <div className="name-of-coin">
                <img src={item.data.image.small} alt="btc" />
                <h3>
                  {item.data.name} ({item.data.symbol})
                </h3>
              </div>
              <div className="btc-price">
                <h3>{item.data.market_data.current_price.btc}</h3>
                <p>BTC PRICE</p>
              </div>
              <div className="usd-price">
                <h3>${item.data.market_data.current_price.usd.toFixed(3)}</h3>
                <p>USD PRICE</p>
              </div>
            </>
          ) : (
            <>
              <div className="name-of-coin">
                <img src={btc} alt="btc" />
                <h3>BITCOIN (BTC)</h3>
              </div>
              <div className="btc-price">
                <h3>0.000080243</h3>
                <p>BTC PRICE</p>
              </div>
              <div className="usd-price">
                <h3>$9023.03</h3>
                <p>USD PRICE</p>
              </div>
            </>
          )}
        </div>
      </div>
    );
}

export default Phone