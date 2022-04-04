import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { CartState } from "../context/Context";
import "./styles.css";
import { useEffect, useState } from "react";

const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();
  const [num, setNum] = useState(0);
  useEffect(() => {
    setNum(cart.reduce((acc, curr) => acc + Number(curr.qty), 0));
  }, [cart]);
  console.log(num);
  return (
    <Navbar bg="dark" variant="dark" className="nav">
      <div className="headerDiv">
        <div>
          <Navbar.Brand className="header-1">
            <Link to="/">E - Cart</Link>
          </Navbar.Brand>
        </div>

        <div className="search-div">
          {useLocation().pathname.split("/")[1] !== "cart" ? (
            <Navbar.Text className="search">
              <FormControl
                type="search"
                placeholder="Search a product..."
                className="m-auto"
                aria-label="Search"
                onChange={(e) => {
                  productDispatch({
                    type: "FILTER_BY_SEARCH",
                    payload: e.target.value.toLowerCase(),
                  });
                }}
              />
            </Navbar.Text>
          ) : (
            <div className="search"> </div>
          )}
        </div>

        <div className="droDownDiv">
          <Dropdown className="dropDownMenu">
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="20px" />
              <Badge>{num}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu className="menu-item">
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>₹ {prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span
                  style={{
                    padding: "2.2vmax",
                  }}
                >
                  {" "}
                  Your Cart is Empty Please Add something to your cart!
                </span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
