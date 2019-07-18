import { setAuthorization } from "./general";

export function login(credentials) {
    return new Promise((res, rej) => {
        axios.post('/api/login', credentials)
            .then((response) => {
                if(response.data.success){
                    setAuthorization(response.data.access_token);
                    res(response.data);
                } else {
                    rej(response.data.message);
                }
                
            })
            .catch((err) =>{
                rej("Wrong email or password");
            })
    })
}

export function getLocalUser() {
    const userStr = localStorage.getItem("user");

    if(!userStr) {
        return null;
    }

    return JSON.parse(userStr);
}