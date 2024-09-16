import { Avatar, Box, Container } from '@mui/material';
import useProfileHook from './hook/useProfileHook';
import Form from '../../forms/components/Form';
import Input from '../../forms/components/Input';
import useForm from '../../forms/hooks/useForm';
import initialEditProfileForm from '../helpers/initialForms/initialEditProfileForm';
import editProfileSchema from '../models/editProfileSchema';

export default function EditProfile() {
    const { user, handleSaveChanges } = useProfileHook()


    const {
        onSubmit,
        onReset,
        validateForm,
        errors,
        data,
        handleChange,
    } = useForm(initialEditProfileForm, editProfileSchema, handleSaveChanges);


    return (
        <Box sx={{ display: "flex", alignItems: "Center", flexDirection: "column" }}>
            <Container sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
                <Avatar
                    sx={{ width: 100, height: 100, border: "1px solid black" }}
                    alt={user?.image?.alt || 'User Avatar'}
                    src={user?.image?.url || ''}
                />
            </Container>
            <Container sx={{ width: "60vw", display: "flex", alignItems: "Center", flexDirection: "column" }}>
                <Form
                    onSubmit={onSubmit}
                    onReset={onReset}
                    validateForm={validateForm}
                    title={"Edit Profile"}
                    styles={{ maxWidth: "800px" }}
                >
                    <Input
                        name="first"
                        label="First Name"
                        error={errors.first}
                        onChange={handleChange}
                        data={data}
                        sm={12}
                    />
                    <Input
                        name="last"
                        label="Last Name"
                        error={errors.last}
                        onChange={handleChange}
                        data={data}
                        sm={12}
                    />
                    <Input
                        name="phone"
                        label="Phone"
                        type="phone"
                        error={errors.phone}
                        onChange={handleChange}
                        data={data}
                        sm={12}
                    />
                    <Input
                        label="Country"
                        name="country"
                        error={errors.country}
                        onChange={handleChange}
                        data={data}
                        sm={12}
                    />
                    <Input
                        name="city"
                        label="City"
                        error={errors.city}
                        onChange={handleChange}
                        data={data}
                        sm={12}
                    />
                    <Input
                        name="street"
                        label="Street"
                        error={errors.street}
                        onChange={handleChange}
                        data={data}
                        sm={12}
                    />
                    <Input
                        name="houseNumber"
                        label="House Number"
                        type="number"
                        error={errors.houseNumber}
                        onChange={handleChange}
                        data={data}
                        sm={12}
                    />
                    <Input
                        name="zip"
                        label="ZIP Code"
                        error={errors.zip}
                        onChange={handleChange}
                        data={data}
                        sm={12}
                        required={false}
                    />
                </Form>
            </Container>
        </Box >
    );
}
