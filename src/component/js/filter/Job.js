import {useState} from "react";
import {Button} from "react-bootstrap";

function Job({job, setFilter}) {
    const [cur, setCur] = useState('무관');

    function setCondition(target) {
        setCur(target);
        setFilter(4, target === '무관' ? '' : target);
    }

    return (
        <div>
            <p>직업</p>
            <Button
                key="직업무관"
                className={(cur === '무관' ? "activeButton" : "inactiveButton")}
                onClick={() => setCondition('무관')}
            >
                무관
            </Button>
            {job.map(j =>
                <Button
                    key={j}
                    className={(cur === j ? "activeButton" : "inactiveButton")}
                    onClick={() => setCondition(j)}
                >
                    {j}
                </Button>
            )}
        </div>
    )
}

export default Job;