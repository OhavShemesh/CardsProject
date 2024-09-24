import axios from "axios";

export const apiUrlUsers = "https://cardsserverw260324mr-1.onrender.com/users";
export const apiUrlCards = "https://cardsserverw260324mr-1.onrender.com/cards";


export const login = async (userLogin) => {
  try {
    const response = await axios.post(apiUrlUsers + "/login", userLogin);
    const data = response.data;
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};
export const getUsers = async () => {
  try {
    const response = await axios.get(apiUrlUsers);
    const data = response.data;
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};
export const getUser = async (id) => {
  try {
    const response = await axios.post(apiUrlUsers + "/" + id);
    const data = response.data;
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const signup = async (normalizedUser) => {
  try {
    const response = await axios.post(apiUrlUsers, normalizedUser);
    const data = response.data
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const addcard = async (userDetails) => {

  try {
    const { data } = await axios.post(apiUrlCards, userDetails);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }

}

export const updateCard = async (id, updatedCardData) => {

  try {
    const { data } = await axios.put(`${apiUrlCards}/${id}`, updatedCardData);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
export const deleteUser = async (id) => {

  try {
    const { data } = await axios.delete(`${apiUrlUsers}/${id}`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};


export const ChangeStatus = async (id) => {

  try {
    const { data } = await axios.patch(`${apiUrlUsers}/${id}`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};


