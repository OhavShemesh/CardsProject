import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";
import AddNewCardButton from "../components/AddNewCardButton";

export default function CardsPage() {
  const {
    cards,
    error,
    isLoading,
    getAllCards,
    handleDelete,
    handleLike,
    liked,
    deleted,
    handleEdit,
  } = useCards();

  useEffect(() => {
    getAllCards();
  }, []);

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
        liked={liked}
        deleted={deleted}
        handleEdit={handleEdit}
      />
      <AddNewCardButton />
    </div>
  );
}
