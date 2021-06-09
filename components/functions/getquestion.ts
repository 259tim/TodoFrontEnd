import api from "../../config/apiconfig";
import Base64 from 'js-base64';


// has to be edited

const GetQuestions = async (): Promise<any> => {
    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + Base64.btoa("tim.seip@capgemini.com" + ":" + "adminpw"))
    
    const response = await fetch(api + "/api/questions", {
            headers: headers,
            method: 'GET'
        })
    const stuff = await response.json();
    return stuff;
}

export default GetQuestions;
