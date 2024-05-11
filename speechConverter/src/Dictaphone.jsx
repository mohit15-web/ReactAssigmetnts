import React from 'react';
import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className='flex justify-center items-center flex-col gap-3 border shadow-xl p-20 rounded-lg'>
      <p className="text-lg">Microphone: {listening ? 'on' : 'off'}</p>
      <div className='flex justify-center items-center gap-6'>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={SpeechRecognition.startListening}
        >
          Start
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={SpeechRecognition.stopListening}
        >
          Stop
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={resetTranscript}
        >
          Reset
        </button>
      </div>
      <p className="mt-3">{transcript}</p>
    </div>
  );
};

export default Dictaphone;
