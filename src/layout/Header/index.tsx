import styled from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'

interface HeaderProps {
   title?: string
   actionArrowClick?: unknown
}

const Flex = styled.div`
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
`

const ArrowStyle: React.CSSProperties = {
   paddingBottom: '0.5rem',
   left: '2rem',
   position: 'absolute',
   fontSize: '2.8rem',
   cursor: 'pointer',
   color: '#5F8DD3'
}

export const Header = ({ title, actionArrowClick }: HeaderProps) => (
   <Flex>
      {(() => {
         if (typeof actionArrowClick === 'string') {
            return (
               <Link to={actionArrowClick} style={ArrowStyle}>
                  {/* <FontAwesomeIcon icon="angle-left" /> */}
               </Link>
            )
         } else if (typeof actionArrowClick === 'function') {
            return (
               <a
                  onClick={actionArrowClick as () => void}
                  style={ArrowStyle}
               >
                  {/* <FontAwesomeIcon icon="angle-left" /> */}
               </a>
            )
         }
      })()}

      <h1>{title}</h1>
   </Flex>
)
