import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, IconButton, CardActions } from "@mui/material";
import { useCurrentUser } from "../../../users/providers/UserProvider";
import axios from "axios";
import { getCard } from "../../services/cardsApiService";

export default function CardActionBar({
  cardId,
  handleDelete,
  handleEdit,
  handleLike,
}) {
  const { user } = useCurrentUser();
  const [isFavorite, setIsFavorite] = useState("");

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const data = await getCard(cardId);
        if (data.likes.includes(user?._id)) {
          setIsFavorite("red");
        } else {
          setIsFavorite("");
        }
      } catch (err) {
      }
    };

    fetchCardData();

  }, [cardId, user?._id]);

  const handleLikeClick = async () => {
    try {
      await handleLike(cardId);
      const data = await getCard(cardId);
      setIsFavorite(data.likes.includes(user?._id) ? "red" : "");
    } catch (err) {
    }
  };

  return (
    <CardActions sx={{ justifyContent: "space-between" }}>
      <Box>
        {user?.isAdmin && (
          <IconButton onClick={() => handleDelete(cardId)}>
            <DeleteIcon />
          </IconButton>
        )}

        {(user?.isBusiness || user?.isAdmin) && (
          <IconButton onClick={() => handleEdit(cardId)}>
            <ModeEditIcon />
          </IconButton>
        )}
      </Box>
      <Box>
        <IconButton onClick={handleLikeClick}>
          <FavoriteIcon sx={{ color: isFavorite }} />
        </IconButton>
      </Box>
    </CardActions>
  );
}
