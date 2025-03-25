import { useState } from "react";
import { Card, CardContent, TextField, Button } from "@mui/material";
import { Bar, Pie, Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "./Dashboard.css";  // Import external CSS file

const Dashboard = ({ products }) => {
  const [searchProduct, setSearchProduct] = useState("");
  const [filteredProduct, setFilteredProduct] = useState(products[0] || null);
  const [chartType, setChartType] = useState("Bar");

  const handleSearch = () => {
    const product = products.find((p) => p.name.toLowerCase() === searchProduct.toLowerCase());
    setFilteredProduct(product || null);
  };

  const chartData = {
    labels: ["Opening Stock", "In", "Out", "Closing Stock"],
    datasets: [
      {
        label: filteredProduct ? filteredProduct.name : "No Product Selected",
        data: filteredProduct
          ? [filteredProduct.openingStock, filteredProduct.inStock, filteredProduct.outStock, filteredProduct.closingStock]
          : [0, 0, 0, 0],
        backgroundColor: ["blue", "green", "red", "purple"],
      },
    ],
  };

  return (
    <Card className="dashboard-card">
      <CardContent>
        <h2 className="dashboard-title">Dashboard</h2>

        {/* Search Product */}
        <div className="search-container">
          <TextField
            label="Enter Product Name"
            variant="outlined"
            value={searchProduct}
            onChange={(e) => setSearchProduct(e.target.value)}
            className="search-input"
          />
          <Button variant="contained" color="primary" onClick={handleSearch}>
            Search
          </Button>
        </div>

        {/* Chart Selection Buttons */}
        <div className="chart-buttons">
          <Button variant="contained" color="secondary" onClick={() => setChartType("Bar")}>
            Bar Chart
          </Button>
          <Button variant="contained" color="success" onClick={() => setChartType("Pie")}>
            Pie Chart
          </Button>
          <Button variant="contained" color="error" onClick={() => setChartType("Line")}>
            Line Chart
          </Button>
        </div>

        {/* Conditional Chart Rendering */}
        {chartType === "Bar" && <Bar data={chartData} />}
        {chartType === "Pie" && <Pie data={chartData} />}
        {chartType === "Line" && <Line data={chartData} />}
      </CardContent>
    </Card>
  );
};

export default Dashboard;
