import api from "../../config/apiconfig";
import Base64 from 'js-base64';
import { questionsState } from "../../store/reducers/questionslice";

const CreateSurveyData = (questions: string): any => {
    let headers = new Headers();
    
    headers.append('Authorization', 'Basic ' + Base64.btoa("tim.seip@capgemini.com" + ":" + "adminpw"))
    fetch(api + "/api/question_post", {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({
            "questions":questions
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
