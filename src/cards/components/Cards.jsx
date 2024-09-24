import CardComponent from "./card/CardComponent";
import { Container } from "@mui/material";
import { useSearchParams } from "react-router-dom";

export default function Cards({ cards, handleDelete, handleLike, handleEdit }) {
  const [searchParams] = useSearchParams();

  const searchValue = searchParams.get("searchValue")?.toLowerCase() || "";

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchValue) ||
    card.description.toLowerCase().includes(searchValue)
  );

  return (
    <Container sx={{ display: "flex", flexWrap: "wrap" }}>
      {filteredCards.length > 0 ? (
        filteredCards.map((card) => (
          <CardComponent
            card={card}
            key={card._id}
            handleDelete={handleDelete}
            handleLike={handleLike}
            handleEdit={handleEdit}
          />
        ))
      ) : (
        <p>No cards found matching your search.</p>
      )}
    </Container>
  );
}
