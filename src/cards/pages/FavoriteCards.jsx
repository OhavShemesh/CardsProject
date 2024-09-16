import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import CardComponent from "../components/card/CardComponent";
import useCards from "../hooks/useCards";
import { Container } from "@mui/material";
import { useCurrentUser } from "../../users/providers/UserProvider";

export default function FavoriteCards() {
  const { getAllCards, cards, handleDelete, handleLike, handleEdit } = useCards();
  const { user } = useCurrentUser();

  useEffect(() => {
    const fetchCards = async () => {
      try {
        await getAllCards();
      } catch (err) {
      }
    };
    fetchCards();
  }, [getAllCards]);

  const handleLikeClick = async (cardId) => {
    try {
      await handleLike(cardId);
      await getAllCards();
    } catch (err) {
    }
  };

  return (
    <>
      <PageHeader
        title={"Favorite cards"}
        subtitle={"Welcome to favorite cards page"}
      />

      <Container sx={{ display: "flex", flexWrap: "wrap" }}>
        {cards
          .filter((card) => card.likes.includes(user?._id))
          .map((card) => (
            <CardComponent
              card={card}
              key={card._id}
              handleDelete={handleDelete}
              handleLike={handleLikeClick}
              handleEdit={handleEdit}
            />
          ))}
      </Container>

    </>
  );
}
