import "./district/ProvinceData";
import "./district/DistrictData";
import "./district/AreaData";

import {Button} from "react-bootstrap";
import {useState} from "react";

import "../../css/filter/district.css";

import PROVINCE_LIST from "./district/ProvinceData";
import DISTRICT_LIST from "./district/DistrictData";
import AREA_LIST from "./district/AreaData";

function District({setFilter}) {
    const [curProvince, setCurProvince] = useState('무관');
    const [curDistrict, setCurDistrict] = useState('무관');
    const [curArea, setCurArea] = useState('무관');

    const [districtList, setDistrictList] = useState([]);
    const [areaList, setAreaList] = useState([]);

    function fixProvince(target) {
        setCurProvince(target);
        setCurDistrict('무관');
        setCurArea('무관');
        setAreaList([]);
        {
            const index = DISTRICT_LIST.findIndex((e) => e.province === target);
            if (index !== -1) {
                setDistrictList(DISTRICT_LIST.at(index).districts);
            } else {
                setDistrictList([]);
            }
        }
        setFilter(0, target === '무관' ? '' : target);
        setFilter(1, '');
        setFilter(2, '');
    }

    function fixDistrict(target) {
        setCurDistrict(target);
        setCurArea('무관');
        {
            const index = AREA_LIST.findIndex((e) => e.district === target);
            if (index !== -1) {
                setAreaList(AREA_LIST.at(index).area);
            } else {
                setAreaList([]);
            }
        }
        setFilter(1, target === '무관' ? '' : target);
        setFilter(2, '');
    }

    function fixArea(target) {
        setCurArea(target);
        setFilter(2, target === '무관' ? '' : target);
    }

    return (
        <div>
            <p>지역</p>
            <div>
                {PROVINCE_LIST.map(province =>
                    <Button
                        key={province}
                        className={(curProvince === province ? "active button" : "inactive button")}
                        onClick={() => fixProvince(province)}
                    >
                        {province}
                    </Button>
                )}
            </div>
            <div className="district">
                {districtList.map(district =>
                    <Button
                        key={district}
                        className={(curDistrict === district ? "active button" : "inactive button")}
                        onClick={() => fixDistrict(district)}
                    >
                        {district}
                    </Button>
                )}
            </div>
            <div className="district">
                {areaList.map(area =>
                    <Button
                        key={area}
                        className={(curArea === area ? "active button" : "inactive button")}
                        onClick={() => fixArea(area)}
                    >
                        {area}
                    </Button>
                )}
            </div>
        </div>
    )
}

export default District;