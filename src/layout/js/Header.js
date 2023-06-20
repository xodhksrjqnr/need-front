import {Image} from "react-bootstrap";
import "../css/header.css";
import $ from 'jquery';
import { ReactComponent as Logo } from "../../svg/needlog.svg";
import Menu from "../../svg/menu.svg";
import SearchIcon from "../../svg/search.svg";
import Search from "../../component/js/filter/Search";

function Header({setSearchApi}) {
    function openFilter() {
        let filter = $('#filter');
        let value = filter.css('display') === 'none' ? 'block' : 'none';

        filter.css('display', value);
        if (value === 'none') {
            setSearchApi();
        }
    }

    return (
        <div className="header">
            <div className="left">
                <Logo id="logo"/>
            </div>
            <div className="middle">
                <Search/>
                <button>
                    <Image id="searchIcon" src={SearchIcon} alt="조회이미지" onClick={setSearchApi}/>
                </button>
            </div>
            <div className="right">
                <button>
                    <Image id="menu" src={Menu} alt="메뉴이미지" onClick={openFilter}/>
                </button>
            </div>
        </div>
    )
}

export default Header;