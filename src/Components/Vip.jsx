import React from 'react'

const Vip = () => {

    const arr = [
        {id:1, src:"https://www.sonamedicalcollege.ac.in/wp-content/uploads/2025/06/0X9A1876-768x512.jpg", title:"Harit Yoga Celebration at Yercaud: A Milestone in Sustainable Wellness Pioneering Green Yoga Initiative Marks International Yoga Day 2025", sub:"June 10, 2025", read:"Read More >>"},
        {id:1, src:"https://www.sonamedicalcollege.ac.in/wp-content/uploads/2025/03/medical-camp-6-768x576.jpeg", title:"Medical Camp at Government Girls School, Sarkarkollapatti", sub:"March 3, 2025", read:"Read More >>"},
        {id:1, src:"https://www.sonamedicalcollege.ac.in/wp-content/uploads/2025/03/medical-camp-4-768x576.jpeg", title:"Medical Camp at Government Girls School, Vellalapatti", sub:"March 3, 2025", read:"Read More >>"}
    ]
  return (
    <>
        <div className="container">

            <div className="row">

                <div className="col-md-4">
                    <h3 className='text-primary'>VIP Message</h3>
                    <div className='text-center'>
                        <img src="https://www.sonamedicalcollege.ac.in/wp-content/uploads/2024/02/ayush-vaidhya.jpg" style={{height:"200px", width:"250px"}} className='img-fluid ' alt="vip" />
                    </div>
                    <div className='my-3'>
                        <p className='fw-bolder text-center'>"I wake up 3.30 am for Yoga, embraced vegan lifestyle; PM Modi suggested AYUSH 'Vaidya' during Covid": CJI Chandrachud</p>
                        <p className='text-center'>"I practice Yoga. I woke up at 3:30 this morning to do . Additionally, I have been following a vegan diet for the last 5 months. I am trying to focus on a holistic pattern of life, which begins with what you eat, of course, and what you put into your system," Chief Justice Chandrachud told ANI while sharing insights into his wellness practices.</p>
                        <div className='text-center'>
                            <button className='btn btn-info text-light'>READ MORE</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4" style={{background:"#cce5ff"}}>
                    <h3 className='text-primary'>News and Events</h3>
                    {arr.map((v,i)=>(
                        <React.Fragment key={i}>
                            <div className='d-flex'>
                                <div><img src={v.src} alt="map imgs" style={{height:"70px", width:"90px"}}/></div>
                                <div>
                                    <a href='#' className='text-success' style={{textDecoration:"none"}}>{v.title}</a>
                                    <small className='text-muted ms-md-3'>{v.sub}</small><br />
                                    <a href='#' className='text-success ms-md-3 text-success' style={{textDecoration:"none"}}>{v.read}</a>
                                </div>
                            </div>
                            <div className='py-4'></div>
                        </React.Fragment>
                    ))}
                </div>

                <div className="col-md-4">
                    <div className="row">
                        <div className="col">
                            <h3 className='text-primary py-2'>Power on Me</h3>
                            <iframe 
                                width="400" 
                                height="200" 
                                src="https://www.youtube.com/embed/_Q6cMdVMby0" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                        </div>
                        <div className="col">
                            <h3 className='text-primary py-2'>Student's Yoga Dance</h3>
                            <iframe 
                                width="400" 
                                height="200" 
                                src="https://www.youtube.com/embed/_Q6cMdVMby0" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Vip