import { useNavigate } from 'react-router-dom';
import bot from '../assets/bot.jpg';
import Button from './Button';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/bot');
  };

  return (
    <div className='w-full h-[100vh] bg-[#151718] text-[#fff] flex flex-col-reverse sm:flex-row'>
      <div className="w-full sm:w-1/2 sm:h-full h-1/2 flex justify-center items-center flex-col p-4">
        <h1 className='text-6xl sm:text-5xl md:text-6xl lg:text-7xl mb-5 sm:mb-10'>ChatBot.</h1>
        <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl mt-3 mb-5 sm:mb-8 text-center'>Here to help and clear all your doubts.</p>
        <Button label="Start The Bot" onClick={handleButtonClick} />
      </div>
      <div className="flex justify-center items-center w-full h-1/2 sm:h-full sm:w-1/2 p-4">
        <img
          src={bot}
          alt="bot"
          className='w-[80%] sm:w-[60%] h-[80%] sm:h-2/3 rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-110 object-cover object-center'
        />
      </div>
    </div>
  );
};

export default Home;














// import { useNavigate } from 'react-router-dom';
// import bot from '../assets/bot.jpg';
// import Button from './Button';

// const Home = () => {
//   const navigate = useNavigate();

//   const handleButtonClick = () => {
//     navigate('/bot');
//   };

//   return (
//     <div className='w-full h-[100vh] bg-[#151718] text-[#fff] flex'>
//       <div className="w-1/2 h-full flex justify-center items-center flex-col sm:flex-col">
//         <h1 className='text-7xl mb-10'>ChatBot.</h1>
//         <p className='text-3xl mt-3 mb-8 w-1/2 text-center'>Here to help and clear all your doubts.</p>
//         <Button label="Start The Bot" onClick={handleButtonClick} />
//       </div>
//       <div className="flex justify-center items-center w-1/2">
//         <img
//           src={bot}
//           alt="bot"
//           className='w-[60%] h-2/3 rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-110 object-cover object-center'
//         />
//       </div>
//     </div>
//   );
// };

// export default Home;
