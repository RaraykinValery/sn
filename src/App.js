import './App.css';
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar.jsx';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar/>
                <div className="app-wrapper-content">
                    <Route path="/profile" 
                        render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />}/>
                    <Route path="/dialogs" 
                        render={() => <Dialogs messagesPage={props.state.messagesPage}/>}/>
                    <Route path="/news" 
                        render={() => <News />}/>
                    <Route path="/music" 
                        render={() => <Music />}/>
                    <Route path="/settings" 
                        render={() => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
