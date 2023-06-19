import "../css/post.css";
import Timer from "./Timer";

function Post({post}) {
    return (
        <div
            className="post" style={{backgroundImage:`url(${post.thumbnail})`}}
            onClick={() => {window.open(post.url)}}
        >
            {post.dateTime === '' ? <Timer dateTime={post.dateTime}/> : <div id="timer">상시</div>}
            <div className="top"></div>
            <div className="bottom">
                <div>{post.title}</div>
                {post.conditions.map(c => <span key={c}>{c}</span>)}
            </div>
        </div>
    )
}

export default Post;