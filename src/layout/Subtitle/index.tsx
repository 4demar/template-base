import React from 'react'

interface Props {
   width?: string
   children?: React.ReactNode
}

type SubtitleProps = JSX.IntrinsicElements['h2'] & Props

export const Subtitle = ({
   width = '',
   children,
   ...tagProps
}: SubtitleProps) => (
   <h3 style={{ padding: '1rem 0px 0rem', color: '#73A4EE' }} {...tagProps}>
      {children}
   </h3>
)
