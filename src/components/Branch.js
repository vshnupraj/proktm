// src/components/Branch.js
// import React from 'react';

// const Branch = ({ branch }) => {
//   return (
//     <li>
//       {branch.name} - Phone: {branch.phone}
//     </li>
//   );
// };

// export default Branch;

import React from 'react';

const Branch = ({ branch }) => {
  return (
    <li>
        <div className='container'>
        <div className='row rounded-3 branch  mb-3 shadow-lg  bg-body-info'>
            <div className='col-4 '>
                {branch.name} 
            </div> 
        <div className='col-8 '>
             {branch.phone}</div>
        </div>
        </div>
    </li>
  );
};

export default Branch;