import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-info text-light">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon text-light"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><a className="nav-link active text-light fw-bolder" aria-current="page" href="#">Home</a></li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-light fw-bolder" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">About Us</a>
                        <ul className="dropdown-menu bg-info">
                            <li><a className="dropdown-item text-light fw-bolder" href="#">Vision and Mission</a></li>
                            <li><a className="dropdown-item text-light fw-bolder" href="#">Management</a></li>
                            <li><a className="dropdown-item text-light fw-bolder" href="#">Chaitman's Books</a></li>
                            <li><a className="dropdown-item text-light fw-bolder" href="#">Governing and Advisory body</a></li>
                            <li><a className="dropdown-item text-light fw-bolder" href="#">Founder Message</a></li>
                        </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-light fw-bolder" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Academic</a>
                        <ul className="dropdown-menu dropdown-menu bg-info">
                            <li><a className="dropdown-item text-light fw-bolder" href="#">BNYS Curriculum & Syllabus</a></li>
                            <li><a className="dropdown-item text-light fw-bolder" href="#">Faculty</a></li>
                        </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-light fw-bolder" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Factilities</a>
                        <ul className="dropdown-menu dropdown-menu bg-info">
                            <li><a className="dropdown-item text-light fw-bolder" href="#">Campus</a></li>
                            <li><a className="dropdown-item text-light fw-bolder" href="#">Laboratories</a></li>
                            <li><a className="dropdown-item text-light fw-bolder" href="#">Digital Learning</a></li>
                            <li><a className="dropdown-item text-light fw-bolder" href="#">Foreign Language</a></li>
                            <li><a className="dropdown-item text-light fw-bolder" href="#">Students Club</a></li>
                            <li><a className="dropdown-item text-light fw-bolder" href="#">Yoga Hall</a></li>
                            <li><a className="dropdown-item text-light fw-bolder" href="#">Hostel</a></li>
                            <li><a className="dropdown-item text-light fw-bolder" href="#">Transportation</a></li>
                            <li><a className="dropdown-item text-light fw-bolder" href="#">Sports</a></li>
                            <li><a className="dropdown-item text-light fw-bolder" href="#">Dining Hall</a></li>
                            <li><a className="dropdown-item text-light fw-bolder" href="#">Skills Development</a></li>
                            <li><a className="dropdown-item text-light fw-bolder" href="#">Gamification - Quiz</a></li>
                            <li><a className="dropdown-item text-light fw-bolder" href="#">Earn While You Learn</a></li>
                        </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-light fw-bolder" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Admission</a>
                        <ul className="dropdown-menu dropdown-menu bg-info">
                            <li><a className="dropdown-item text-light fw-bolder" href="#">Eligibility</a></li>
                            <li><a className="dropdown-item text-light fw-bolder" href="#">Online Application</a></li>
                            <li><a className="dropdown-item text-light fw-bolder" href="#">Fee Rules & Payment</a></li>
                            <li><a className="dropdown-item text-light fw-bolder" href="#">FAQ</a></li>
                            <li><a className="dropdown-item text-light fw-bolder" href="#">Scholarships</a></li>
                        </ul>
                </li>
                <li className="nav-item"><a className="nav-link text-light fw-bolder" href='#'>Scope of Career</a></li>
                <li className="nav-item"><a className="nav-link text-light fw-bolder" href='#'>Yoga</a></li>
                <li className="nav-item"><a className="nav-link text-light fw-bolder" href='#'>Research</a></li>
                <li className="nav-item"><a className="nav-link text-light fw-bolder" href='#'>Resort</a></li>
                <li className="nav-item"><a className="nav-link text-light fw-bolder" href='#'>City Clinic</a></li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-light fw-bolder" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Products</a>
                        <ul className="dropdown-menu dropdown-menu bg-info">
                            <li><a className="dropdown-item text-light fw-bolder" href="#">Svsita - Inhalant Powder</a></li>
                            <li><a className="dropdown-item text-light fw-bolder" href="#">Moring Leaf Powder</a></li>
                            <li><a className="dropdown-item text-light fw-bolder" href="#">Black Pepper</a></li>
                            <li><a className="dropdown-item text-light fw-bolder" href="#">Pure Honey</a></li>
                        </ul>
                </li>
                <li className="nav-item"><a className="nav-link text-light fw-bolder" href='#'>Contact Us</a></li>
            </ul>
            </div>
        </div>
        </nav>
    </>
  )
}

export default Navbar