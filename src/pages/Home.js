// src/pages/Home.js
import React, { useState } from 'react';
import workers from '../data/workers'; // Adjust the import path
import Worker from '../components/Worker'; // Adjust the import path
import '../Styles/Home.css'; 

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [placeSearchTerm, setPlaceSearchTerm] = useState('');

  // Filter workers based on the search term
  const filteredWorkers = workers.filter(worker =>
    worker.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    worker.places.some(place => place.toLowerCase().includes(placeSearchTerm.toLowerCase()))
  );

//   return (
//     <div>
//         {/* Search Bar for Workers */}
//       <input
//         type="text"
//         placeholder="Search for a Name..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="search-bar form-control mb-3  sm-w-50"
//       />

//       {/* Search Bar for Places */}
//       <input
//         type="text"
//         placeholder="Search for a Place..."
//         value={placeSearchTerm}
//         onChange={(e) => setPlaceSearchTerm(e.target.value)}
//         className="search-bar form-control mb-3"
//       />
//       <div className="worker-list">
//         {filteredWorkers.map(worker => (
//           <Worker key={worker.id} worker={worker} />
//         ))}
//       </div>
//     </div>
//   );
// };

return (
    <div className='container'>
        <div className='row'>
            <div className='col-sm-6 mt-4'>
                {/* Search Bar for Workers */}
                <input
                    type="text"
                    placeholder="Search for a Name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-bar form-control mb-3  sm-w-50 bg-light "
                />
            </div>
            <div className='col-sm-6 mt-4'>
                {/* Search Bar for Places */}
                <input
                    type="text"
                    placeholder="Search for a Place..."
                    value={placeSearchTerm}
                    onChange={(e) => setPlaceSearchTerm(e.target.value)}
                    className="search-bar form-control mb-3"
                />
            </div>

            <div className="">
                <div className="">
                    {filteredWorkers.map(worker => (
                    <Worker key={worker.id} worker={worker} />
                    ))}
                </div>
            </div>
      </div>
    </div>



  );
};
export default Home;