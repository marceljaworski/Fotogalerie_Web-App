const URL:string = "http://localhost:4001/api";


export const getAll = async (path:string) => {
    try {
      let urlGetAll = `${URL}/${path}`;
  
      const response = await fetch(urlGetAll);
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.error(error);
      return;
    }
};
  
export const signup = (email:string , password: string) :void => {
    
    try{
        fetch(`${URL}/photographer`,{
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
export const login = (email:string, password:string) :void => {

    try{
        fetch(`${URL}/photographer/login`,{
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
                        console.log("Welcome!")
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


 