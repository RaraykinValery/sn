import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
    _state : {
        
        profilePage: {
            posts : [
                {id:1, message: "Hello! How do you do?", likesCount: 30},
                {id:2, message: "I'm fine, thanks!", likesCount: 10},
            ],
            newPostText: 'it-kamasutra.com'
        },

        messagesPage: {
            dialogs : [
                {id:1, name:"Dimych"},
                {id:2, name:"Andrey"},
                {id:3, name:"Sveta"},
            ],  

            messages : [
                            {id:1, from: "friend", message:"Hi!"},
                {id:2, from: "me", message:"Hello!"},
                {id:3, from: "friend", message:"How are you?"},
                {id:4, from: "me", message:"I'm fine. How are you?"},
                {id:5, from: "me", message:"My state is working!"},
            ], 
            newMessageBody: "",
        },
    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage , action);
        this._callSubscriber(this._state);
    }
}

export const addPostActionCreator = () => {
    return {type:'ADD-POST'}
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type:'UPDATE-NEW-POST-TEXT', 
        newText: text
    }
}
export const sendMessageCreator = () => {
    return {
    type: 'SEND-MESSAGE'
    }
}
export const updateNewMessageBodyCreator = (body) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body,
    }
}

export default store;