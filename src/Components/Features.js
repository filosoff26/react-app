import React from "react";

const Features = () => {
  return (
    <div className="container">
      <h1
        style={{
          textAlign: "center",
          marginTop: "2rem",
          marginBottom: "1rem",
        }}
      >
        Возможности и особенности приложения
      </h1>
      <hr />
      <ul>
        <li>Учет задач</li>
        <li>Создание и редактирование записей</li>
        <li>Поддержка реляционной СУБД</li>
        <li>Клиент-серверная архитектура</li>
      </ul>
    </div>
  );
};

export default Features;
