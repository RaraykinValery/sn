import s from './Message.module.css'; 

const Message = (props) => {
    return(
        <div className={s.message + " " + s[props.from]}>
            <img src="https://github.com/yndx-shri/shri-2021-task-1/blob/master/assets/images/4x/10.jpg?raw=true" alt=""/>
            <span>{props.message}</span>
        </div>
    )
}

export default Message;