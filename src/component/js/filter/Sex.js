import {Button} from "react-bootstrap";
import {useState} from "react";
import "../../css/filter/filter.css";

function Sex({setFilter}) {
    const [cur, setCur] = useState("무관");

    function setCondition(target) {
        setCur(target);
        setFilter(5, target === '무관' ? '' : target);
    }

    return (
        <div>
            <p>성별</p>
            <Button
                id="무관"
                className={cur === '무관' ? "activeButton" : "inactiveButton"}
                onClick={() => setCondition('무관')}
            >
                무관
            </Button>
            <Button
                id="남성"
                className={cur === '남성' ? "activeButton" : "inactiveButton"}
                onClick={() => setCondition('남성')}
            >
                남성
            </Button>
            <Button
                id="여성"
                className={cur === '여성' ? "activeButton" : "inactiveButton"}
                onClick={() => setCondition('여성')}
            >
                여성
            </Button>
        </div>
    )
}

export default Sex;