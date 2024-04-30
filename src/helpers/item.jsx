import { isAuthenticated } from "./auth";



export const getAllItems = (cookies) => {
  const { token, store } = isAuthenticated(cookies);
  return fetch(`${import.meta.env.VITE_APP_SERVER_URL}/product/${store.admin}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    return response.json();
  });
};



export const getAllPendingItems = (cookies) => {
  const { token, store } = isAuthenticated(cookies);
  return fetch(`${import.meta.env.VITE_APP_SERVER_URL}/product/pending/${store.admin}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    return response.json();
  });
};


export const addNewItem = ({ formData, cookies }) => {

  const { token } = isAuthenticated(cookies);
  return fetch(`${import.meta.env.VITE_SERVER_URL}/product`, {
    method: "Post",
    headers: {
      Authorization: `Bearer ${token}`,

    },
    body: formData


  }).then((response) => {
    return response.json();
  });
};



export const getUnits = (cookies) => {
  const { token, store } = isAuthenticated(cookies);
  return fetch(`${import.meta.env.VITE_SERVER_URL}/unit/ofadmin/${store.admin}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    return response.json();
  });
};

export const getAttributes = (cookies) => {
  const { token, store } = isAuthenticated(cookies);
  return fetch(`${import.meta.env.VITE_SERVER_URL}/attribute/ofadmin/${store.admin}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    return response.json();
  });
};




export const AllProduct = (cookies) => {

  const { token, store } = isAuthenticated(cookies);

  return fetch(`${import.meta.env.VITE_SERVER_URL}/product/ofstore/${store._id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    return response.json();

  });
};


export const handleVisibilityProductApi = ({cookies, productId}) => {
  const { token } = isAuthenticated(cookies);

  return fetch(
    `${import.meta.env.VITE_SERVER_URL}/product/update/visibility/${productId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({}),
    }
  ).then((response) => {
    return response.json();
  });


}


export const handleDeleteProductApi = ({cookies, productId}) => {
  const { token } = isAuthenticated(cookies);

  return fetch(
    `${import.meta.env.VITE_SERVER_URL}/product/${productId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({}),
    }
  ).then((response) => {
    return response.json();
  });


}


export const handleEditProductApi = ({formData, cookies, productId}) => {
  const { token } = isAuthenticated(cookies);

  return fetch(
    `${import.meta.env.VITE_SERVER_URL}/product/${productId}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    }
  ).then((response) => {
    return response.json();
  });


}


