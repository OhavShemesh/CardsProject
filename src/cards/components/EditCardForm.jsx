import { Divider, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import useForm from '../../forms/hooks/useForm';
import initialCardForm from '../helpers/initialForms/initialCardForm';
import cardSchema from '../models/cardSchema';
import Form from '../../forms/components/Form';
import Input from '../../forms/components/Input';
import { updateCard } from '../../users/services/usersApiService';

export default function EditCardForm({ card }) {

    const handleSaveChanges = (updatedCardDetails) => {


        const newObject = {
            title: updatedCardDetails.title,
            subtitle: updatedCardDetails.subtitle,
            description: updatedCardDetails.description,
            phone: updatedCardDetails.phone,
            email: updatedCardDetails.email,
            image: {
                url: updatedCardDetails.imageUrl,
                alt: updatedCardDetails.imageAlt,
            },
            address: {
                country: updatedCardDetails.country,
                city: updatedCardDetails.city,
                street: updatedCardDetails.street,
                houseNumber: updatedCardDetails.houseNumber,
                zip: updatedCardDetails.zip,
            }
        }

        updateCard(card._id, newObject)

    };


    const { data, errors, handleChange, validateForm, onSubmit, handleReset } =
        useForm(initialCardForm, cardSchema, handleSaveChanges);



    return (
        <Form
            onSubmit={onSubmit}
            onReset={handleReset}
            validateForm={validateForm}
            node={"Save Changes"}
            styles={{ mt: -3 }}

        >
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        <strong>WebUrl:</strong>
                    </Typography>
                    <Input
                        label={card.web}
                        name="webUrl"
                        data={data}
                        error={errors.webUrl}
                        onChange={handleChange}
                    />

                    <Typography variant="body1" gutterBottom>
                        <strong>ImageUrl:</strong>
                    </Typography>
                    <Input
                        label={card.image.url}
                        name="imageUrl"
                        data={data}
                        error={errors.imageUrl}
                        onChange={handleChange}
                    />

                    <Typography variant="body1" gutterBottom>
                        <strong>ImageAlt:</strong>
                    </Typography>
                    <Input
                        label={card.image.alt}
                        name="imageAlt"
                        data={data}
                        error={errors.imageAlt}
                        onChange={handleChange}
                    />
                    <Typography variant="body1" gutterBottom>
                        <strong>Description:</strong>
                    </Typography>
                    <Input
                        label={card.description}
                        name="description"
                        data={data}
                        error={errors.description}
                        onChange={handleChange}
                    />
                    <Typography variant="body1" gutterBottom>
                        <strong>Email:</strong>
                    </Typography>
                    <Input
                        label={card.email}
                        name="email"
                        data={data}
                        error={errors.email}
                        onChange={handleChange}
                    />

                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper
                        elevation={3}
                        sx={{
                            p: 3,
                            display: "flex",
                            flexDirection: "column",
                            height: "92%",
                        }}
                    >
                        <Typography variant="body1" gutterBottom>
                            <strong>Title:</strong>
                        </Typography>
                        <Input
                            label={card.title}
                            name="title"
                            data={data}
                            error={errors.title}
                            onChange={handleChange}
                        />

                        <Typography variant="subtitle1" color="text.primary" gutterBottom>
                            <strong>Subtitle:</strong>
                        </Typography>
                        <Input
                            label={card.subtitle}
                            name="subtitle"
                            data={data}
                            error={errors.subtitle}
                            onChange={handleChange}
                        />

                        <Typography variant="body1" color="text.primary" gutterBottom>
                            <strong>Phone:</strong>
                        </Typography>
                        <Input
                            label={card.phone}
                            name="phone"
                            data={data}
                            error={errors.phone}
                            onChange={handleChange}
                        />

                        <Typography variant="body1" color="text.primary" gutterBottom>
                            <strong>Country:</strong>
                        </Typography>
                        <Input
                            label={card.address.country}
                            name="country"
                            data={data}
                            error={errors.country}
                            onChange={handleChange}
                        />
                        <Typography variant="body1" color="text.primary" gutterBottom>
                            <strong>City:</strong>
                        </Typography>
                        <Input
                            label={card.address.city}
                            name="city"
                            data={data}
                            error={errors.city}
                            onChange={handleChange}
                        />

                        <Typography variant="body1" color="text.primary" gutterBottom>
                            <strong>Street:</strong>
                        </Typography>
                        <Input
                            label={card.address.street}
                            name="street"
                            data={data}
                            error={errors.street}
                            onChange={handleChange}
                        />

                        <Typography variant="body1" color="text.primary" gutterBottom>
                            <strong>House Number:</strong>
                        </Typography>
                        <Input
                            label={card.address.houseNumber}
                            name="houseNumber"
                            data={data}
                            error={errors.houseNumber}
                            onChange={handleChange}
                        />
                        <Typography variant="body1" color="text.primary" gutterBottom>
                            <strong>Zip:</strong>
                        </Typography>

                        <Input
                            label={card.address.zip}
                            name="zip"
                            data={data}
                            error={errors.zip}
                            onChange={handleChange}
                        />

                        <Typography variant="body1" color="text.primary">
                            <strong>Card Number:</strong> {card.bizNumber}
                        </Typography>

                        <Divider sx={{ my: 2 }} />

                        <Typography variant="h1" fontSize={"0.9rem"} color="text.secondary">
                            This card represents a business entity and provides essential
                            contact details. Use it to reach out to the business, visit their
                            location, or verify their credentials. The information provided
                            includes a phone number, address, and a unique card number for
                            identification.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Form>
    )
}
