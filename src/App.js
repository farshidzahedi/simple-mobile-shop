import React from "react";
import Header from "./Components/Header/Header";
import Slider from "./Components/Slider/Slider";
import Service from "./Components/Service/Service";
import Productslider from './Components/Productslider/Productslider'



function App() {
  return (
    <div className="bg-slate-50 flex flex-col">
      <Header />
      <Slider/>
        <div className="mx-auto w-[1200px]">
        <Service/>
        <Productslider/>
        </div>
    </div>
  );
}

export default App;
