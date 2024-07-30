import React from "react";
import Registration from "./module/Registration";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <div className="px-20 bg-[#153c63] flex gap-20 py-4 mb-5">
        <div className="text-white w-18 px-4 py-1">Dashboard</div>
        <div className="text-white w-18 px-4 py-1 bg-[#4e6c89]">
          Customer Profile
        </div>
      </div>
      <Registration />;
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default App;
