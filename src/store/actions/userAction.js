import axios from "axios"

export const getUsers = () => {
    
    return async (dispatch) => {
        const apiURL="http://localhost:3000/users";
        return async (dispatch)=>{
       
        try {
            await axios.get(apiURL).then((e) => (
                
            dispatch({
                type:"GETUSERS",
                payload:e.data
            })
            ));
           
        } catch(err) {
            console.log("Erro while fetching data..", err);
        }
    }
    }
}