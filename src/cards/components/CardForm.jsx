import React from 'react'
import Form from '../../sandbox/forms/components/Form'
import Input from '../../sandbox/forms/components/Input'
import ROUTES from '../../routes/routesModel';
import NotRequired from '../../forms/components/NotRequired';

export default function CardForm({ errors, handleChange, data, onSubmit, handleReset, validateForm }) {
    return (
        <Form
            title="Add New Card"
            to={ROUTES.ROOT}
            onSubmit={onSubmit}
            onReset={handleReset}
            validateForm={validateForm}

        >
            <Input name="title"
                label="title"
                error={errors.title}
                onChange={handleChange}
                data={data}
                sm={12}
            />
            <Input name="subtitle"
                label="subtitle"
                error={errors.subtitle}
                onChange={handleChange}
                data={data}
                sm={12}
            />
            <Input name="description"
                label="description"
                error={errors.description}
                onChange={handleChange}
                data={data}
                sm={12}
            />
            <Input name="phone"
                label="phone"
                error={errors.phone}
                onChange={handleChange}
                data={data}
                sm={12}
            />
            <Input name="email"
                label="email"
                error={errors.email}
                onChange={handleChange}
                data={data}
                sm={12}
            />
            <NotRequired name="webUrl"
                label="webUrl"
                error={errors.webUrl}
                onChange={handleChange}
                data={data}
                sm={12}
            />
            <Input name="imageUrl"
                label="imageUrl"
                error={errors.imageUrl}
                onChange={handleChange}
                data={data}
                sm={12}
            />
            <Input name="imageAlt"
                label="imageAlt"
                error={errors.imageAlt}
                onChange={handleChange}
                data={data}
                sm={12}
            />
            <NotRequired name="state"
                label="state"
                error={errors.state}
                onChange={handleChange}
                data={data}
                sm={12}
            />
            <Input name="country"
                label="country"
                error={errors.country}
                onChange={handleChange}
                data={data}
                sm={12}
            />
            <Input name="city"
                label="city"
                error={errors.city}
                onChange={handleChange}
                data={data}
                sm={12}
            />
            <Input name="street"
                label="street"
                error={errors.street}
                onChange={handleChange}
                data={data}
                sm={12}
            />
            <Input name="houseNumber"
                label="House Number"
                error={errors.houseNumber}
                onChange={handleChange}
                data={data}
                sm={12}
            />
            <Input name="zip"
                label="zip"
                error={errors.zip}
                onChange={handleChange}
                data={data}
                sm={12}
            />
        </Form>
    )
}
