import axios from "axios";

async function apiProduct() {
  const { data } = await axios.get("http://localhost:8082/get");

  console.log("from dataaaaaaaa", data);
  return data;
}

export default apiProduct;
