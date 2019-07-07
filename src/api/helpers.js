/* eslint-disable */
import axios from 'axios';

function updateSession(app) {
    var body = {
        "username": "paulo",
        "password": "very_safe"
    };
    axios.post(process.env.VUE_APP_ROOT_API + "/login", {
            body: body
        }).then(response => {
            console.log(response.data);
            app.$session.set("user", response.data.user)
        })
        .catch(e => {
            console.log(e);
        });
}

// function login(username, password, app) {
//     // call api here
//     updateSession(app);

// }

export {
    updateSession
};