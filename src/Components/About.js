import React from "react";

const About = () => {
  return (
    <div className="container">
      <h1
        style={{
          textAlign: "center",
          marginTop: "2rem",
          marginBottom: "1rem",
        }}
      >
        О приложении
      </h1>
      <hr />
      <p>Простое приложение для создания и редактирования задач. Демонстрация работы с базой данных, клиент-серверная архитектура на фреймворке React.js </p>
    </div>
  );
};

export default About;
