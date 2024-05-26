import { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const SpeechToTextPopup = ({ isOpen, onClose, onSpeechRecognized }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [error, setError] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);

  const startRecording = async () => {
    setError(null);
    setIsRecording(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.ondataavailable = (event) => {
        setAudioBlob(event.data);
      };

      mediaRecorder.start();

      setTimeout(() => {
        mediaRecorder.stop();
        setIsRecording(false);
      }, 5000); // Recording for 5 seconds
    } catch (err) {
      setError('Failed to start recording. Please ensure you have a microphone connected.');
      setIsRecording(false);
    }
  };

  const handleSubmit = async () => {
    if (!audioBlob) return;

    const data = new FormData();
    data.append('file', audioBlob, 'audio.wav');

    const options = {
      method: 'POST',
      url: 'https://chatgpt-42.p.rapidapi.com/whisperv3',
      headers: {
        'X-RapidAPI-Key': '0d63b418c8mshf52966f1fb50969p1f9921jsn78997aa5f6a3',
        'X-RapidAPI-Host': 'chatgpt-42.p.rapidapi.com',
      },
      data: data,
    };

    try {
      const response = await axios.request(options);
      if (response.data.status) {
        onSpeechRecognized(response.data.text);
        onClose();
      } else {
        setError('Failed to recognize speech. Please try again.');
      }
    } catch (err) {
      setError('An error occurred while processing your request. Please try again.');
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative bg-[#151718] w-[70%] h-[70%] p-6 rounded-lg text-white flex flex-col items-center justify-center">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-white text-2xl font-bold"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          {isRecording ? (
            <div className="text-xl">Recording...</div>
          ) : (
            <div className="text-xl">Click to start recording</div>
          )}
          <button
            onClick={isRecording ? null : startRecording}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            disabled={isRecording}
          >
            {isRecording ? 'Recording...' : 'Start Recording'}
          </button>
          {audioBlob && (
            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white px-4 py-2 rounded mt-4"
            >
              Submit Recording
            </button>
          )}
          {error && (
            <div className="text-red-500 mt-4">
              {error}
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default SpeechToTextPopup;
