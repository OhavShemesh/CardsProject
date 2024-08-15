import React from "react";
import Form from "../../sandbox/forms/components/Form";
import Input from "../../sandbox/forms/components/Input";
import { Grid } from "@mui/material";

export default function LoginForm({
    onSubmit,
    onReset,
    validateForm,
    title,
    errors,
    data,
    onInputChange,
}) {
    return (
        <Form
            onSubmit={onSubmit}
            onReset={onReset}
            validateForm={validateForm}
            title={title}
            styles={{ maxWidth: "800px" }}
        >
            <Input
                name="email"
                label="email"
                type="email"
                error={errors.email}
                onChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="password"
                label="password"
                type="password"
                error={errors.password}
                onChange={onInputChange}
                data={data}
                sm={6}
            />
            <Grid item>
            </Grid>
        </Form>
    );
}
