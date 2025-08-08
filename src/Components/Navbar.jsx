import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-xl text-light">
        <div className="container-fluid">
            <div className="navbar-logo">
                <img src="/assets/sona.webp" className='img-fluid me-3' height={20} width={50} alt="" srcSet="" />
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon text-light"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><a className="nav-link active text-light" aria-current="page" href="#">Home</a></li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">About Us</a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item text-light" href="#">Vision and Mission</a></li>
                            <li><a className="dropdown-item text-light" href="#">Management</a></li>
                            <li><a className="dropdown-item text-light" href="#">Chaitman's Books</a></li>
                            <li><a className="dropdown-item text-light" href="#">Governing and Advisory body</a></li>
                            <li><a className="dropdown-item text-light" href="#">Founder Message</a></li>
                        </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Academic</a>
                        <ul className="dropdown-menu dropdown-menu">
                            <li><a className="dropdown-item text-light" href="#">BNYS Curriculum & Syllabus</a></li>
                            <li><a className="dropdown-item text-light" href="#">Faculty</a></li>
                        </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Factilities</a>
                        <ul className="dropdown-menu dropdown-menu">
                            <li><a className="dropdown-item text-light" href="#">Campus</a></li>
                            <li><a className="dropdown-item text-light" href="#">Laboratories</a></li>
                            <li><a className="dropdown-item text-light" href="#">Digital Learning</a></li>
                            <li><a className="dropdown-item text-light" href="#">Foreign Language</a></li>
                            <li><a className="dropdown-item text-light" href="#">Students Club</a></li>
                            <li><a className="dropdown-item text-light" href="#">Yoga Hall</a></li>
                            <li><a className="dropdown-item text-light" href="#">Hostel</a></li>
                            <li><a className="dropdown-item text-light" href="#">Transportation</a></li>
                            <li><a className="dropdown-item text-light" href="#">Sports</a></li>
                            <li><a className="dropdown-item text-light" href="#">Dining Hall</a></li>
                            <li><a className="dropdown-item text-light" href="#">Skills Development</a></li>
                            <li><a className="dropdown-item text-light" href="#">Gamification - Quiz</a></li>
                            <li><a className="dropdown-item text-light" href="#">Earn While You Learn</a></li>
                        </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Admission</a>
                        <ul className="dropdown-menu dropdown-menu">
                            <li><a className="dropdown-item text-light" href="#">Eligibility</a></li>
                            <li><a className="dropdown-item text-light" href="#">Online Application</a></li>
                            <li><a className="dropdown-item text-light" href="#">Fee Rules & Payment</a></li>
                            <li><a className="dropdown-item text-light" href="#">FAQ</a></li>
                            <li><a className="dropdown-item text-light" href="#">Scholarships</a></li>
                        </ul>
                </li>
                <li className="nav-item"><a className="nav-link text-light" href='#'>Scope of Career</a></li>
                <li className="nav-item"><a className="nav-link text-light" href='#'>Yoga</a></li>
                <li className="nav-item"><a className="nav-link text-light" href='#'>Research</a></li>
                <li className="nav-item"><a className="nav-link text-light" href='#'>Resort</a></li>
                <li className="nav-item"><a className="nav-link text-light" href='#'>City Clinic</a></li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Products</a>
                        <ul className="dropdown-menu dropdown-menu">
                            <li><a className="dropdown-item text-light" href="#">Svsita - Inhalant Powder</a></li>
                            <li><a className="dropdown-item text-light" href="#">Moring Leaf Powder</a></li>
                            <li><a className="dropdown-item text-light" href="#">Black Pepper</a></li>
                            <li><a className="dropdown-item text-light" href="#">Pure Honey</a></li>
                        </ul>
                </li>
                <li className="nav-item"><a className="nav-link text-light" href='#'>Contact Us</a></li>
            </ul>
            </div>
        </div>
        </nav>
    </>
  )
}

export default Navbar