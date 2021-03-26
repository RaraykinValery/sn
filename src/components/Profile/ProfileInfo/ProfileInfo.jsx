import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <img className={s.profileImage} src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/325466_1100-1100x628.jpg" alt="" />
            <div className={s.descriptionBlock}>
                ava+descr
            </div>
        </div>
    );
}

export default ProfileInfo;