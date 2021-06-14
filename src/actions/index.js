// import { fetchQuestions } from '../Services/fetchApi';

export const GET_QUESTIONS = 'GET_QUESTIONS';

export const getQuestionsAC = (payload) => ({
  type: GET_QUESTIONS,
  payload,
});

// export const fetchQuestionsAC = (dispatch) => (
//   fetchQuestions().then((questions) => dispatch(getQuestionsAC(questions)))
// );

export function fetchQuestionsAC() {
  const token = localStorage.getItem('token');
  const questionsUrl = `https://opentdb.com/api.php?amount=5&token=${token}`;
  return (dispatch) => (
    fetch(questionsUrl)
      .then((response) => response.json()
        .then((questions) => dispatch(getQuestionsAC(questions))))
  );
}
