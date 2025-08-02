import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { SiInstagram } from "react-icons/si";
import { FaDribbble } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { TbBrandLinkedin } from "react-icons/tb";
import "./footer.css"
import { MdOutlineCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <>
        <div className="row pt-4" style={{background:"#FFFFE0"}}>
            <div className="col-md-3 ps-2">
                <h5>About Us</h5>
                <p>The one and only Medical College situated in forest based natural environment in Tamilnadu which is supported by Ayush hospital.</p>
                <div className='icon-container'>
                    <span className='icon' style={{background:"#1877F2"}}><CiFacebook /></span>
                    <span className='icon' style={{background:"#E1306C"}}><SiInstagram /></span>
                    <span className='icon' style={{background:"#EA4C89"}}><FaDribbble /></span>
                    <span className='icon' style={{background:"#FF0000"}}><CiYoutube /></span>
                    <span className='icon' style={{background:"#0077B5"}}><TbBrandLinkedin /></span>
                </div>
            </div>
            <div className="col-md-2">
                <h5>BYNS Course</h5>
                <ul style={{textDecoration:"none"}}>
                    <li><a href="#" style={{textDecoration:"none", color:"black"}}>Curriculum & Syllabus</a></li>
                    <li><a href="#" style={{textDecoration:"none", color:"black"}}>Scope of career</a></li>
                </ul>
            </div>
            <div className="col-md-2">
                <h5>Other Links</h5>
                <ul style={{textDecoration:"none"}}>
                    <li><a href="#" style={{textDecoration:"none", color:"black"}}>Calendar</a></li>
                    <li><a href="#" style={{textDecoration:"none", color:"black"}}>City Clinic</a></li>
                    <li><a href="#" style={{textDecoration:"none", color:"black"}}>Doctors</a></li>
                    <li><a href="#" style={{textDecoration:"none", color:"black"}}>FAQ</a></li>
                    <li><a href="#" style={{textDecoration:"none", color:"black"}}>Press Release</a></li>
                    <li><a href="#" style={{textDecoration:"none", color:"black"}}>Sona Institutions</a></li>
                </ul>
            </div>
            <div className="col-md-2">
                <h5>Address</h5>
                <h5>COLLEGE & HOSPITAL :</h5>
                <p>
                    Sona Valliappa Campus,<br />
                    Kandarkulamanickam (KKM),<br />
                    Kakapalayam to Attayampatti Main Road,<br />
                    Salem – 637504.
                </p>
            </div>

            <div className="col-md-3">
                <h5>CITY CLINIC :</h5>
                <p>
                    Sona College of Technology Campus,<br />
                    Salem – 636005.
                </p>
            </div>
        </div>

        <div className='text-center py-3' style={{background:"#FFFACD"}}>
            <span><MdOutlineCopyright /></span><span>2024 Sona Medical College of Naturopathy and Yoga . All rights reserved.</span>
        </div>
    </>
  )
}

export default Footer