import React from 'react';
import '/Users/benjaminriot/Documents/riot-climate-consulting/src/App.css'; // Make sure to import your CSS file

function Home() {
  return (
    <div className="bg-blue-200 p-8 flex justify-center">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold text-blue-700">
          Welcome to Riot Climate Consulting
        </h1>
        <p className="mt-4 custom-paragraph">
          {`Our company specializes in climate and sustainability consulting. Expert in climate and atmospheric physics, ` }
          {`we provide tailored solutions and analysis to help companies and institutions in anything related to climate change.`}
        </p>
      </div>
    </div>
  );
}

export default Home;
