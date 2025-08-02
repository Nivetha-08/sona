import { useEffect } from 'react'
import  {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import './Test.css'

const Facts = () => {

    useEffect(()=>{

      gsap.registerPlugin(ScrollTrigger)

      gsap.to("#stu", {
        innerText: '10100k',
        duration: 2,
        snap: { innerText: 1 }, 
        ease: "power1.out",
        scrollTrigger : {
            trigger : '#showcase',
            start: 'top 75%',
        }
      });

      gsap.to("#phd", {
        innerText: 500,
        duration: 2,
        snap: { innerText: 1 }, 
        ease: "power1.out",
        scrollTrigger : {
            trigger : '#showcase',
            start: 'top 75%',
        }
      });

      gsap.to("#management", {
        innerText: 100,
        duration: 2,
        snap: { innerText: 1 }, 
        ease: "power1.out",
        scrollTrigger : {
            trigger : '#showcase',
            start: 'top 75%',
        }
      });

      gsap.to("#awards", {
        innerText: 250,
        duration: 2,
        snap: { innerText: 1 }, 
        ease: "power1.out",
        scrollTrigger : {
            trigger : '#showcase',
            start: 'top 75%',
        }
      });
    }, [])

  return (
    <div>
        <div className='showcase row' id='showcase' style={{ background: '#1c3556' }}>
          <div className="col-3 text-center">
            <img src="https://www.sonamedicalcollege.ac.in/wp-content/uploads/2020/06/icon-trust.png" alt="" className='img-fluid mt-5' />
            <div className='my-4 h1 text-white' id='stu'>ref1</div>
            <div className='mb-5 h6 text-white'>STUDENTS</div>
          </div>
          <div className="col-3 text-center">
            <img src="https://www.sonamedicalcollege.ac.in/wp-content/uploads/2020/06/icon-experts.png" alt="" className='img-fluid mt-5' />
            <div className='my-4 h1 text-white' id='phd'>ref1</div>
            <div className='mb-5 h6 text-white'>PHD</div>
          </div>
          <div className="col-3 text-center">
            <img src="https://www.sonamedicalcollege.ac.in/wp-content/uploads/2020/06/icon-experience.png" alt="" className='img-fluid mt-5' />
            <div className='my-4 h1 text-white' id='management'>ref1</div>
            <div className='mb-5 h6 text-white'>TOP LEVEL MANAGEMENT EXP</div>
          </div>
          <div className="col-3 text-center">
            <img src="https://www.sonamedicalcollege.ac.in/wp-content/uploads/2020/06/client.png" alt="" className='img-fluid mt-5' />
            <div className='my-4 h1 text-white' id='awards'>ref1</div>
            <div className='mb-5 h6 text-white'>AWARDS</div>
          </div>
        </div>
    </div>
  )
}

export default Facts