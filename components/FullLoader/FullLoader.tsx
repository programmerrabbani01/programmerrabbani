// "use client";

// import React, { useState, useEffect } from "react";

// type Props = {
//   children: React.ReactNode;
// };

// export default function FullLoader({ children }: Props) {
//   const [progress, setProgress] = useState(0);
//   const [loadingComplete, setLoadingComplete] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((oldProgress) => {
//         if (oldProgress === 100) {
//           clearInterval(interval);
//           setLoadingComplete(true);
//           return 100;
//         }
//         const increase = Math.random() * 10;
//         return Math.min(oldProgress + increase, 100);
//       });
//     }, 300);

//     return () => clearInterval(interval);
//   }, []);

//   if (!loadingComplete) {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
//         <h2 className="text-2xl">Loading Network Performance...</h2>
//         <div className="mt-4 w-2/3 h-4 bg-gray-700">
//           <div
//             style={{ width: `${progress}%` }}
//             className="h-full bg-green-500"
//           ></div>
//         </div>
//       </div>
//     );
//   }

//   return <>{children}</>;
// }

"use client";

import React, { useState, useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

export default function FullLoader({ children }: Props) {
  const [progress, setProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          setLoadingComplete(true);
          return 100;
        }
        const increase = Math.random() * 10;
        return Math.min(oldProgress + increase, 100);
      });
    }, 300);

    // Listen for when the browser finishes loading
    const handleLoad = () => {
      clearInterval(interval);
      setProgress(100);
      setLoadingComplete(true);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!loadingComplete) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
        <h2 className="text-2xl md:text-5xl text_bg">PROGRAMMER RABBANI ...</h2>
        <div className="mt-4 w-2/3 h-4 bg-gray-700">
          <div
            style={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-blue-500 to-gray-50 "
          ></div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
