const URL = "http://localhost:4001/api/photographer";
export const register = (email:"string", password: "string") => {

    try{
        fetch(`${URL}`,{
                method: 'POST',
                headers: {"content-Type": "application/json"},
                credentials: "include",
                body: JSON.stringify({
                    email : email,
                    password: password
                    }) 
            })
                .then((response) => {
                    if (response.status === 201) {
                        return response.json();
                    }
                    if (response.status !== 201) {
                        console.error("unsuccessful post");
                    } 
                })
    }catch(error){
        console.error(error)
    }
};
export const login = (email:"string", password:"string") => {

    try{
        fetch(`${URL}/login`,{
                method: 'POST',
                credentials: 'include',
                headers: {"content-Type": "application/json"},
                body: JSON.stringify({
                    email : email,
                    password: password
                    }) 
            })
                .then((response) => {
                    if (response.status === 201) {
                        console.log("Welkome!")
                        return response.json();
                    }
                    if (response.status === 401) {
                        console.error("Unauthorized");
                    } 
                })
    }catch(error){
        console.error(error)
    }
};


