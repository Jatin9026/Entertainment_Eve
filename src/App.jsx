import LandingPage from "./Components/Hero_Section";
import Past_Performers from "./Components/Past_Performers";
import React from 'react';
import TicketSection from "./Components/TicketSection";
function App(){
  return <>
  <NavBar/>
    <LandingPage/>
    <TicketSection/>
    <Past_Performers/>
    
  </>
}
export default App;