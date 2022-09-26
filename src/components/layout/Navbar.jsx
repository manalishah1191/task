import {NavLink} from "react-router-dom"
import img1 from "../assets/images/img1.jpg"

export const Navbar =()=>{
  return(
    <>
    <div>
      <div className="container-fluid bg-dark">
        <div className="row">
          <div className="col ms-4">
          <img src={img1} height="50px" width="150px"></img>
          </div>
          <div className="col mt-2">
            <input type="text"/>
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark">
  
  <div className="row">
    <div className="col-12 ms-4">
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
      <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle pe-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><b>
                  Price & Access</b>
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item bg-info" href="/customerList"><b>Single Accounts</b></a></li>
                  <li><a className="dropdown-item bg-info" href="/supplierList"><b>Carporate Solutions</b></a></li>
                  <li><a className="dropdown-item bg-info" href="/warehouseList"><b>Academia & Government</b></a></li>
                </ul>
              </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/customer'}>Statistics</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/warehouse'}>Reports</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/supplier'}>Outlooks</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/product'}>Company DB</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/invoice'}>Infographics</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/purchaseOrder'}>Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/roles'}>Global Survey</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/promoCodes'}>Promo Codes</NavLink>
        </li> 
        <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle pe-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><b>
                  List</b>
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item bg-info" href="/customerList"><b>Customer</b></a></li>
                  <li><a className="dropdown-item bg-info" href="/supplierList"><b>Supplier</b></a></li>
                  <li><a className="dropdown-item bg-info" href="/warehouseList"><b>Warehouse</b></a></li>
                  <li><a className="dropdown-item bg-info" href="/promoCodesList"><b>Promocodes</b></a></li>
                  <li><a className="dropdown-item bg-info" href="/productList"><b>Products</b></a></li>
                  <li><a className="dropdown-item bg-info" href="/rolelist"><b>Role</b></a></li>
                </ul>
              </li>
              <i class="fa-solid fa-envelope"></i>
        </ul>
    </div>
  </div>
  </div>
  
</nav>
</div>
</div>
</>

  )
}