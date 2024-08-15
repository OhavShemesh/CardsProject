import axios from "axios";
import { useCallback, useState } from "react";

export default function useCards() {
    const [card, setCard] = useState();

    const getCardById = useCallback(async (id) => {
        try {
            const response = await axios.get(
                `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${id}`

            );
            const data = response.data;
            setCard(data);

        } catch (err) {
            setError(err.message)
        }
    }
    )
    return { card, getCardById }

}