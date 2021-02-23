import React from "react";
import Moment from "react-moment";
import "moment/locale/ru";
import { Card, Button } from "react-bootstrap";

const Todos = ({ todo }) => {
  console.log(todo);
  return (
    <Card className="mb-2">
      <Card.Header as="h5">
        Дата создания:{" "}
        <Moment locale="ru" format="ll">
          {todo.created_at}
        </Moment>
      </Card.Header>
      <Card.Body>
        <Card.Title>{todo.title}</Card.Title>
        <Card.Text>{todo.todo}</Card.Text>
        <Button variant="primary">Редактировать</Button>
        <Button variant="danger" className="ml-1">
          Удалить
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Todos;
