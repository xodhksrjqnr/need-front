import './App.css';
import Header from './layout/js/Header';
import {useRef, useState} from "react";
import Filter from "./component/js/filter/Filter";
import PostList from "./component/js/PostList";

function App() {
    const filter = useRef(['', '', '', '', '', '']);
    const [postListApi, setPostListApi] = useState('http://43.202.1.59:8080/posts?');

    const setSearchApi = () => {
        let district = (filter.current[0] === '' ? '' : filter.current[0]) +
            (filter.current[1] === '' ? '' : filter.current[1]) +
            (filter.current[2] === '' ? '' : filter.current[2]);
        district = (district === '' ? '' : 'administrativeDistrict=' + district + '&');
        let benefit = (filter.current[3] === '' ? '' : 'benefit=' + filter.current[3] + '&');
        let job = (filter.current[4] === '' ? '' : 'job=' + filter.current[4] + '&');
        let sex = (filter.current[5] === '' ? '' : 'sex=' + filter.current[5] + '&');
        let value = document.getElementById('search').value;
        let search = (value === '' ? '' : 'search=' + value + '&');
        let conditions = district + benefit + job + sex + search;

        setPostListApi('http://43.202.1.59:8080/posts?' + conditions);
    };

    const setFilter = (index, condition) => {
        filter.current[index] = condition;
        setSearchApi();
    };

    return (
        <div className="App">
            <Header setSearchApi={setSearchApi}/>
            <Filter setFilter={setFilter}/>
            <PostList postListApi={postListApi}/>
        </div>
    );
}

export default App;
