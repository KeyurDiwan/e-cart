
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Cart = () => {
  const [list, setList] = useState( [] );
  const [price, setPrice] = useState();
  let sum = 0;
   sum = list.map(item => +item.price)
        .reduce( ( prev, curr ) => prev + curr, 0 );
        // 
        console.log( sum , "sum" )
 
 

  useEffect(() => {
    fetchData();
  }, [sum,list] );
  
        
        // 

  const fetchData = () => {
    fetch("http://localhost:3001/bag")
      .then((d) => d.json())
      .then((res) => {
        setList( res );
       
setPrice(sum)
        // setPrice(list.reduce())
      });

   
  };
  // console.log( list );

//   const orderConfirm = () => {

//   }
    


      const deleteItem = (id) => {
          console.log( "delete", id )
        id = +id;
            const payload = {
            product_id: id,
           
        };
        //json-server db.json --port 3001 --watch
        fetch( `http://localhost:3001/bag/${id}`, {
            method: "DELETE",
            body: JSON.stringify( payload ),
            headers: {
                "Content-Type": "application/json",
            },
        } ).then( alert( "Delete successfully" ) );
  }
   
  
  const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color:white;
    padding: 2%;
    /* height: 100%; */
  
    margin:2%;
    `;

  const Img = styled.div`
    display: flex;
   

    img {
      width:170px;
      
      
      margin-top: 2%
    }

   

  `

  const Con = styled.div`
  display: flex;
  margin-top: 3%;
    background-color: whitesmoke;
    width: 500px;
  flex-direction: column;

   h2 {
      margin-top:7%;
      width: 100%;
      font-family: 'Times New Roman', Times, serif;
      margin-left: 50px;
      color: black
    }

    button {
      width: 100px;
      margin-left: 10%;
      height: 30px;
      /* margin-top: -20px */
    }
  `

  const Payment = styled.div`
  border: 1px solid red;
  background-color: whitesmoke;
  margin:10px;
  height: 500px;
  margin-right: 10%;
  margin-top: 6.5%;
  width: 100%;

  h2{
      font-family: 'Times New Roman', Times, serif;
  }
  button {
    margin-left: 5px;
    height: 30px;
  }
  `

  const Div1 = styled.div`
    display: flex;
    flex-direction: row;
  `
  console.log( "list", list )

 
  return (
      <div>
          {/* <h1>Cart Page</h1> */}
            <Div1>
      <Div>
        {list.map((e) => (
          <div key={e.product_id}>
          
              <Img>
            <img src={e.image} alt="imgs" />
            
              <Con>
              <h2>{e.title}</h2>

                <h2> Rs. {e.price}</h2>

                        
                    </Con>
{/*  onClick={() => removeTodo(todo.id)} */}
                    <button type="submit"
                         onClick={() => deleteItem(e.id)}
                     
                        
                     style={{  height: "50px", marginTop: "10%" , marginLeft:"-20%" }}>Delete Item</button>
                    
                  
              
                </Img>
                
                
            
         
         
          </div>
        ) )}
         
      </Div>

     <Payment>
          <div>
          
          <h2>Your cart total :    {price} Rs.</h2>
          <Link to="/done" >
            <button>
              confirm your order
            </button>
          </Link>
          {/* <button onClick={handlePageChange}>Confirm Order </button> */}
            </div>
      </Payment>
    </Div1>
    </div>
  )
}

export default Cart