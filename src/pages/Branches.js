// src/components/Branches.js
import React, { useState } from 'react';
import branches from '../data/branches'; 
import Branch from '../components/Branch';




const Branches = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Filter branches based on the search term
  const filteredBranches = branches.filter(branch =>
    branch.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='mt-3'>
      {/* <h2>Branches</h2> */}
      <input
        type="text"
        placeholder="Search for a branch..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar form-control mb-3"
      /> 



      {/* <ul>
        {filteredBranches.map(branch => (
          <li key={branch.id}>
            {branch.name} - Phone: {branch.phone}
          </li>
        ))}
      </ul> */}
<h4>BRANCH NAME & PHONE</h4>
    <ul className="nav d-block">
        {filteredBranches.map(branch => (
          <Branch key={branch.id} branch={branch} /> // Use the Branch component
        ))}
      </ul>
    </div>
  );
};

export default Branches;