import React from 'react'
import Apple_logo from '../../Assets/images/icons/logo-sm.png'
import Search_logo from '../../Assets/images/icons/search-icon-sm.png'
import Cart_logo from '../../Assets/images/icons/cart-sm.png'

function Nav() {
    return (
        <header className="nav-container fixed-top">
            <div className="container">
            <nav className=" navbar navbar-toggleable-sm navbar-expand-md">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                ☰
                </button>
                <a className="navbar-brand mx-auto" href="#"><img src= {Apple_logo} /></a>
                <div className="navbar-collapse collapse">
                <ul className="navbar-nav nav-justified w-100">
                    <li className="nav-item"><a className="nav-link"  href="#">Mac</a></li>
                    <li className="nav-item"><a className="nav-link"  href="#">iPad</a></li>
                    <li className="nav-item"><a className="nav-link"  href="#">iPhone</a></li>
                    <li className="nav-item"><a className="nav-link"  href="#">Watch</a></li>
                    <li className="nav-item"><a className="nav-link"  href="#">TV</a></li>
                    <li className="nav-item"><a className="nav-link"  href="#">Music</a></li>
                    <li className="nav-item"><a className="nav-link"  href="#">Support</a></li>
                    <li className="nav-item" className="search">
                    <a className="nav-link" href="Search"><img src= {Search_logo}/> </a>
                    </li>
                    <li className="nav-item" className="bag">
                    <a  className="nav-link" href="#"><img src= {Cart_logo}/></a></li>
                </ul>
                </div>
            </nav>
            </div>
        </header>
    );
}

export default Nav;
