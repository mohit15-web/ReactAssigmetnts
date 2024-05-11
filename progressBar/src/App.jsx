import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prevProgress => prevProgress + 1);
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center my-5">
        <h1 className="mb-4 text-3xl font-semibold">ProgressBar</h1>
        <div className="w-96 bg-gray-300 h-10 rounded-2xl relative">
          <p className="relative text-center pt-2 z-10 font-bold">{progress}% </p>
          <div className={`h-full bg-green-500 rounded-2xl absolute left-0 top-0 transition-width ease-in-out duration-1000`} style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </>
  );
}

export default App;
