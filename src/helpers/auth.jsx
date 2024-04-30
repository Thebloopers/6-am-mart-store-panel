export const storeSignIn = ({email, password}) => {
    return fetch(`${import.meta.env.VITE_SERVER_URL}/store/auth/login`, {
      method: "POST",
      headers: {
        Accept: "*/*", // Corrected Accept header
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password}),
    }).then((response) => {
      return response.json();
    });
  };



  
  export const verifyOtp = (user) => {
    return fetch(`${import.meta.env.VITE_SERVER_URL}/admin/verifyotp`, {
      method: "POST",
      headers: {
        Accept: "*/*", // Corrected Accept header
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((response) => {
      return response.json();
    });
  };
  
  export const getMyProfile = () => {
    const { token } = isAuthenticated();
    return fetch(`${import.meta.env.VITE_SERVER_URL}/user/myprofile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      return response.json();
    });
  };
  
  export const updateProfile = async ({ formData }) => {
    const { token } = isAuthenticated();
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/user/update`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }
    );
  
    const data = await response.json();
    return data; // Don't forget to return the fetched data
  };
  
  export const signout = (removeCookie, next) => {
    if (typeof window !== "undefined") {
      removeCookie("storeuser");
      next();
    }
  };
  
  // To remain signed in even browser automatically remove user details
  export const authenticate = (data, next, setCookie) => {
  if (typeof window !== "undefined") {
    const cookieExpireTime = parseInt(
      import.meta.env.VITE_COOKIE_EXPIRE_TIME,
      10
    ); // Read the expiration time from env
    const expiresInCustomTime = new Date();
    expiresInCustomTime.setTime(
      expiresInCustomTime.getTime() + cookieExpireTime
    );

    setCookie("storeuser", JSON.stringify(data), {
      expires: expiresInCustomTime,
    });
    next();
  }
};



  // To update user data even browser automatically
  export const updatejwt = (data, next) => {
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("jwt")) {
      var jwt = JSON.parse(localStorage.getItem("jwt"));
      const newData = {
        ...jwt,
        user: data,
      };
      localStorage.setItem("jwt", JSON.stringify(newData));
      next();
    }
  };
  
  // check whether user is signed in or not
  export const isAuthenticated = (cookies) => {
    if (typeof window == "undefined") {
      return false;
    }

  
    // If cookies.jwt exists and is not empty, return its parsed value
    if (cookies.storeuser) {
      return cookies.storeuser;
    }
  };