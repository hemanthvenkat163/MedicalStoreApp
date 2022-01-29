import axios from "axios";

class SuppliedService {
  getAllStock() {
    return axios.get(
      "http://localhost:8482/suppliedstockms/findAllSuppliedStock"
    );
  }

  addStock(data) {
    return axios.post(
      "http://localhost:8482/suppliedstockms/AddSupplyStockRequest",
      data
    );
  }

  deleteStock(Id) {
    axios.delete("http://localhost:8482/suppliedstockms/ById/" + Id);
  }

  findStockBySupplierId(supplierId) {
    return axios.get("http://localhost:8482/findBySupplierId/" + supplierId);
  }
}

export default new SuppliedService();
