import { useSelector } from 'react-redux';
import {
    selectStatus,
    selectQuestions
} from '../../store/reducers/questionslice'


const questions = useSelector(selectQuestions);


const newquestions = questions.forEach(question => 
    question.answer = []);

console.log(newquestions)
