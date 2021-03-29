import axios from "axios";

export const sendTodo = (FormData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(FormData);
  try {
    const res = axios.post("/api/todo", body, config);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const deleteTodo = (id_todo) => {
  try {
    let res = axios.delete(`/api/todo/${id_todo}`);
  } catch (error) {
    return error;
  }
};

export const updateTodo = (item) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  const body = JSON.stringify(item);
  try {
    const res = axios.put("/api/todo", body, config);
    return res.data;
  } catch (error) {
    return error;
  }
};
