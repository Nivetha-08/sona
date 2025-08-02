import React from 'react'

const Highlights = () => {
  return (
    <>
        <div className="container mt-3">
            <div className="row">
                <div className="col-lg-4">
                    <h3 className='text-primary text-center'>SMCNY Highlights</h3>
                    <div class="ratio ratio-16x9 mt-3">
                        <iframe 
                            width="400" 
                            height="300" 
                            src="https://www.youtube.com/embed/_Q6cMdVMby0" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
                <div className="col-lg-4 mt-md-4 mt-lg-0">
                    <h3 className='text-primary text-center'>Press Release</h3>
                    <ul>
                        <li><a href="#" className='text-success' style={{textDecoration:"none"}}>Harit Yoga Celebration at Yercaud</a> 11th June 2025 : Dinakaran</li>
                        <li><a href="#" className='text-success' style={{textDecoration:"none"}}>Harit Yoga Celebration at Yercaud</a> 11th June 2025 : Dinathanth</li>
                        <li><a href="#" className='text-success' style={{textDecoration:"none"}}>i5 Water day Celebration 2025</a> 15th April 2025 : Dinakaran</li>
                        <li><a href="#" className='text-success' style={{textDecoration:"none"}}>10th International Yoga Day Celebrations</a> 20th June 2024 : The Hindu Tamil</li>
                        <li><a href="#" className='text-success' style={{textDecoration:"none"}}>Our Students secured third place in State level hockey tournament </a>– 6th August 2023 :  Dinamalar</li>
                        <li><a href="#" className='text-success' style={{textDecoration:"none"}}>International Yoga Day  Awareness Rally</a>  22th June 2023 : Daily Thanthi</li>
                    </ul>
                </div>
                <div className="col-lg-4 text-center mt-md-2 mt-lg-0">
                    <h3 className='text-primary'>Recent News</h3>
                    <img src="https://www.bing.com/th/id/OIP.ylLiUAsR4gKMgJsG-SpXUAHaFd?w=244&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className='img-fluid' alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Highlights

// https://youtu.be/_Q6cMdVMby0?si=FnU06V2y4l8dNk2W