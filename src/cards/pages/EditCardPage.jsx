import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import Error from "../../components/Error";
import EditCardForm from "../components/EditCardForm";
import { useCurrentUser } from "../../users/providers/UserProvider";
import ROUTES from "../../routes/routesModel";

export default function EditCardPage() {
    const { card, isLoading, error, getCardById } = useCards();
    const { id } = useParams();

    const { user } = useCurrentUser()
    if (!user) return <Navigate to={ROUTES.ROOT} replace />;



    useEffect(() => {
        getCardById(id);
    }, [id]);

    if (isLoading) return <Spinner />;
    if (error) return <Error errorMessage={error} />;




    return (
        <Container sx={{ pt: 2, display: "flex", flexDirection: "column" }}>
            <PageHeader
                title="Edit Card"
                subtitle="Here you can edit the card as you desire"
                sx={{ mb: 4 }}
            />
            <EditCardForm card={card} />
        </Container>
    );
}
