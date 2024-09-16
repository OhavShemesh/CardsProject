import { useEffect } from "react";
import CardComponent from "./card/CardComponent";
import { Container } from "@mui/material";
import { useSearchParams } from "react-router-dom";

export default function Cards({ cards, handleDelete, handleLike, liked, handleEdit }) {

  const [searchParams] = useSearchParams()

  const filtered = searchParams.get("searchValue")
  return (
    <Container sx={{ display: "flex", flexWrap: "wrap" }}>
      {cards
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
  );
}
