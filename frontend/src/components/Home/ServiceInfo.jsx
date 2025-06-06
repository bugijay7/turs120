import React from 'react';
import SundayServiceImg from '../../assets/sunday-service.jpeg';
import ChildrenServiceImg from '../../assets/children-service.jpeg';
import DeliteenzImg from '../../assets/deliteenz.jpeg';

function ServiceInfo() {
  return (
    <section className="py-16 px-6 bg-transparent">
      <div className="max-w-4xl mx-auto text-left">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">SUNDAY CELEBRATION</h2>
        <p className="text-lg text-gray-700 mb-8">Join Us This Sunday</p>

        <div className="grid grid-cols-1 md:grid-cols-3  text-left">
          {/* Main Sunday Service */}
          <div className="bg-black shadow-md  overflow-hidden">
            <img
              src={SundayServiceImg}
              alt="Main Sunday Service"
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-lime-900">Main Sunday Service</h3>
              <p className="text-white">
                <strong>First Service:</strong> 7:00 AM<br />
                <strong>Second Service:</strong> 9:30 AM<br />
                <strong>Third Service:</strong> 12:00 PM
              </p>
            </div>
          </div>

          {/* Children's Service */}
          <div className="bg-black shadow-md overflow-hidden">
            <img
              src={ChildrenServiceImg}
              alt="Children's Service"
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-lime-900">Children's Service</h3>
              <p className="text-white">
                Concurrent with main services –<br />
                7:00 AM, 9:30 AM & 12:00 PM
              </p>
            </div>
          </div>

          {/* DeliTeenz */}
          <div className="bg-black shadow-md  overflow-hidden">
            <img
              src={DeliteenzImg}
              alt="DeliTeenz"
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-lime-900">UR120Teenz</h3>
              <p className="text-white">From 2:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceInfo;
