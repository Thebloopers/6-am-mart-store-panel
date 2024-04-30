import { isAuthenticated } from "./auth";

export const getAllCategories = (cookies) => {
    const { token, store } = isAuthenticated(cookies);

    return fetch(`${import.meta.env.VITE_SERVER_URL}/category/ofadmin/${store.admin}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      return response.json();
    });
  };
  
export const getAllSubCategories = (mainCategory, cookies) => {
    const { token, store } = isAuthenticated(cookies);

    if(mainCategory) {
      return fetch(`${import.meta.env.VITE_SERVER_URL}/subcategory/?mainCategoryId=${mainCategory?._id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        return response.json();
      });
    }
    return fetch(`${import.meta.env.VITE_SERVER_URL}/subcategory/ofadmin/${store.admin}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      return response.json();
    });
  };




  