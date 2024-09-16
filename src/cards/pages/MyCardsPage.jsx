import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import CardComponent from "../components/card/CardComponent";
import useCards from "../hooks/useCards";
import { Container } from "@mui/material";
import { useCurrentUser } from "../../users/providers/UserProvider";

export default function MyCardsPage() {

  const { cards, getAllCards, handleDelete, handleLike, handleEdit } =
    useCards();

  useEffect(() => {
    const fetchCards = async () => {
      await getAllCards();

    }
    fetchCards()
  }, []);


  const { user } = useCurrentUser()
  return (

    <>
      <PageHeader
        title={"My Cards"}
        subtitle={"Welcome to My Cards! Here, you can find the cards you've added"}
      />
      {<Container sx={{ display: "flex", flexWrap: "wrap" }}>
        {cards
          .filter((card) => card.user_id === user?._id)
          .map((card) => (
            <CardComponent
              card={card}
              key={card._id}
              handleDelete={handleDelete}
              handleLike={handleLike}
              handleEdit={handleEdit}
            />
          ))}
      </Container>
      }
    </>
  );
}
