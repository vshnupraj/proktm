import React from 'react';
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
  //     <nav className='navbar'>
  //       <ul>
  //         <li><Link to="/">Home</Link></li>
  //         <li><Link to="/branches">Branches</Link></li>
  //       </ul>
  //     </nav>
  //   );
  // };
  
  <nav className="navbar navbar-expand-lg  rounded-5  nav-box sticky-top">
  <div className="container-fluid rounded-5 nav-box nav-bg">
    {/* <Link className="navbar-brand" to="/">Professional Couriers</Link> */}

    <Link className="navbar-brand" to="/">
          <img 
            src="../images/logo3.png" 
            className='img-fluid w-100'
            alt="Logo" 
            // style={{ width: '250px', height: '100px', marginRight: '10px' }} 
          />  
    </Link>
    
    

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
      <ul className="navbar-nav   ">
        <li className="nav-item mx-2 border  rounded-5  box  ">
          <Link className="nav-link text-white link-warning active px-5 " to="/">Home</Link>
        </li>
        <li className="nav-item mx-3 rounded-5   box ">
          <Link className="nav-link text-white link-warning px-5" to="/branches">Branches</Link>
        </li>
      </ul>
    </div>

  </div>
</nav>
);
};
  export default Navbar;
