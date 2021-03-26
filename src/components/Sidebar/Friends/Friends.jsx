import s from "./Friends.module.css"

const Friends = (props) => {
    return (
        <div className={s.friendsWrapper}>
            <h2>Friends</h2>
            <div className={s.imgs}>
                <img src="https://github.com/yndx-shri/shri-2021-task-1/blob/master/assets/images/4x/10.jpg?raw=true" alt=""/>
                <img src="https://github.com/yndx-shri/shri-2021-task-1/blob/master/assets/images/4x/10.jpg?raw=true" alt=""/>
                <img src="https://github.com/yndx-shri/shri-2021-task-1/blob/master/assets/images/4x/10.jpg?raw=true" alt=""/>
                <img src="https://github.com/yndx-shri/shri-2021-task-1/blob/master/assets/images/4x/10.jpg?raw=true" alt=""/>
                <img src="https://github.com/yndx-shri/shri-2021-task-1/blob/master/assets/images/4x/10.jpg?raw=true" alt=""/>
            </div>
        </div>
    )
}

export default Friends;