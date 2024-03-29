import '../css/post-list.css';
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import Post from "./Post";
import { useInView } from 'react-intersection-observer';
import $ from "jquery";
import {apiData} from "../../Data";

function PostList({postListApi}) {
    const [posts, setPosts] = useState([]);
    const postNum = useRef(0);
    const prePostListApi = useRef(apiData.backend + '/posts?');
    const [ref, inView] = useInView({threshold:0.2});

    useEffect(() => {
        if (prePostListApi.current !== postListApi) {
            setPosts([]);
            prePostListApi.current = postListApi;
            postNum.current = 0;
            $('#postListEndPoint').css('display', 'block');
            $('#postIsNotExist').css('display', 'block');
        }
    }, [postListApi])

    useEffect(() => {
        if (inView) {
            axios.get(postListApi + "offset=" + postNum.current)
                .then((response) => {
                    const arrPost = [];
                    const curDate = new Date();
                    const len = response.data.length;

                    response.data.forEach(p => {
                        if (p.closingDate === null || (curDate < new Date(p.closingDate)))
                            arrPost.push(p)
                    });
                    setPosts(prevPosts => prevPosts.concat(arrPost));
                    postNum.current += len;
                    if (len !== 20) {
                        $('#postListEndPoint').css('display', 'none');
                    }
                    if (!(postNum.current === 0 && len === 0)) {
                        $('#postIsNotExist').css('display', 'none');
                    }
            }).catch((err) => {
                console.log("err");
            });
        }
        // eslint-disable-next-line
    }, [inView]);

    return (
        <div className="postList">
            {posts.map(post => <Post key={post.postId} post={post}/>)}
            <div id="postIsNotExist">조회 결과가 존재하지 않습니다.</div>
            <div ref={ref} id="postListEndPoint"/>
        </div>
    )
}

export default PostList;