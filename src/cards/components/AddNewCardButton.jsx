import { IconButton } from '@mui/material'
import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';
import { jwtDecode } from 'jwt-decode';

export default function AddNewCardButton() {
    const navigate = useNavigate()
    const handleToAddCard = () => {
        navigate(ROUTES.ADD_CARD)
    }

    let decodedToken;

    const getToken = () => {
        try {
            let token = localStorage.getItem("my token")
            decodedToken = jwtDecode(token)
        } catch (err) {

        }
    }

    getToken()
    if (decodedToken) {
        if (decodedToken.isBusiness) {
            return (<IconButton onClick={handleToAddCard} sx={{ position: "sticky", bottom: "3vw", left: "95vw" }}>
                <AddCircleIcon color='primary' sx={{ fontSize: 50 }} />
            </IconButton>
            )

        }
    }

}
