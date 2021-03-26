import Friends from "./Friends/Friends";
import Navbar from "./Navbar/Navbar"
import s from "./Sidebar.module.css"

const Sidebar = (props) => {
    return (
        <div className={s.sidebar}>
            <Navbar/>
            <Friends/>
        </div>
    )
}

export default Sidebar;