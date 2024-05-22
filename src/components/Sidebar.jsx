import { useNavigate } from "react-router-dom";
import Button from "./Button"

const Sidebar = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/exit');
  };

  return (
    <div className="w-2/5 h-full">
        <div className="upper h-2/3 p-4">
            <h1 className='text-4xl font-semibold text-center p-5'>ChatBot.</h1>
            <h2 className='text-2xl font-semibold ml-3 mb-5'>Quick Help.</h2>
            <ul className='text-md ml-3 list-disc list-inside space-y-3 mb-2 text-[#808080]'>
                <li>Crop Information</li>
                <li>Weather Updates</li>
                <li>Market Information</li>
                <li>Soil Health Analysis</li>
                <li>Farm Equipment Info</li>
            </ul>
            <hr className='m-2 border-[#808080]'/>
        </div>
        <div className="flex justify-center items-center">
            <Button label="Quries Solved" onClick={handleButtonClick} />
        </div>
    </div>
  )
}

export default Sidebar