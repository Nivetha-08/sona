import React from 'react'
import Brand from '../../public/assets/sona-medical-college.webp'

const Header = () => {
  return (
    <div className='my-3'>
      <div className='row align-items-center'>

        <div className='col-sm-12 col-lg-4 py-2 text-center'>
          <img src={Brand} alt="Brand Name" className='img-fluid ' />
        </div>

       
          
            <div className='col-sm-12 col-lg-4 py-2 text-center'>
              <a href="#" className='h6' style={{ textDecoration: "underline" }}>College</a> <br />
              <span>Sona Valliappa Campus</span> <br />
              <span>Kandarkulamanickam (KKM)</span> <br />
              <span>Kakkapalayam to Attayampatti Road</span> <br />
              <span>Sankari (TK), Salem - 637 504. TN. INDIA</span> <br />
              <span className='text-primary'>Affiliated to the TN. Dr.M.G.R. Medical University</span>
            </div>

            <div className='col-sm-12 col-lg-4 py-2 text-center'>
              <a href="#" className='h6'>Admission</a> <br />
              <span>Sona College of Technology</span> <br />
              <span>TPT Main Road (Junction)</span> <br />
              <span>Salem 636005. TN. INDIA</span> <br />
              <p></p>
              <a href="#" className='text-primary' style={{ textDecoration: "none" }}>
                94427 00353 | 94427 00351 | 94427 00366
              </a>
            </div>
          
      </div>
    </div>
  )
}

export default Header
