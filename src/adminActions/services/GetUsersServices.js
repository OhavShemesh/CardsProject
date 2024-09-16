import axios from "axios"
import { useState } from "react"

const usersApiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users"


export const getallUsers = () => {

    const [data, setData] = useState([])
    setTimeout(async () => {
        try {
            const response = await axios.get(usersApiUrl)
            const data = response.data
            return data

        } catch (err) {
            return []

        }

    }, 1);

}