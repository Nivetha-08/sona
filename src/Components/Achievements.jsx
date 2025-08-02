// import React from 'react'

// const Achievements = () => {

//     const arr = [
//         {id:1, src:"https://www.sonamedicalcollege.ac.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-08-at-10.15.56-150x150.jpeg", title:"Students of Sona Medical College of Naturopathy and Yoga participated in the CM Hockey Trophy for girls", sub:"February 27, 2023", read: "Read More >>"},
//         {id:2, src:"https://www.sonamedicalcollege.ac.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-05-at-12.52.37-150x150.jpeg", title:"Kudos to K. Aarthi: A Stellar Performance in Finswimming", sub:"July 5, 2024", read: "Read More >>"},
//         {id:3, src:"https://www.sonamedicalcollege.ac.in/wp-content/uploads/2023/07/sona-bnys-hockey-2023-150x150.webp", title:"Our Hockey team won bronze medal at the state level CM trophy", sub: "July 20, 2023", read: "Read More >>"},
//         {id:4, title:"Medical Students won Gold and Bronze medals in the District Level Silambam Match", src:"https://www.sonamedicalcollege.ac.in/wp-content/uploads/2023/07/silambam-medical-students-150x150.webp", sub:"July 8, 2023", read: "Read More >>"}
//     ]
//   return (
//     <>
//         <h4 style={{ backgroundColor: '#E6D3B3'}} className='text-primary py-2 my-1'>Student Achievements</h4>
//         <div className="container">
//             <div className="row">
//               {arr.map((v,i)=>(
//                 <React.Fragment key={i}>
//                   <div className="col-md-3 ">
//                       <div>
//                         <img src={v.src} alt="img1" />
//                       <div>
//                         <p>{v.title}</p>
//                         <small>{v.sub}</small>
//                         <small>{v.read}</small>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-3"></div>
//                   <div className="col-md-3"></div>
//                   <div className="col-md-3"></div>
//                 </React.Fragment>
//               ))}
//             </div>
//         </div>
//     </>
//   )
// }

// export default Achievements


import React from 'react';

const Achievements = () => {
  const arr = [
    {
      id: 1,
      src: "https://www.sonamedicalcollege.ac.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-08-at-10.15.56-150x150.jpeg",
      title: "Students of Sona Medical College of Naturopathy and Yoga participated in the CM Hockey Trophy for girls",
      sub: "February 27, 2023",
      read: "Read More >>",
    },
    {
      id: 2,
      src: "https://www.sonamedicalcollege.ac.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-05-at-12.52.37-150x150.jpeg",
      title: "Kudos to K. Aarthi: A Stellar Performance in Finswimming",
      sub: "July 5, 2024",
      read: "Read More >>",
    },
    {
      id: 3,
      src: "https://www.sonamedicalcollege.ac.in/wp-content/uploads/2023/07/sona-bnys-hockey-2023-150x150.webp",
      title: "Our Hockey team won bronze medal at the state level CM trophy",
      sub: "July 20, 2023",
      read: "Read More >>",
    },
    {
      id: 4,
      src: "https://www.sonamedicalcollege.ac.in/wp-content/uploads/2023/07/silambam-medical-students-150x150.webp",
      title: "Medical Students won Gold and Bronze medals in the District Level Silambam Match",
      sub: "July 8, 2023",
      read: "Read More >>",
    },
  ];

  return (
    <>
      <h4 style={{ backgroundColor: '#E6D3B3' }} className='text-primary py-2 my-3 text-center'>
        Student Achievements
      </h4>

      <div className="container">
        <div className="row">
          {arr.map((v, i) => (
            <div className="col-md-3 mb-4" key={i}>
              <div className="card h-100">
                <img
                  src={v.src}
                  alt="Achievement"
                  className="card-img-top"
                  style={{ height: '150px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <p className="card-text" style={{ fontWeight: '500' }}>{v.title}</p>
                  <small className="text-muted d-block">{v.sub}</small>
                  <small className="text-primary" style={{ cursor: 'pointer' }}>{v.read}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Achievements;
