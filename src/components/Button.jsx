
const Button = ({ label, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className='bg-blue-400 p-3 text-3xl mt-6 w-60 font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-110'
    >
      {label}
    </button>
  );
};

export default Button;
