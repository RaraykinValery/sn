import c from './Post.module.css'

const Post = (props) => {
    return (
        <div className={c.item}>
            <img src="https://media.gettyimages.com/photos/teenage-beauty-picture-id1126913832?s=2048x2048" alt=""/>
            {props.message}
            <div>
                <span>{props.likeCount} like</span>
            </div>
        </div>
);
}

export default Post;