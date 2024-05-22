import { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', content: 'Hello Sir, How may I help you today?' }
  ]);
  const [query, setQuery] = useState('');

  const handleSubmit = async () => {
    if (!query.trim()) return; // Prevent empty messages from being sent
    
    // Add user's message to messages array
    const newMessages = [...messages, { type: 'user', content: query }];
    setMessages(newMessages);

    // Prepare options for API request
    const options = {
      method: 'POST',
      url: 'https://harley-the-chatbot.p.rapidapi.com/talk/bot',
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json',
        'X-RapidAPI-Key': '0d63b418c8mshf52966f1fb50969p1f9921jsn78997aa5f6a3',
        'X-RapidAPI-Host': 'harley-the-chatbot.p.rapidapi.com'
      },
      data: {
        client: '',
        bot: 'harley',
        message: query
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response);
      const botResponse = response.data.data.conversation.output;

      // Add bot's response to messages array
      setMessages([...newMessages, { type: 'bot', content: botResponse }]);
    } catch (error) {
      console.error('Error submitting query:', error);
    }

    // Clear the input field
    setQuery('');
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="flex flex-col p-4 h-[98%]">
      <div className="h-[100%] rounded-2xl mt-1 p-4 overflow-y-auto scrollbar flex flex-col">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`h-10 rounded-lg mb-3 text-[#D2D2D2] pl-2 pr-2 flex items-center text-lg w-fit max-w-[70%] ${
              message.type === 'user' ? 'bg-[#18191E] self-start' : 'bg-[#1E1F24] self-end'
            }`}
          >
            {message.content}
          </div>
        ))}
      </div>
      <div className="h-[25%] flex items-center">
        <input 
          type="text" 
          className="w-4/5 mr-8 h-12 rounded-full border-none outline-none text-slate-300 text-xl pl-6 pr-6 bg-[#212121]"
          placeholder='Type...'
          value={query}
          onChange={handleChange}
        />
        <button className='w-32 bg-blue-400 h-10 text-2xl rounded-3xl' onClick={handleSubmit}>Submit</button> 
      </div>
    </div>
  );
};

export default Chat;



















// import axios from 'axios';

// const options = {
//   method: 'POST',
//   url: 'https://harley-the-chatbot.p.rapidapi.com/talk/bot',
//   headers: {
//     'content-type': 'application/json',
//     Accept: 'application/json',
//     'X-RapidAPI-Key': '0d63b418c8mshf52966f1fb50969p1f9921jsn78997aa5f6a3',
//     'X-RapidAPI-Host': 'harley-the-chatbot.p.rapidapi.com'
//   },
//   data: {
//     client: '',
//     bot: 'harley',
//     message: 'Hello how are you'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

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
