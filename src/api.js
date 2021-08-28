import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

// const api = axios.create({
//   baseURL: "http://3c7c9f59bcf3.ngrok.io/api/v1/",
// });
// ngrok http 8000

/**
 * @returns All products
 */

export const getAllProducts = () => {
  return api.get("/products/getallproducts").then((res) => res.data.products);
};

/**
 * @returns Single product information
 */

export const getProduct = (productId) =>
  api.post("/products/getproduct", { productId: productId }).then((res) => {
    return res.data.product;
  });

/**
 * @returns User object if succesful
 */

export const signUp = ({ name, password, email }) => {
  return api.put("/auth/signup", { name, password, email }).then((res) => {
    return res.data;
  });
};

/**
 * @returns JWT Token
 */

export const signIn = ({ email, password }) => api.post("/auth/signin", { email, password }).then((res) => res.data);

/**
 * @returns
 */

export const requestPasswordReset = (email) => api.post("/auth/requestpasswordreset", email).then((res) => res.data);

/**
 *  Checks if pass reset token is valid
 */

export const checkResetPassTokenValid = (token) => api.post("/auth/checkresetpasstokenvalid", token).then((res) => res.data);

/**
 *  Set new password
 */

export const setNewPassword = ({ password, token }) => {
  return api.post("/auth/setnewpassword", { password, token }).then((res) => res.data);
};

/**
 * @returns Customer object
 */

export const getCustomerInfo = () => {
  return api.get("/profile/user").then((res) => {
    return res.data.user;
  });
};
/**
 * Create checkout session
 */

export const checkoutSession = ({ line_items, email }) => {
  return api.post("/checkout/create-checkout-session", { line_items, email }).then((res) => {
    return res.data;
  });
};

/**
 * Gets customer orders
 */

export const getOrders = (page) => {
  return api.get(`/profile/orders?page=${page}&limit=2`).then((res) => {
    return res.data;
  });
};

/**
 * Change customer name
 */

export const updateCustomerName = (name) => {
  return api.put(`/profile/user/name`, { name }).then((res) => {
    return res.data;
  });
};

/**
 * Change customer email
 */

export const updateCustomerEmail = (email) => {
  return api.put(`/profile/user/email`, { email }).then((res) => {
    return res.data;
  });
};
