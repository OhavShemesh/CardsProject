import { useCallback, useState } from "react";
import { useCurrentUser } from "../providers/UserProvider";
import { login, signup } from "../services/usersApiService";
import {
  getUser,
  setTokenInLocalStorage,
} from "../services/LocalStorageService";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useSnack } from "../../providers/SnackbarProvider";

export default function useUsers() {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  const { setUser, setToken } = useCurrentUser();
  const navigate = useNavigate();
  const setSnack = useSnack();

  const handleLogin = useCallback(async (userLogin) => {
    setIsLoading(true);
    try {
      const token = await login(userLogin);
      setTokenInLocalStorage(token);
      setToken(token);
      setUser(getUser());
      navigate(ROUTES.CARDS);
    } catch (err) {
      setError(err.message);
      setSnack("error", err.message);
    }
    setIsLoading(false);
  }, []);

  const handleSignUp = useCallback(async (newUserSignUp) => {
    setIsLoading(true);
    try {
      await signup(newUserSignUp);
      handleLogin({
        email: newUserSignUp.email,
        password: newUserSignUp.password
      })

    } catch (err) {
      setError(err.message);
      setSnack("error", err.message);
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    handleLogin,
    handleSignUp
  };
}
