import "./CurrenciesBox.css"

const CurrenciesBox = ({image, name, price}) => {
  return (
    <section className="currency-box">
      <div className="currency-name">
        <img src={image} alt={name} />
        <p>{name}</p>
      </div>
      <div className="price-info">
        <p>{price.toFixed(8)}</p>
      </div>
      <div className="small-chart">
        <img src={image} alt="graph" />
      </div>
    </section>
  );
}

export default CurrenciesBox