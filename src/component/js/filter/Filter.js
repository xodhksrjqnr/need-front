import '../../css/filter/filter.css';
import District from "./District";
import Sex from "./Sex";
import Job from "./Job";
import Benefit from "./Benefit";
import {useEffect, useState} from "react";
import axios from "axios";

function Filter({setFilter}) {
    const [job, setJob] = useState([]);
    const [benefit, setBenefit] = useState([]);

    useEffect(() => {
        axios.get("http://3.39.194.43:8080/conditions")
            .then((response) => {
                const arrJob = [];
                const arrBenefit = [];
                response.data.jobs.forEach(j => arrJob.push(j));
                response.data.benefits.forEach(b => arrBenefit.push(b));
                setJob(arrJob);
                setBenefit(arrBenefit);
            })
    }, [])

    return (
        <div id="filter" className="filter">
            <District setFilter={setFilter}/>
            <Job job={job} setFilter={setFilter}/>
            <Benefit benefit={benefit} setFilter={setFilter}/>
            <Sex setFilter={setFilter}/>
        </div>
    )
}

export default Filter;