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

const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  return (

    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <div>
        <Navbar.Brand className="header-1" style = {{
          marginTop:'20px'
        }}> 
       
 <Link to="/" >E -  Cart</Link>
         
         
        </Navbar.Brand>
        
        {useLocation().pathname.split("/")[1] !== "cart" && (
          <Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              type="search"
              placeholder="Search a product..."
              className="m-auto"
              aria-label="Search"
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}
            />
          </Navbar.Text>
        )}
        <Nav>

          <Dropdown style = {{minWidth: 370,
           marginLeft: "1250px",
           marginTop: "-2.5vmax"}} >
            <Dropdown.Toggle variant="success"  style = {{
             marginLeft: "400px"
            }}>
              <FaShoppingCart color="white" fontSize="20px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{
            
           
            }} >
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
                <span style={{ 
                  padding: "2.2vmax",
                 }}> Your Cart is Empty Please Add something to your cart!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </div>
    </Navbar>
  );
};

export default Header;
