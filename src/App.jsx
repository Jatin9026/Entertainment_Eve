import LandingPage from "./Components/Hero_Section";
import Past_Performers from "./Components/Past_Performers";
import React from 'react';
import TicketSection from "./Components/TicketSection";
import Glimpses from "./Components/Glimpses";
// import Header from "./Components/NavBar";
// import Header from "./Components/NavBar";
function App(){
  return <>
    <LandingPage/>
    <TicketSection/>
    <Past_Performers/>
    <Glimpses/>
  </>
}
export default App;