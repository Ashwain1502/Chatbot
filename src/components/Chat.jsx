import { useState } from 'react';
import axios from 'axios';

const API_URL = 'https://chat-gpt26.p.rapidapi.com/';
const API_KEY = '0d63b418c8mshf52966f1fb50969p1f9921jsn78997aa5f6a3';
const API_HOST = 'chat-gpt26.p.rapidapi.com';

const Chat = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', content: 'Hello Sir, How may I help you today?' }
  ]);
  const [query, setQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState('');

  const handleSend = async () => {
    if (!query.trim()) return; // Prevent empty messages from being sent

    const newMessage = { type: 'user', content: query };
    const newMessages = [...messages, newMessage];

    setMessages(newMessages);
    setQuery('');
    setError('');

    setIsTyping(true);

    const options = {
      method: 'POST',
      url: API_URL,
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': API_HOST
      },
      data: {
        model: 'gpt-3.5-turbo',
        messages: newMessages.map(msg => ({ role: msg.type === 'bot' ? 'assistant' : 'user', content: msg.content }))
      }
    };

    try {
      const response = await axios.request(options);
      const botMessage = {
        type: 'bot',
        content: response.data.choices[0].message.content
      };

      setMessages([...newMessages, botMessage]);
      setIsTyping(false);
    } catch (error) {
      console.error('Error submitting query:', error);
      setError('Error submitting query. Please try again later.');
      setIsTyping(false);
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <div className="h-[80%] rounded-2xl mt-1 p-4 overflow-y-auto scrollbar flex flex-col">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg mb-3 text-[#D2D2D2] flex items-center text-lg max-w-[70%] ${
              message.type === 'user' ? 'bg-[#18191E] self-start' : 'bg-[#1E1F24] self-end'
            }`}
            style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}
          >
            {message.content}
          </div>
        ))}
        {isTyping && (
          <div className="text-[#D2D2D2] p-2 rounded-lg mb-3 flex items-center text-lg max-w-[70%] self-end">
            Bot is replying...
          </div>
        )}
        {error && (
          <div className="text-red-500 mt-4">
            {error}
          </div>
        )}
      </div>
      <div className="btn flex items-center">
        <input 
          type="text" 
          className="w-4/5 mr-8 h-12 rounded-full border-none outline-none text-slate-300 text-xl pl-6 pr-6 bg-[#212121]"
          placeholder='Type...'
          value={query}
          onChange={handleChange}
        />
        <button className='w-32 bg-blue-400 h-10 text-2xl rounded-3xl' onClick={handleSend}>Submit</button> 
      </div>
    </>
  );
};

export default Chat;














// const messages = [

// ];

// const Chat = () => {
//   return (
//     <>
//     <div className="h-[80%] rounded-2xl mt-1 p-4 overflow-y-auto scrollbar">
//       {messages.map((message, index) => (
//         <div
//           key={index}
//           className={`h-10 rounded-lg mb-3 text-[#D2D2D2] pl-2 pr-2 flex items-center text-lg w-fit max-w-[70%] ${
//             index % 2 === 0 ? 'bg-[#18191E] self-start' : 'bg-[#1E1F24] self-end'
//           }`}
//         >
//           {message}
//         </div>
//       ))}
//     </div>
//     <div className="btn">
//     <input 
//         type="text" 
//         className="w-4/5 mr-8 h-12 rounded-full border-none outline-none text-slate-300 text-xl pl-6 pr-6 bg-[#212121]"
//         placeholder='Type...'
//     />
//     <button className='w-32 bg-blue-400 h-10 text-2xl rounded-3xl'>Submit</button> 
// </div>
// </>
//   );
// };

// export default Chat;
