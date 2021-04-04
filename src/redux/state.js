const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type ===  UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type ===  SEND_MESSAGE) {
            let body = this._state.messagesPage.newMessageBody; 
            this._state.messagesPage.newMessageBody = "";
            this._state.messagesPage.messages.push({id:6, message: body})
            this._callSubscriber(this._state);
        }

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
    type: 'SEND_MESSAGE'
    }
}
export const updateNewMessageBodyCreator = (body) => {
    return {
        type: 'UPDATE_NEW_MESSAGE_BODY',
        body: body,
    }
}

export default store;