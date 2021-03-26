let state = {
    profilePage: {
        posts : [
            {id:1, message: "Hello! How do you do?", likesCount: 30},
            {id:2, message: "I'm fine, thanks!", likesCount: 10},
        ]
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
            {id:6, from: "me", message:"My state is working!"},
        ], 
    }

}

export default state;