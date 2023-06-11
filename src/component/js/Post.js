import "../css/post.css";
import Timer from "./Timer";

function Post({post}) {
    return (
        <div
            className="post" style={{backgroundImage:`url(${post.thumbnail})`}}
            onClick={() => {window.open(post.url)}}
        >
            <div className="top">

            </div>
            <div className="bottom">
                <div>{post.title}</div>
                <Timer dateTime={post.closingDate}/>
                {post.conditions.map(c => <span key={c}>{c}</span>)}
            </div>
        </div>
    )
}

export default Post;