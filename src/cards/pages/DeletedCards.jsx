import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import CardComponent from "../components/card/CardComponent";
import useCards from "../hooks/useCards";
import { Container } from "@mui/material";
import { useCurrentUser } from "../../users/providers/UserProvider";

export default function DeletedCards() {
    const { cards, deleted, getAllCards, handleDelete, handleLike, handleEdit } =
        useCards();
    useEffect(() => {
        getAllCards();
    }, [deleted]);

    return (
        <>
            <PageHeader
                title={"Deleted cards"}
                subtitle={"Welcome to deleted cards page"}
            />
            {<Container sx={{ display: "flex", flexWrap: "wrap" }}>
                {cards
                    .filter((card) => deleted.includes(card._id))
                    .map((card) => (
                        <CardComponent
                            card={card}
                            key={card._id}
                            handleDelete={handleDelete}
                            handleLike={handleLike}
                            handleEdit={handleEdit}
                            liked={deleted}
                        />
                    ))}
            </Container>
            }
        </>
    );
}
