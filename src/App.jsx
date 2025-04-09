import LandingPage from "./Components/Hero_Section";
import Past_Performers from "./Components/Past_Performers";
import React from 'react';
import TicketSection from "./Components/TicketSection";
import Glimpses from "./Components/Glimpses";
// import Header from "./Components/NavBar";
function App(){
  return <>
    <div className="absolute top-0 left-0 w-full h-full border-t border-l border-teal-500/5 grid grid-cols-4 grid-rows-4">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="border-b border-r border-teal-500/5" />
          ))}
        </div>
     
      <LandingPage/>
      <TicketSection/>
      <Past_Performers/>
      <Glimpses/>
    
  </>
}
export default App;