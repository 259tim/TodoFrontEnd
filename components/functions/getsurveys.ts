import api from "../../config/apiconfig";
import Base64 from 'js-base64';

// has to be edited

const GetSurveys = (): any => {
    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + Base64.btoa("tim.seip@capgemini.com" + ":" + "adminpw"))

    fetch(api + "/api/participations", {
        headers: headers,
        method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
         return responseJson;
        })
    .catch(error => {
        console.error(error);
    });
}

export default GetSurveys;