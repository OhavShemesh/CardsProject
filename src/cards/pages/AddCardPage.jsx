import { Container } from '@mui/material'
import React from 'react'
import { useCurrentUser } from '../../users/providers/UserProvider'
import { Navigate, useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';
import CardForm from '../components/CardForm';
import useForm from '../../sandbox/forms/hooks/useForm';
import initialCardForm from '../helpers/initialForms/initialCardForm';
import cardSchema from '../models/cardSchema';
import { addcard } from '../../users/services/usersApiService';
import { useSnack } from '../../providers/SnackbarProvider';

export default function AddCardPage() {
    const { user } = useCurrentUser()
    if (!user) return <Navigate to={ROUTES.ROOT} replace />;
    const setSnack = useSnack()
    const navigate = useNavigate()


    const handleAddCard = (cardDetails) => {

        const newObject = {
            title: cardDetails.title,
            subtitle: cardDetails.subtitle,
            description: cardDetails.description,
            phone: cardDetails.phone,
            email: cardDetails.email,
            image: {
                url: cardDetails.imageUrl,
                alt: cardDetails.imageAlt,
            },
            address: {
                country: cardDetails.country,
                city: cardDetails.city,
                street: cardDetails.street,
                houseNumber: cardDetails.houseNumber,
                zip: cardDetails.zip,
            }

        }

        addcard(newObject)
        setSnack("success", "New card added")
        navigate(ROUTES.CARDS)
    };


    const { data, errors, handleChange, handleReset, validateForm, onSubmit } =
        useForm(initialCardForm, cardSchema, handleAddCard);

    return (
        <Container >
            <CardForm data={data} errors={errors} handleChange={handleChange} validateForm={validateForm} handleReset={handleReset} onSubmit={onSubmit} />
        </Container>
    )
}
