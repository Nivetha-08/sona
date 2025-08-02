import React from 'react'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

const Facts = () => {

  useEffect(()=>{

    gsap.registerPlugin(ScrollTrigger)

    gsap.to("#counter", {
      innerText : 101000,
      duration : 2,
      snap:{innerText:1},
      ease: "power1.out",
      ScrollTrigger : {
        trigger : "#counter",
        start: "top center",
        markers: true
      }
    });

    gsap.to("#counter", {
      innerText : 500,
      duration : 2,
      snap:{innerText:1},
      ease: "power1.out",
      ScrollTrigger : {
        trigger : "#counter",
        start: "top center",
        markers: true
      }
    });

    gsap.to("#counter", {
      innerText : 100,
      duration : 2,
      snap:{innerText:1},
      ease: "power1.out",
      ScrollTrigger : {
        trigger : "#counter",
        start: "top center",
        markers: true
      }
    });

    gsap.to("#counter", {
      innerText : 250,
      duration : 2,
      snap:{innerText:1},
      ease: "power1.out",
      ScrollTrigger : {
        trigger : "#counter",
        start: "top center",
        markers: true
      }
    });
  })

  return (
    <>
        <h2 className='text-center text-success'>Important Facts - Sona Institutions</h2>

    </>
  )
}

export default Facts