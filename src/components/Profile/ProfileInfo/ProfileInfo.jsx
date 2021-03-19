import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <img className={s.profileImage} src="https://www.nationalgeographic.rs/files/reke_srbija_klimatske_promene_371644770.jpg" alt="" />
            <div className={s.descriptionBlock}>
                ava+descr
            </div>
        </div>
    );
}

export default ProfileInfo;