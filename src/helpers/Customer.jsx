import { isAuthenticated } from "./auth";

export const getAllCustomer = (cookies) => {
  const { token, store } = isAuthenticated(cookies);

  if (store) {
    return fetch(
      `${import.meta.env.VITE_SERVER_URL}/store/alluser/${store?._id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((response) => {
      return response.json();
    });
  }

  return fetch(`${import.meta.env.VITE_SERVER_URL}/customer/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    return response.json();
  });
};

export const addCustomer = ({ formData, cookies }) => {
  const { token } = isAuthenticated(cookies);
  return fetch(`${import.meta.env.VITE_SERVER_URL}/store/user/create`, {
    method: "Post",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    }),
  }).then((response) => {
    return response.json();
  });
};

