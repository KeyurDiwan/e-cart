import React from "react";

const Done = () => {
  return (
    <div
      style={{
        background: "white",
        padding: "60px",
        borderRadius: "4px",
        boxShadow: "0 2px 3px #C8D0D8",
        display: "inline-block",
        margin: " 0 500px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          borderRadius: "200px",
          height: "200px",
          width: "200px",
          background: "#F8FAF5",
          margin: "0 auto",
        }}
      >
        <i
          style={{
            color: "#9ABC66",
            fontSize: "100px",
            textAlign: "center",
            lineHeight: "200px",
            marginLeft: "-15px",
          }}
        >
          ✓
        </i>
      </div>

      <h1
        style={{
          color: "#88B04B",
          fontWeight: "900",
          fontSize: "40px",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        Success
      </h1>

      <p
        style={{
          color: "#404F5E",
          textAlign: "center",
          fontSize: "20px",
          margin: "0",
        }}
      >
        We received your purchase request;
        <br /> we'll be in touch shortly!
      </p>
    </div>
  );
};

export default Done;
