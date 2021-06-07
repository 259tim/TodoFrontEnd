import api from "../../config/apiconfig";
import Base64 from 'js-base64';

const CreateSurveyData = (reference_key:string, user_id: number, survey_id: number): any => {
    let headers = new Headers();

    headers.append('Authorization', 'Basic ' + Base64.btoa("tim.seip@capgemini.com" + ":" + "adminpw"))
    fetch(api + "/api/participation", {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({
            "reference_key":reference_key,
            "user_id":"1",
            "survey_id":"1"
        })
    })
    .then((response) => response.json())
    .then((responseJson) => {
         console.log(responseJson);        
        })
    .catch(error => {
        console.error(error);
    });
}

export default CreateSurveyData;
