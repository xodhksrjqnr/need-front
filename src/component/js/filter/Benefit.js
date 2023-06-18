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
            {benefit.map(b =>
                <Button
                    key={b}
                    className={(cur === b ? "active button" : "inactive button")}
                    onClick={() => setCondition(b)}
                >
                    {b}
                </Button>
            )}
        </div>
    )
}

export default Benefit;