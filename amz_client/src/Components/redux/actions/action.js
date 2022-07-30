import axios from "axios"

console.log("tttttttttttttttttttttttttttttttttt")

const url = "http://localhost:8000/getproducts"

// export const getproducts = async (dispatch) => {
//     try {
//         const data = await fetch("http://localhost:8000/getproducts", {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         const res = await data.json();
//         dispatch({ type: "SUCCESS_GET_PRODUCTS", payload: res })
//     } catch (error) {
//         dispatch({ type: "FAIL_GET_PRODUCTS", payload: error.res })
//     }
// }

export const getproducts = async() =>{
    try {
        let res =  await axios.get(url).json()
        // console.log("nnnnnnnnnnnnnnnnnnnnnnn",res)

    } catch (error) {
        
    }
 


}