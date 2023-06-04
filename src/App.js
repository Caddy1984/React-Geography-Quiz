import geographyQuestions from './GeographyQuestions';
import { useState } from 'react';
import './styles.css';

export default function App() {
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizContent, setQuizContent] = useState(geographyQuestions[currentQuestion].Question);
  const [score, setScore] = useState(0);
  const [scoreDisplay, setScoreDisplay] = useState(false);
  const [nextButton, setNextButton] = useState(false);
  const [answerButton, setAnswerButton] = useState(false);
  const nextQuestion = currentQuestion + 1;
  const questionText = document.getElementsByClassName('question-text');
  


  
  function handleAnswerButtonClick(isCorrect){
    if (isCorrect === true) {
      setQuizContent(geographyQuestions[currentQuestion].CorrectAnswerText)
      setScore(score + 1);
    } else {
      setQuizContent(geographyQuestions[currentQuestion].WrongAnswerText);
    }

    setNextButton(true);
    setAnswerButton(true);
    
  }

  function handleNextButtonClick(){
    geographyQuestions[currentQuestion].answerOptions.map((x)=>{
      return(
        <button>{x.answerOptions}</button>
      )
    })

    if (nextQuestion < geographyQuestions.length) {
      setCurrentQuestion(nextQuestion);
      setQuizContent(geographyQuestions[nextQuestion].Question);
    } else {
      setScoreDisplay(true);
    }

    setNextButton(false);
    setAnswerButton(false);
  }
  

  return (

    <div className='app'>
			
			{scoreDisplay ? (
				<div className='score-section'>Great Job! You scored {score} out of {geographyQuestions.length}</div>
			) : (
				<>

          {/* QUESTION SECTION */}
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {geographyQuestions[currentQuestion].QuestionNumber}</span>/{geographyQuestions.length}
						</div>
						<div className='question-text'>{quizContent}</div>
            <div>
              <button className="next-btn" onClick={handleNextButtonClick} style={{visibility: nextButton ? 'visible' : 'hidden'}}>Continue...</button>
            </div>
					</div>

          {/* ANSWER SECTION */}
					<div className='answer-section'>
            {geographyQuestions[currentQuestion].answerOptions.map((x)=>{
              return(
                <button disabled={answerButton} className='answer-btn' onClick={()=> handleAnswerButtonClick(x.isCorrect)}>{x.answerText}</button>
              )
            })}
					</div>
				</>
			)}
		</div>
  );
}


