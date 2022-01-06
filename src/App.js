import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <div>
      <Home />
      <ProductList />
      <SingleProduct />
      <Register />
      <Login />
      <Cart />
      <Home />
    </div>
  );
}

export default App;
