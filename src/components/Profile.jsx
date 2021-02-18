import c from './Profile.module.css'

const Profile = () => {
    return (
        <div className={c.content}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-_mIfmXfxZydIr5sSyiVu6p_LMiG6L8ZDw&usqp=CAU" alt="" />
            <div>
                ava+descr
            </div>
            <div>
                my posts
            <div>
                    new post
            </div>
                <div>
                    <div>
                        post1
                    </div>
                    <div>
                        post2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;