import { Button, Form } from "react-bootstrap";
import { CartState } from "../context/Context";
import{useState} from 'react';
import Rating from "./Rating";

const Filters = () => {
  const {
    productDispatch,
    productState: {  byFastDelivery, sort, byRating, byCat },
  } = CartState();

  // make state for rating





 


  return (
    <div className="filters">

      {/*  */}

 

{/*  */}

      <span className="title">Sorting and Filters</span>
      <span>
        <Form.Check
          inline
          label="Price Low to High"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Price High to Low"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
      </span>
     
      <span>
        <Form.Check
          inline
          label="One Day Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_DELIVERY",
            })
          }
          checked={byFastDelivery}
        />
      </span>


      {/* <span>
        <Form.Check
          inline
          label="mobile Only"
          name="group1"
          type="checkbox"
          id={`inline-5`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_CAT",
            })
          }
          checked={byCat}
        />
      </span> */}

      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
          rating={byRating}
          onClick={(i) =>
            productDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })
          }
          style={{ cursor: "pointer" }}
        />
      </span>

     
      <Button
        variant="light"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
