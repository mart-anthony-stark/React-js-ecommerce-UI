import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDk4ZjRiZTlhYTA1MDZjMmQ2ZTkxNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjY3NzY0MCwiZXhwIjoxNjQyOTM2ODQwfQ.N4wb1vpwY_x7sqNbOSCYDj9iEEXVd_o6SmBikroXxEM";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: "Bearer " + TOKEN },
});
