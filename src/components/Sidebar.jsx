import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Popup from "./Popup";
import Tips from "./Tips";
import responses from './responses.json';

const Sidebar = () => {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState({ title: '', options: [] });
  const [history, setHistory] = useState([]);
  const [isTipsOpen, setIsTipsOpen] = useState(false);

  const handleButtonClick = () => {
    navigate('/exit');
  };

  const handleListItemClick = (key) => {
    setPopupContent(responses[key]);
    setIsPopupOpen(true);
    setHistory([responses[key]]);
  };

  const handleOptionClick = (option) => {
    if (option.next) {
      const newContent = responses[option.next];
      setPopupContent(newContent);
      setHistory([...history, newContent]);
    }
  };

  const handleGoBack = () => {
    const newHistory = [...history];
    newHistory.pop();
    const previousContent = newHistory[newHistory.length - 1];
    setPopupContent(previousContent);
    setHistory(newHistory);
  };

  const handleSuggestionsClick = () => {
    setIsTipsOpen(true);
  };

  return (
    <div className="sm:w-2/5 sm:h-full sm:inline-block hidden">
      <div className="upper h-3/5 p-4">
        <h1 className='text-4xl font-semibold text-center p-5'>Farmer ChatBot.</h1>
        <h2 className='text-2xl font-semibold ml-3 mb-5'>Quick Help.</h2>
        <ul className='text-md ml-3 list-disc list-inside space-y-3 mb-2 text-[#808080]'>
          <li className='cursor-pointer' onClick={() => handleListItemClick('cropInfo')}>Crop Information</li>
          <li className='cursor-pointer' onClick={() => handleListItemClick('weatherUpdates')}>Weather Updates</li>
          <li className='cursor-pointer' onClick={() => handleListItemClick('marketInfo')}>Market Information</li>
          <li className='cursor-pointer' onClick={() => handleListItemClick('soilHealth')}>Soil Health Analysis</li>
          <li className='cursor-pointer' onClick={() => handleListItemClick('farmEquip')}>Farm Equipment Info</li>
        </ul>
        <hr className='m-2 border-[#808080]'/>
      </div>
      <div className="flex justify-center items-center flex-col">
        <Button label="Quries Solved" onClick={handleButtonClick} />
        <p className="mt-9 text-xl text-[#d1d1d1]">Contact No. 9578xxxxxx</p>
        <div
          className="flex justify-center items-normal text-[#9f9f9f] cursor-pointer"
          onClick={handleSuggestionsClick}
        >
          Some Suggestions
        </div>
      </div>
      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        content={popupContent}
        onOptionClick={handleOptionClick}
        onGoBack={handleGoBack}
        canGoBack={history.length > 1}
      />
      <Tips
        isOpen={isTipsOpen}
        onClose={() => setIsTipsOpen(false)}
      />
    </div>
  );
};

export default Sidebar;






// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "./Button";
// import Popup from "./Popup";
// import responses from './responses.json';

// const Sidebar = () => {
//   const navigate = useNavigate();
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [popupContent, setPopupContent] = useState({ title: '', options: [] });
//   const [history, setHistory] = useState([]);

//   const handleButtonClick = () => {
//     navigate('/exit');
//   };

//   const handleListItemClick = (key) => {
//     setPopupContent(responses[key]);
//     setIsPopupOpen(true);
//     setHistory([responses[key]]);
//   };

//   const handleOptionClick = (option) => {
//     if (option.next) {
//       const newContent = responses[option.next];
//       setPopupContent(newContent);
//       setHistory([...history, newContent]);
//     }
//   };

//   const handleGoBack = () => {
//     const newHistory = [...history];
//     newHistory.pop();
//     const previousContent = newHistory[newHistory.length - 1];
//     setPopupContent(previousContent);
//     setHistory(newHistory);
//   };

//   return (
//     <div className="sm:w-2/5 sm:h-full sm:inline-block hidden">
//       <div className="upper h-3/5 p-4">
//         <h1 className='text-4xl font-semibold text-center p-5'>Farmer ChatBot.</h1>
//         <h2 className='text-2xl font-semibold ml-3 mb-5'>Quick Help.</h2>
//         <ul className='text-md ml-3 list-disc list-inside space-y-3 mb-2 text-[#808080]'>
//           <li className='cursor-pointer' onClick={() => handleListItemClick('cropInfo')}>Crop Information</li>
//           <li className='cursor-pointer' onClick={() => handleListItemClick('weatherUpdates')}>Weather Updates</li>
//           <li className='cursor-pointer' onClick={() => handleListItemClick('marketInfo')}>Market Information</li>
//           <li className='cursor-pointer' onClick={() => handleListItemClick('soilHealth')}>Soil Health Analysis</li>
//           <li className='cursor-pointer' onClick={() => handleListItemClick('farmEquip')}>Farm Equipment Info</li>
//         </ul>
//         <hr className='m-2 border-[#808080]'/>
//       </div>
//       <div className="flex justify-center items-center flex-col">
//         <Button label="Quries Solved" onClick={handleButtonClick} />
//         <p className="mt-9 text-xl text-[#d1d1d1]">Contact No. 9578xxxxxx</p>
//         <div className="flex justify-center items-normal text-[#9f9f9f] cursor-pointer">
//             Some Suggestions
//         </div>
//       </div>
//       <Popup
//         isOpen={isPopupOpen}
//         onClose={() => setIsPopupOpen(false)}
//         content={popupContent}
//         onOptionClick={handleOptionClick}
//         onGoBack={handleGoBack}
//         canGoBack={history.length > 1}
//       />
//     </div>
//   );
// };

// export default Sidebar;