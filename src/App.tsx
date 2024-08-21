import { retrieveLaunchParams, useInitData } from "@tma.js/sdk-react";
import { useState } from "react";

function App() {
  const initData = useInitData();
  const { initDataRaw } = retrieveLaunchParams();
  const [selected, setSelected] = useState("referrals");

  // if (isLoading) {
  //     return (
  //         <div className='flex h-screen items-center justify-center'>
  //             <Spinner />
  //         </div>
  //     );
  // }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white">Referrals</h1>
    </div>
  );
}

export default App;
