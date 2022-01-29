import axios from "axios";

class ReportService {
  getAllReport() {
    return axios.get("http://localhost:8484/reports/all");
  }

  getReportById(reportId) {
    return axios.get("http://localhost:8484/reports/byreportid/" + reportId);
  }

  getReportByReportType(reportType) {
    return axios.get(
      "http://localhost:8484/reports/byreporttype/" + reportType
    );
  }

  getReportByPeriod(startPeriod, endPeriod) {
    return axios.get(
      "http://localhost:8484/reports/byperiod/" + startPeriod + "/" + endPeriod
    );
  }

  addReport(data) {
    return axios.post("http://localhost:8484/reports/generate", data);
  }

  deleteReport(reportId) {
    axios.delete("http://localhost:8484/reports/delete/byreportid/" + reportId);
  }
}

export default new ReportService();
