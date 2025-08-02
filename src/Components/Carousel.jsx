import React from 'react'

const Carousel = () => {
  return (
    <>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://www.sonamedicalcollege.ac.in/wp-content/uploads/2025/05/patents-sona-medical-college.webp" className="d-block w-100" alt="img-1" />
                </div>
                <div className="carousel-item">
                <img src="https://www.sonamedicalcollege.ac.in/wp-content/uploads/2022/09/Abj-Abdul-kalam-in-Sona-Gro.jpg" className="d-block w-100" alt="img-2" />
                </div>
                <div className="carousel-item">
                <img src="https://www.sonamedicalcollege.ac.in/wp-content/uploads/2025/05/Chandra-Namaskara-banner.jpg" className="d-block w-100" alt="img-3" />
                </div>
                <div className="carousel-item">
                <img src="https://www.sonamedicalcollege.ac.in/wp-content/uploads/2024/04/mgr-university-vice-chancelooe-thyagu.webp" className="d-block w-100" alt="img-4" />
                </div>
                <div className="carousel-item">
                <img src="https://www.sonamedicalcollege.ac.in/wp-content/uploads/slider2/medical-college-sona-hospital-bed.webp" className="d-block w-100" alt="img-5" />
                </div>
                <div className="carousel-item">
                <img src="https://www.sonamedicalcollege.ac.in/wp-content/uploads/2023/01/medical-college-sona.jpg" className="d-block w-100" alt="img-6" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>
  )
}

export default Carousel