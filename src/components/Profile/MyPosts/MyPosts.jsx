import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts
        .map(p => <Post message={p.message} likeCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            my posts
            <div>
                <div className={s.newPostText}>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div className={s.commitButton}>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
         </div>
    );
}

export default MyPosts;