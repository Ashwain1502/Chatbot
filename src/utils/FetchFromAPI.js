import axios from 'axios';

export const BASE_URL = 'https://harley-the-chatbot.p.rapidapi.com/talk/bot';

const options = {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    Accept: 'application/json',
    'X-RapidAPI-Key': '0d63b418c8mshf52966f1fb50969p1f9921jsn78997aa5f6a3',
    'X-RapidAPI-Host': 'harley-the-chatbot.p.rapidapi.com'
  },
  data: {
    client: '',
    bot: 'harley',
    message: 'Hello'
  }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  };