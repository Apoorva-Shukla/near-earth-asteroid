import React, { useState, useEffect } from "react";

export default function Wish(props) {
    const [wish, setWish] = useState(null);

    function validateWish() {
        let hour = new Date().getHours()
        if (hour >= 0 && hour < 12) {
            setWish('Morning')
        } else if (hour >= 12 && hour < 16) {
            setWish('Afternoon')
        } else {
            setWish('Evening')
        }
    }

    useEffect(() => {
        let interval = setInterval(() => {
            validateWish()
        }, 60000);
        return () => clearInterval(interval);
    }, [wish])

    if (wish !== null) {
        return <h4 className="user-select-none">Good {wish}!</h4>;
    } else {
        validateWish()
        return <></>
    }
}
