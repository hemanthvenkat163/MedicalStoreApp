import axios from "axios";

class StockService {
  getAllStock() {
    return axios.get("http://localhost:8481/stocks/all");
  }

  addStock(data) {
    return axios.post("http://localhost:8481/stocks/add/", data);
  }

  deleteStock(stockId) {
    axios.delete("http://localhost:8481/stocks/delete/bystockid/" + stockId);
  }

  update(data) {
    return axios.put("http://localhost:8481/stocks/increaseQuantity/", data);
  }
}

export default new StockService();
