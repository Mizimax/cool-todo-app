import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const getTodos = () => api.get("/todos");

export const getTodo = (id: number) => api.get(`/todos/${id}`);

export const createTodo = (data: any) => api.post("/todos", data);

export const updateTodo = (id: number, data: any) =>
  api.put(`/todos/${id}`, data);

export const patchTodo = (id: number, data: any) =>
  api.patch(`/todos/${id}`, data);

export const deleteTodo = (id: number) => api.delete(`/todos/${id}`);
