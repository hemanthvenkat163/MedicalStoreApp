import axios from "axios";

class OrderService {
  getAllOrder() {
    return axios.get("http://localhost:8483/orders/all");
  }

  addOrder(data) {
    return axios.post("http://localhost:8483/orders/add/", data);
  }

  deleteOrder(orderId) {
    axios.delete("http://localhost:8483/orders/byid/" + orderId);
  }

  getById(orderId) {
    axios.get("http://localhost:8483/orders/byid/" + orderId);
  }

  viewOrders(startDate, endDate) {
    return axios.get(
      "http://localhost:8483/orders/all/" + startDate + "/" + endDate
    );
  }
}

export default new OrderService();
