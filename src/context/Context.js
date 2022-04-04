import { createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
  let products = [
    {
      id: 1,
      name: "WOMEN REEBOK CLASSICS ARCHIVE ZIP-UP JACKET",
      price: "500",
      image:
        "https://content.shop4reebok.com/static/Product-GS1739/Reebok_GS1739_1.jpg.plp",
      inStock: 5,
      fastDelivery: true,
      ratings: 1,
    },

    {
      id: 2,
      name: "UNISEX REEBOK RUNNING ZIG KINETICA II SHOES",
      price: "450",
      image:
        "https://content.shop4reebok.com/static/Product-GW2912/reebok_GW2912_1.jpg.plp",
      inStock: 5,
      fastDelivery: false,
      ratings: 2,
    },

    {
      id: 3,
      name: "UNISEX REEBOK TRAINING TECH STYLE WATER BOTTLE",
      price: "600",
      image:
        "https://content.shop4reebok.com/static/Product-GH0069/reebok_GH0069_1.jpg.plp",
      inStock: 5,
      fastDelivery: false,
      ratings: 3,
    },

    {
      id: 4,
      name: "UNISEX REEBOK RUNNING ZIG KINETICA II CAP",
      price: "350",
      image:
        "https://content.shop4reebok.com/static/Product-H47499/reebok_H47499_1.jpg.plp",
      inStock: 5,
      fastDelivery: true,
      ratings: 4,
    },

    {
      id: 5,
      name: "UNISEX REEBOK RUNNING ZIG KINETICA II MASK",
      price: "760",
      image:
        "https://content.shop4reebok.com/static/Product-H18221/reebok_rbk_H18221_1.jpg.plp",
      inStock: 5,
      fastDelivery: false,
      ratings: 5,
    },

    {
      id: 6,
      name: "UNISEX REEBOK CLASSICS PRINCE REEBOK DUFFEL BAG",
      price: "799",
      image:
        "https://content.shop4reebok.com/static/Product-HD2769/reebok_HD2769_1.jpg.plp",
      inStock: 5,
      fastDelivery: true,
      ratings: 1,
    },

    {
      id: 7,
      name: "WOMEN'S REEBOK CLASSICS PRINCE REEBOK CROP TOP",
      price: "980",
      image:
        "https://content.shop4reebok.com/static/Product-H00024/reebok_H00024_1.jpg.plp",
      inStock: 5,
      fastDelivery: false,
      ratings: 3,
    },

    {
      id: 8,
      name: "UNISEX REEBOK RUNNING ZIG KINETICA II JACKET",
      price: "999",
      image:
        "https://content.shop4reebok.com/static/Product-H59881/reebok_H59881_1.jpg.plp",
      inStock: 5,
      fastDelivery: true,
      ratings: 4,
    },

    {
      id: 9,
      name: "UNISEX REEBOK RUNNING ZIG KINETICA II SHOES",
      price: "499",
      image:
        "https://content.shop4reebok.com/static/Product-GS4186/reebok_reebok_GS4186_1.jpg.plp",
      inStock: 5,
      fastDelivery: false,
      ratings: 5,
    },

    {
      id: 10,
      name: "UNISEX REEBOK TRAINING TECH STYLE WATER BOTTLE",
      price: "1299",
      image:
        "https://content.shop4reebok.com/static/Product-GH0069/reebok_GH0069_1.jpg.plp",
      inStock: 5,
      fastDelivery: true,
      ratings: 4,
    },

    {
      id: 11,
      name: "UNISEX REEBOK RUNNING ZIG KINETICA II CAP",
      price: "899",
      image:
        "https://content.shop4reebok.com/static/Product-FL9600/UNISEX_CASUAL_HEADWEAR_FL9600_1.jpg.plp",
      inStock: 5,
      fastDelivery: true,
      ratings: 2,
    },
    {
      id: 12,
      name: "UNISEX REEBOK RUNNING ZIG KINETICA II BAG",
      price: "1249",
      image:
        "https://content.shop4reebok.com/static/Product-FT1755/UNISEX_TRAINING_BAGS_FT1755_1.jpg.plp",
      inStock: 5,
      fastDelivery: false,
      ratings: 3,
    },

    {
      id: 13,
      name: "UNISEX REEBOK RUNNING ZIG KINETICA II JACKET",
      price: "299",
      image:
        "https://content.shop4reebok.com/static/Product-GS4186/reebok_reebok_GS4186_1.jpg.plp",
      inStock: 5,
      fastDelivery: false,
      ratings: 5,
    },

    {
      id: 14,
      name: "WOMEN'S REEBOK TRAINING UNITED",
      price: "1999",
      image:
        "https://content.shop4reebok.com/static/Product-GJ5693/reebok_GJ5693_1.jpg.plp",
      inStock: 5,
      fastDelivery: false,
      ratings: 2,
    },

    {
      id: 15,
      name: "UNISEX REEBOK TRAINING CREATE BACKPACK",
      price: "799",
      image:
        "https://content.shop4reebok.com/static/Product-GJ5242/reebok_GJ5242_1.jpg.plp",
      inStock: 5,
      fastDelivery: true,
      ratings: 5,
    },

    {
      id: 16,
      name: "UNISEX'S REEBOK CLASSICS PRINCE HOODED SWEATSHIRT",
      price: "699",
      image:
        "https://content.shop4reebok.com/static/Product-H62563/reebok_H62563_1.jpg.plp",
      inStock: 5,
      fastDelivery: false,
      ratings: 4,
    },

    {
      id: 17,
      name: "WOMEN'S REEBOK TRAINING LUX STRAPPY PADDED SPORTS BRA",
      price: "749",
      image:
        "https://content.shop4reebok.com/static/Product-GS4186/reebok_reebok_GS4186_1.jpg.plp",
      inStock: 5,
      fastDelivery: true,
      ratings: 1,
    },

    {
      id: 18,
      name: "UNISEX REEBOK TRAINING TECH STYLE WATER BOTTLE",
      price: "760",
      image:
        "https://content.shop4reebok.com/static/Product-GH0069/reebok_GH0069_1.jpg.plp",
      inStock: 5,
      fastDelivery: false,
      ratings: 3,
    },

    {
      id: 19,
      name: "UNISEX REEBOK RUNNING ZIG KINETICA II TOP",
      price: "1250",
      image:
        "https://content.shop4reebok.com/static/Product-H62563/reebok_H62563_1.jpg.plp",
      inStock: 5,
      fastDelivery: false,
      ratings: 1,
    },
  ];
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
    byCat: false,
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
