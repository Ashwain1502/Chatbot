const Tips = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-[#151718] w-[70%] h-[70%] p-6 rounded-lg overflow-y-auto text-white">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4">Tips</h2>
        <div className="text-md text-white space-y-2">
          <p>1. Provide necessary details for context like the crop name, fertilizers or pesticides used, soil details, time of the year etc.</p>
          <p>2. If the chatbot does not understand, try rephrasing your question.</p>
          <p>3. Use simple language to ensure better understanding.</p>
          <p>4. Be clear and concise with your questions.</p>
          <p>5. Give proper details for your problems.</p>
        </div>
      </div>
    </div>
  );
};

export default Tips;
