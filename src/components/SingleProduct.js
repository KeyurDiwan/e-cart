import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="products">
      <Card>
      {prod.fastDelivery ? (
             
              <img 
              src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwEwl4DPR4h5lb8TtLv3sqluTmYJIFYLuiyXvQHcBVE5aQ36rIVnOHP16XNzbgV9JNe4w&usqp=CAU'} 
              alt={"img"}  
              className = "del-tag"
              />
       
            ) : (
          <div>   <br/>    <br/> </div>
            
            )}
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div >
           
              Fast Delivery </div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }
              disabled={!prod.inStock}
            >
              {!prod.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>

               

              
          )}

      <Link to="/done">
                    <Button style={{  margin: "0 5px" , background: "green"}}>
                    Buy Now
                    </Button>
                  </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
