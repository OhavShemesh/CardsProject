import axios from "axios";

const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users";
const apiUrlNewCard = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards";


export const login = async (userLogin) => {
  try {
    const response = await axios.post(apiUrl + "/login", userLogin);
    const data = response.data;
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const signup = async (normalizedUser) => {
  try {
    const response = await axios.post(apiUrl, normalizedUser);
    const data = response.data
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const addcard = async (userDetails) => {

  try {
    const { data } = await axios.post(apiUrlNewCard, userDetails);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }

}

export const updateCard = async (id, updatedCardData) => {

  try {
    const { data } = await axios.put(`${apiUrlNewCard}/${id}`, updatedCardData);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
