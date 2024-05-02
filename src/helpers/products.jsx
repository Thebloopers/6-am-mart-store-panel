import { isAuthenticated } from "./auth";

export const getAllProductsOfStore = (cookies, categoryId) => {
    const { token, store } = isAuthenticated(cookies);

    if(categoryId) {
        return fetch(`${import.meta.env.VITE_SERVER_URL}/product/bycategory/${categoryId}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((response) => {
          return response.json();
        });
      }

    return fetch(`${import.meta.env.VITE_SERVER_URL}/product/ofstore/${store?._id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      return response.json();
    });
  };