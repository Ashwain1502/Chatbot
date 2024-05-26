import { useNavigate } from 'react-router-dom';
import final from '../assets/final.jpg';
import Button from './Button';
import './Exit.css'; 

const Exit = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleBotClick = () => {
    navigate('/bot');
  };

  return (
    <div className="bg-black text-white flex flex-col items-center justify-center h-[100vh] w-full">
      <p className='text-2xl sm:text-7xl font-semibold mb-10'>
        Harvesting <span className="text-gradient animate-gradient-x">Happiness</span>
      </p>
      <div>
        <img 
          src={final} 
          alt="bot" 
          className='w-[350px] h-[350px] transition-transform duration-300 ease-in-out transform hover:scale-110 object-cover object-center' 
        />
      </div>
      <div className='flex gap-10 mt-10 flex-col sm:flex-row'>
        <Button label="Home" onClick={handleHomeClick} />
        <Button label="More Doubts" onClick={handleBotClick} />
      </div>
    </div>
  );
};

export default Exit;
