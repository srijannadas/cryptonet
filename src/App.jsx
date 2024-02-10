import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
      setUser(response.data.results[0]);
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {user && (
        <div className="max-w-lg w-full bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex justify-center p-6 bg-gray-200">
            <img className="w-32 h-32 object-cover rounded-full" src={user.picture.large} alt="User" />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{`${user.name.title} ${user.name.first} ${user.name.last}`}</div>
            <div className="text-gray-700 text-base">{user.email}</div>
            <div className="text-gray-700 text-base">{user.location.city}, {user.location.country}</div>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Phone: {user.phone}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">DOB: {user.dob.date}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
