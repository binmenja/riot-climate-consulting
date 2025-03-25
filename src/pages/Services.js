import React from 'react';

function Services() {
  return (
    <div className="bg-yellow-200 p-8">
      <h1 className="text-4xl font-bold text-yellow-700">Our Services</h1>
      <p className="mt-4">At Riot Climate Consulting, we specialize in atmospheric physics and radiation, offering a range of services to help you understand and address climate-related challenges.</p>

      <div className="mt-8 space-y-6">
        {/* Service 1 */}
        <div>
          <h2 className="text-2xl font-semibold text-yellow-800">Atmospheric Modeling</h2>
          <p>We provide advanced atmospheric modeling services to simulate weather patterns, climate change impacts, and air quality. Our models help predict future scenarios and inform decision-making processes.</p>
        </div>

        {/* Service 2 */}
        <div>
          <h2 className="text-2xl font-semibold text-yellow-800">Radiation Measurement and Analysis</h2>
          <p>Our expertise in radiation measurement allows us to analyze solar and infrared radiation data. We offer insights into energy balance, cloud properties, and surface emissivity, crucial for climate studies and renewable energy projects.</p>
        </div>

        {/* Service 3 */}
        <div>
          <h2 className="text-2xl font-semibold text-yellow-800">Climate Impact Assessment</h2>
          <p>We conduct comprehensive climate impact assessments to evaluate the potential effects of climate change on ecosystems, infrastructure, and communities. Our assessments help in developing adaptation strategies and mitigation plans.</p>
        </div>

        {/* Service 4 */}
        <div>
          <h2 className="text-2xl font-semibold text-yellow-800">Consulting and Advisory Services</h2>
          <p>Our team offers consulting services to governments, businesses, and organizations seeking to integrate climate considerations into their strategies. We provide expert advice on policy development, sustainability initiatives, and risk management.</p>
        </div>

      <p className="mt-8">Contact us at <a href="mailto:contact@riotclimate.com" className="text-blue-600 underline">contact@riotclimate.com</a> to learn more about our services and how we can assist you.</p>
      </div>
    </div>
  );
}

export default Services;
