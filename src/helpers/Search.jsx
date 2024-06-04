import { isAuthenticated } from "./auth";

export const searchProduct = ({cart, customerId, paymentMethod, cookies}) => {
    const { token,store } = isAuthenticated(cookies);

    return fetch(`${import.meta.env.VITE_SERVER_URL}/bystore/search/${store?._id}`, {
        
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: 
        JSON.stringify({cart:cart, customerId:customerId, paymentMethod:paymentMethod})
      ,
    }).then((response) => {
      return response.json();
    });
  };
  

// posOrder  