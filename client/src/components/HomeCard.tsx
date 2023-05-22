import React from 'react'
interface CardProps {
  width: string,
  title: string,
  description: string,
  icon?: React.ReactNode,
  position?: string,
  role?: string,
  lessons?: string,
  students?: string,
  image?: string
}
const HomeCard: React.FC<CardProps> = ({ width, icon, description, title, position, role, students, lessons }) =>
( 
  <div className={`w-full  bg-white shadow-md rounded-lg p-6 `} style={{width:width}}>
    {/* <img src={icon}   alt= {title}   className="w-16 h-16 mx-auto mb-4" /> */}
    {icon === icon && <span className='text-[150px] '>{icon}</span>}
    <h2 className="text-xl font-bold mb-2"> {title}  </h2>
    <span>{position}</span> <p>{role}</p>
    <p>{students}</p>
    <p>{lessons}</p>
    <p className="text-gray-500"> {description}  </p>
  </div>
)


export default HomeCard