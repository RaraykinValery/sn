import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
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
               <Post message="Hello! How do you do?" likeCount="30"/>
               <Post message="I'm fine, thanks!" likeCount="10"/>
            </div>
         </div>
    );
}

export default MyPosts;