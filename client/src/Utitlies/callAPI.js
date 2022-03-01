import axios from "axios";
import Store from "./../Component/Store";

export const callApi = (endpoint, method, payload, id,token,callFrom) => {
  let usertoken = Store.getState().logIn && Store.getState().logIn.payload || token;
  let UserId = Store.getState().userInfo && Store.getState().userInfo.payload.id || id ;
  const configaxios = {
    method,
    url: callFrom==="Admin"?`${process.env.REACT_APP_URL_ADMIN}${endpoint}`:`${process.env.REACT_APP_URL_USER}${endpoint}`,
    data: payload,
    headers: {
      Accept: "*/*",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      "Access-Control-Max-Age": "6000",
      "Access-Control-Allow-Headers": "*",
      authorization: usertoken,
      id: UserId,
    },
  };
  return new Promise((resolve, reject) => {
    axios(configaxios)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
