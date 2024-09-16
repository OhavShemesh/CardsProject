import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useSnack } from "../../../providers/SnackbarProvider";

export default function useProfileHook() {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const setSnack = useSnack();

    const getUserId = async () => {
        try {
            let token = localStorage.getItem("my token");
            if (!token) return null;
            let decodedToken = jwtDecode(token);
            return decodedToken._id;
        } catch (err) {
        }
    };

    const getUser = async () => {
        try {
            const userId = await getUserId();
            if (!userId) return;

            let response = await axios.get(
                `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/${userId}`
            );
            setUser(response.data);
        } catch (err) {
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    const handleSaveChanges = (editedProfile) => {
        const updatedProfile = {
            first: editedProfile.first || user?.name?.first,
            middle: editedProfile.middle || user?.name?.middle,
            last: editedProfile.last || user?.name?.last,
            phone: editedProfile.phone || user?.phone,
            url: editedProfile.url || user?.url,
            alt: editedProfile.alt || user?.alt,
            country: editedProfile.country || user?.address?.country,
            city: editedProfile.city || user?.address?.city,
            street: editedProfile.street || user?.address?.street,
            houseNumber: editedProfile.houseNumber || user?.address?.houseNumber,
            zip: editedProfile.zip || user?.address?.zip,
        };

        handlePutChanges(updatedProfile);
    };

    const handlePutChanges = async (detailsToPut) => {
        const detailsRearranged = {
            name: {
                first: detailsToPut.first,
                middle: detailsToPut.middle,
                last: detailsToPut.last,
            },
            phone: detailsToPut.phone,
            image: {
                url: detailsToPut.url,
                alt: detailsToPut.alt,
            },
            address: {
                country: detailsToPut.country,
                city: detailsToPut.city,
                street: detailsToPut.street,
                houseNumber: detailsToPut.houseNumber,
                zip: detailsToPut.zip,
            },
        };

        try {
            const userId = await getUserId();
            if (!userId) return;

            await axios.put(
                `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/${userId}`,
                detailsRearranged
            );
            setSnack("success", "User details updated");
        } catch (err) {
            setSnack("error", "User details failed to update");
        }
    };

    return {
        isLoading,
        setIsLoading,
        user,
        setUser,
        handleSaveChanges,
    };
}
