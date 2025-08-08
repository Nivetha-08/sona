import React from 'react'
import './SectionNavigator.css'

const SectionNavigator = ({fn, act}) => {

  return (
    <>
        <div className="container-md container-fluid mt-3 p-3 bg-white-50 rounded" id='secNav'  >
            <div className='d-flex flex-column flex-lg-row justify-content-lg-evenly gap-1'>
                <button style={{ backgroundColor : act==='achieve' ? '#f6faff' : 'inherit' }} onClick={()=> fn('achieve')}>Achievements</button>
                <button style={{ backgroundColor : act==='highlights' ? '#f6faff' : 'inherit' }} onClick={()=> fn('highlights')}>Highlights</button>
                <button style={{ backgroundColor : act==='vip' ? '#f6faff' : 'inherit' }} onClick={()=> fn('vip')}>Vip Messages</button>
                <button style={{ backgroundColor : act==='news' ? '#f6faff' : 'inherit' }} onClick={()=> fn('news')}>News and Events</button>
                <button style={{ backgroundColor : act==='sona' ? '#f6faff' : 'inherit' }} onClick={()=> fn('sona')}>Why Sona</button>
            </div>
        </div>
    </>
  )
}

export default React.memo(SectionNavigator)