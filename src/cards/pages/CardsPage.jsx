import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import axios from "axios";
import CardsFeedback from "../components/CardsFeedback";
import { useSnack } from "../../providers/SnackbarProvider";

export default function CardsPage() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const setSnack = useSnack();

  useEffect(() => {
    const getAllCards = async () => {
      try {
        let response = await axios.get(
          "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards"
        );
        setCards(response.data);
        setSnack("success", "All cards are here!");
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };
    getAllCards();
  }, []);

  const handleDelete = (id) => {
    console.log("Card " + id + " deleted");
  };

  const handleLike = (id) => {
    console.log("Card " + id + " has been liked");
  };

  return (
    <div>
      <PageHeader
        title="Cards"
        subtitle="On this page you can find all bussines cards from all categories"
      />
      <CardsFeedback
        cards={cards}
        isLoading={isLoading}
        error={error}
        handleDelete={handleDelete}
        handleLike={handleLike}
      />
    </div>
  );
}
