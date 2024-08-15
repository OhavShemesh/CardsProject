import { useState } from "react";

export default function useWindowSize() {
    const [width, setWidth] = useState(50)
    const [heigth, setHeigth] = useState(50)

    const handleWidthPlus = () => {
        setWidth((prev) => prev + 1)
        console.log(width);

    }

    const handleWidthMinus = () => {
        setWidth((prev) => prev - 1)
        console.log(width);

    }
    const handleHeightPlus = () => {
        setHeigth((prev) => prev + 1)
        console.log(heigth);

    }
    const handleHeightMinus = () => {
        setHeigth((prev) => prev - 1)
        console.log(heigth);

    }


    return { width, heigth, handleHeightMinus, handleHeightPlus, handleWidthMinus, handleWidthPlus }

}

