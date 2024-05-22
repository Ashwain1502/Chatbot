import { useNavigate } from 'react-router-dom';
import bot from '../assets/bot.jpg';
import Button from './Button';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/bot');
  };

  return (
    <div className='w-full h-[100vh] bg-[#151718] text-[#fff] flex'>
      <div className="w-1/2 h-full flex justify-center items-center flex-col">
        <h1 className='text-7xl mb-10'>ChatBot.</h1>
        <p className='text-3xl mt-3 mb-8 w-1/2 text-center'>Here to help and clear all your doubts.</p>
        <Button label="Start The Bot" onClick={handleButtonClick} />
      </div>
      <div className="flex justify-center items-center w-1/2">
        <img
          src={bot}
          alt="bot"
          className='w-[60%] h-2/3 rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-110 object-cover object-center'
        />
      </div>
    </div>
  );
};

export default Home;
