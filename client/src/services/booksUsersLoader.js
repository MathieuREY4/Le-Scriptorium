import axios from "axios";

export default function booksLoader() {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/book`, {})
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}
