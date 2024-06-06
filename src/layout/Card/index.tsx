import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IconType } from 'react-icons'
import { Center } from '../../styles/layout'

interface CardProps {
   icon?: React.ReactNode;
   goTo?: string
   cardTitle?: string
   cardText?: string
   onClick?: () => void
}


export const Card = ({ onClick, icon, cardTitle, cardText }: CardProps) => {

   const IconComponente = () => {
      return (
         <span className='text-center' style={{ fontSize: '30px', color: '#24538B' }}>
            {icon}
         </span>
      );
   }

   const navigate = useNavigate();
   return (
      <Center>
         <div className="card" style={{ width: '18rem' }}>
            <IconComponente />
            <div className="card-body">
               <h5 className="card-title">{cardTitle}</h5>
               <p className="card-text">{cardText}</p>
            </div>
         </div>
      </Center>
   )
}
