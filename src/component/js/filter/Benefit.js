import {useState} from "react";
import {Button} from "react-bootstrap";

function Benefit({benefit, setFilter}) {
    const [cur, setCur] = useState('무관');

    function setCondition(target) {
        setCur(target);
        setFilter(3, target === '무관' ? '' : target);
    }

    return (
        <div>
            <p>지원 종류</p>
            <Button
                key="지원종류무관"
                className={(cur === '무관' ? "activeButton" : "inactiveButton")}
                onClick={() => setCondition('무관')}
            >
                무관
            </Button>
            {benefit.map(b =>
                <Button
                    key={b}
                    className={(cur === b ? "activeButton" : "inactiveButton")}
                    onClick={() => setCondition(b)}
                >
                    {b}
                </Button>
            )}
        </div>
    )
}

export default Benefit;