import React, {useState} from 'react';
import QUESTIONS from '../questions.js';

export default function Quiz(){

//Answer selected by user
const [userAnswers, setUserAnswers] = useState([]);
//number of answers tell which question is being answered remember index starts at zero.
const activeQuesIndex = userAnswers.length;

//function for choosing answer and adding it to userAnswers Array
function handleSelectAnswer(selectedAnswer){
setUserAnswers((prevUserAnswers)=>{
  return[...prevUserAnswers, selectedAnswer]
});
}

  return(
    <div id='quiz'>
    <div id='question'>
<h2>{QUESTIONS[activeQuesIndex].text}</h2>
<ul id= 'answers'>{QUESTIONS[activeQuesIndex].answers.map((answer)=>(
  <li key={answer} className='answer'>
  <button  onClick={handleSelectAnswer} >{answer}</button>
</li>))}
</ul>
    </div>
    </div>
  )
}