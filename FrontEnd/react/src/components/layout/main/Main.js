import React from 'react';
import Header from "./Header";
import LeftPanel from "./LeftPanel";
import Chat from "./Chat";


const Main = () => {
  return (
    <>
      <section className="content">
        
        <Header />
        <section className="middlePanel">
          
          <LeftPanel />
          <div id="mainPanel">
            {console.log("test")}
          
            
            
            <Chat />
            
            
          
        
          </div>
          
          
        </section>
        
        
      </section>
    </>
  );
}


export default Main;