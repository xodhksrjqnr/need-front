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
            {job.map(j =>
                <Button
                    key={j}
                    className={(cur === j ? "active button" : "inactive button")}
                    onClick={() => setCondition(j)}
                >
                    {j}
                </Button>
            )}
        </div>
    )
}

export default Job;