import React from 'react'
import HeroMember from '../components/HeroMember'
import AboutMember from '../components/AboutMember'
import Feature from '../components/Feature'
import Informations from '../components/Informations'


const MemberPage = () => {
  return (
    <div>
       <div className="mb-6">
       <HeroMember />
       </div>
        <hr className="my-8 border-gray-300" />
        <div className="mb-6">
        <AboutMember />
       </div>
       <hr className="my-8 border-gray-300" />
       <Feature />
       <hr className="my-8 border-gray-300" />
       <div className="flex">
       <Informations />
       </div>
        
    </div>
  )
}

export default MemberPage