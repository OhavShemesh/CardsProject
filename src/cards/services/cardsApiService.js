import axios from "axios";
const apiUrl = "http://localhost:8181/cards";

export const getCards = async () => {
  try {
    const response = await axios.get(apiUrl);
    const data = response.data;
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getCard = async (cardId) => {
  try {
    const response = await axios.get(`${apiUrl}/${cardId}`);
    const data = response.data;
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getMyCards = async () => {
  try {
    const response = await axios.get(`${apiUrl}/my-cards`);
    const data = response.data;
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const deleteCard = async (cardId) => {
  try {
    const { data } = await axios.delete(`${apiUrl}/${cardId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const createCard = async (card) => {
  try {
    const { data } = await axios.post(apiUrl, card);
    return data;
  } catch (error) {
    console.error("Error making request:", error.message);
    if (error.response) {
      console.error("Error response data:", error.response.data);
      console.error("Error response status:", error.response.status);
      console.error("Error response headers:", error.response.headers);
    } else if (error.request) {
      console.error("No response received for the request:", error.request);
    } else {
      console.error("Error setting up the request:", error.message);
    }
    return Promise.reject(error.message);
  }
};

export const editCard = async (cardId, normalaizedCard) => {
  try {
    const { data } = await axios.put(`${apiUrl}/${cardId}`, normalaizedCard);
    return data;
  } catch (error) {
    if (error.response) {
      console.error("Error response data:", error.response.data);
      console.error("Error response status:", error.response.status);
      console.error("Error response headers:", error.response.headers);
    } else if (error.request) {
      console.error("No response received for the request:", error.request);
    } else {
      console.error("Error setting up the request:", error.message);
    }
    return Promise.reject(error.message);
  }
};

export const changeLikeStatus = async (cardId) => {
  try {
    const { data } = await axios.patch(`${apiUrl}/${cardId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
