import api from "../../config/apiconfig";
import Base64 from 'js-base64';

// has to be edited

// const GetParticipations = (): any => {
//     let headers = new Headers();
//     headers.append('Authorization', 'Basic ' + Base64.btoa("tim.seip@capgemini.com" + ":" + "adminpw"))

//     fetch(api + "/api/participations", {
//         headers: headers,
//         method: 'GET'
//     })
//     .then((response) => response.json())
//     .then((responseJson) => {
//         console.log(responseJson)
//          return responseJson;   
//         })
//     .catch(error => {
//         console.error(error);
//     });
// }

const GetParticipations = async (): Promise<any> => {
    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + Base64.btoa("tim.seip@capgemini.com" + ":" + "adminpw"))
    
    const response = await fetch(api + "/api/participations", {
            headers: headers,
            method: 'GET'
        })
    const stuff = await response.json();
    return stuff;
}

export default GetParticipations;