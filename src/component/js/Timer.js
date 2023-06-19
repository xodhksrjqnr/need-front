import {useEffect, useRef, useState} from "react";

function Timer({dateTime}) {
    const [time, setTime] = useState("");
    const timeDiff = Math.floor((new Date(dateTime) - Date.now()) / 1000);
    const hour = useRef(Math.floor(timeDiff / (60 * 60)));
    const minute = useRef(Math.floor((timeDiff % (60 * 60)) / 60));
    const second = useRef(Math.floor(((timeDiff % (60 * 60)) % 60)));

    useEffect(() => {
        if (time === "CLOSED")
            return ;
        let timer = setInterval(() => {
            if (hour.current >= 24) {
                setTime("D - " + Math.floor(hour.current / 24));
            } else {
                setTime(hour.current + ":" + minute.current + ":" + second.current);
            }
            if (hour.current === 0 && minute.current === 0 && second.current === 0) {
                setTime("CLOSED");
                return ;
            }
            second.current--;
            if (second.current === -1) {
                minute.current--;
                second.current = 59;
            }
            if (minute.current === -1) {
                hour.current--;
                minute.current = 59;
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [time])

    return (
        <div id="timer">{time}</div>
    );
}

export default Timer;