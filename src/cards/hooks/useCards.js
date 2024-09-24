import { useCallback, useState } from "react";
import { useSnack } from "../../providers/SnackbarProvider";
import axios from "axios";
import useAxios from "../../hooks/useAxios";
import { useCurrentUser } from "../../users/providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { jwtDecode } from "jwt-decode";
import { changeLikeStatus, deleteCard, getCard, getCards } from "../services/cardsApiService";

export default function useCards() {
  const [cards, setCards] = useState([]);
  const [card, setCard] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [myCards, setMyCards] = useState([])
  const { user } = useCurrentUser()
  const setSnack = useSnack();
  useAxios();
  const [filtered, setFiltered] = useState(["card"])

  const navigate = useNavigate()

  const getAllCards = useCallback(async () => {
    try {
      setCards(await getCards());

      setSnack("success", "All cards are here!");

    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  const getCardById = useCallback(async (id) => {
    try {
      setCard(await getCard(id));
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  const handleDelete = useCallback(async (id) => {
    try {
      await deleteCard(id);
      setCards(prevCards => prevCards.filter(card => card._id !== id));
      setSnack("success", "Card deleted");
    } catch (err) {
      setSnack("error", "Failed to delete card");
    }
  }, [setSnack]);



  const handleLike = useCallback(async (id) => {
    try {
      await changeLikeStatus(id);
      setCards((prevCards) =>
        prevCards.map((card) =>
          card._id === id
            ? { ...card, likes: card.likes.includes(id) ? card.likes.filter((like) => like !== id) : [...card.likes, id] }
            : card
        )
      );
    } catch (error) {
      setSnack("error", "Please Log In")
    }
  }, []);

  const handleEdit = (id) => {
    if (user) {
      navigate(ROUTES.CARD_EDIT + "/" + id)
    } else {
      setSnack("error", "You are not logged in")
    }
  };



  const handleMyCards = useCallback(async () => {
    await getAllCards();

    try {
      let token = localStorage.getItem("my token");
      let decodedToken = jwtDecode(token);

      cards.map((card) => {
        if (card.user_id == decodedToken._id) {
          setMyCards((prev) => {
            if (!prev.includes(card._id)) {
              return [...prev, card._id];
            }
            return prev;
          });
          localStorage.setItem("myCards", JSON.stringify(myCards))
        }
      });

    } catch (error) {
      setSnack("Log In");
    }
  })


  return {
    cards,
    card,
    error,
    isLoading,
    getAllCards,
    getCardById,
    handleDelete,
    handleLike,
    handleEdit,
    myCards,
    handleMyCards

  };
}
