import "../css/post.css";

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
                {post.conditions.map(c => <span key={c}>{c}</span>)}
            </div>
        </div>
    )
}

export default Post;