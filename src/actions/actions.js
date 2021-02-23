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
