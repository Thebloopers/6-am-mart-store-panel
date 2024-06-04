import { isAuthenticated } from "./auth";

export const createPosOrder = ({cart, customerId, address, paymentMethod, cookies}) => {
    const { token } = isAuthenticated(cookies);

    return fetch(`${import.meta.env.VITE_SERVER_URL}/posOrder/`, {
        
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: 
        JSON.stringify({cart:cart, customerId:customerId, address:address, paymentMethod:paymentMethod})
      ,
    }).then((response) => {
      return response.json();
    });
  };
  

// posOrder  