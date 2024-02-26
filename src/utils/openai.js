import OpenAI from 'openai';
// import { OPEN_AI_KEY } from './constants';
const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY
console.log("api key : " + OPEN_AI_KEY);
const openai = new OpenAI({
  apiKey: OPEN_AI_KEY, 
  dangerouslyAllowBrowser: true

});

export default openai