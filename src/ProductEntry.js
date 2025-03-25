import { Card, CardContent, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductEntry.css"; // Import CSS file

const ProductEntry = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    openingStock: "",
    inStock: "",
    outStock: "",
    closingStock: "",
    stockValue: "",
    stockCost: "",
    reorderLevel: "",
    stockSupplier: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    setProducts([...products, product]);
    setProduct({
      name: "",
      openingStock: "",
      inStock: "",
      outStock: "",
      closingStock: "",
      stockValue: "",
      stockCost: "",
      reorderLevel: "",
      stockSupplier: "",
    });
  };

  return (
    <Card className="product-card">
      <CardContent>
        {/* Go to Dashboard Button */}
        <div className="top-buttons">
          <Button className="dashboard-button" variant="contained" color="secondary" onClick={() => navigate("/dashboard")}>
            Go to Dashboard
          </Button>
        </div>

        <h2 className="title">Product Entry</h2>
        <div className="form-container">
          <TextField label="Product Name" name="name" value={product.name} onChange={handleChange} variant="outlined" />
          <TextField label="Opening Stock" name="openingStock" value={product.openingStock} onChange={handleChange} type="number" variant="outlined" />
          <TextField label="In" name="inStock" value={product.inStock} onChange={handleChange} type="number" variant="outlined" />
          <TextField label="Out" name="outStock" value={product.outStock} onChange={handleChange} type="number" variant="outlined" />
          <TextField label="Closing Stock" name="closingStock" value={product.closingStock} onChange={handleChange} type="number" variant="outlined" />
          <TextField label="Stock Value" name="stockValue" value={product.stockValue} onChange={handleChange} type="number" variant="outlined" />
          <TextField label="Stock Cost" name="stockCost" value={product.stockCost} onChange={handleChange} type="number" variant="outlined" />
          <TextField label="Reorder Level" name="reorderLevel" value={product.reorderLevel} onChange={handleChange} type="number" variant="outlined" />
          <TextField label="Stock Supplier" name="stockSupplier" value={product.stockSupplier} onChange={handleChange} variant="outlined" />
        </div>
        <Button className="add-button" variant="contained" color="primary" onClick={handleAddProduct}>
          Add Product
        </Button>

        {products.length > 0 && (
          <table className="product-table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Opening Stock</th>
                <th>In</th>
                <th>Out</th>
                <th>Closing Stock</th>
                <th>Stock Value</th>
                <th>Stock Cost</th>
                <th>Reorder Level</th>
                <th>Stock Supplier</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, index) => (
                <tr key={index}>
                  <td>{p.name}</td>
                  <td>{p.openingStock}</td>
                  <td>{p.inStock}</td>
                  <td>{p.outStock}</td>
                  <td>{p.closingStock}</td>
                  <td>{p.stockValue}</td>
                  <td>{p.stockCost}</td>
                  <td>{p.reorderLevel}</td>
                  <td>{p.stockSupplier}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductEntry;
