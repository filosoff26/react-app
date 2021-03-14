import React from "react";

const Pricing = () => {
  return (
    <div className="container">
      <h1
        style={{
          textAlign: "center",
          marginTop: "2rem",
          marginBottom: "1rem",
        }}
      >
        Условия и цены
      </h1>
      <hr />
      <ul>
        <li>Базовый тариф - бесплатно</li>
        <li>Пожертвования на развитие - любая сумма на ваше усмотрение</li>
      </ul>
    </div>
  );
};

export default Pricing;
