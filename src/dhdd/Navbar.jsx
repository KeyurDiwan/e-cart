import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Navbar = () => {
  return (
      <Div>
          <Link
          style={{
            marginLeft: "90%",
            fontSize: "15px",
            textDecoration: "none",
            color: "#282C3F",
          }}
          to="/"
        >
          {" "}
          <p>
            <img
              style={{ marginLeft: "3%", width: "25px" }}
              src="data:image/png;base64,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"
              alt=""
            />
            {/* <br></br> */}
           
          </p>
          </Link>
          
           <Link
          style={{
            marginLeft: "2%",
            fontSize: "15px",
            textDecoration: "none",
            color: "#282C3F",
          }}
          to="/cart/:id"
        >
          {" "}
          <p>
            <img
              style={{ marginLeft: "3%" }}
              src="https://img.icons8.com/material-outlined/24/000000/shopping-bag--v1.png"
              alt=""
            />
            {/* <br></br> */}
           
          </p>
        </Link>
    </Div>
  )
}


const Div = styled.div`
display: flex;

Link {
  margin: 1000px;
}

`


export default Navbar