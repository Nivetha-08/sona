import React from 'react'

const Institutions = () => {

  const arr = [
    { id: 1, src: "https://www.sonamedicalcollege.ac.in/wp-content/uploads/2020/08/tpt-1.jpg", content: "Thiagarajar Polytechnic College -1958, Founder - (late) Sri.Karumuttu Thiagarajar" },
    { id: 2, src: "https://www.sonamedicalcollege.ac.in/wp-content/uploads/2020/08/sona-tech.jpg", content: "Sona College of Technology - 1997, Founder - (late) Sri.M.S.Chockalingam" },
    { id: 3, src: "https://www.sonamedicalcollege.ac.in/wp-content/uploads/2020/08/mba.jpg", content: "Sona School of Management - 1998, Founder - (late) Sri.M.S.Chockalingam" },
    { id: 4, src: "https://www.sonamedicalcollege.ac.in/wp-content/uploads/2020/08/arts.jpg", content: "Sona College of Arts and Science - 2017, Founder- Mr.C.Valliappa" },
    { id: 5, src: "https://www.sonamedicalcollege.ac.in/wp-content/uploads/2022/09/Sona-Valliappa-Public-Schoo.jpg", content: "Sona Valliappa Public School - 2020, Founder - Mr.C.Valliappa" },
  ]

  return (
    <div className="container">
      <h2 className="text-success text-center py-3">Sona Institutions</h2>
      <div className="row justify-content-center text-center">
        {arr.map((v, i) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4" key={i}>
            <img src={v.src} alt="institution" className="img-fluid rounded mb-2" />
            <p className="small">{v.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Institutions
