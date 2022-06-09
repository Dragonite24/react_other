import React from 'react'
import { Link } from 'react-router-dom'

export type ButtonProps = {
  className?: string
  to?: string
  href?: string
  onPress?: (ev: React.MouseEvent) => void
}

export const Button: React.FC<ButtonProps> = ({ className, to, href, onPress, children }) => {
  if (to)
    return (
      <Link className={className} to={to} onMouseDown={(ev) => ev.preventDefault()}>
        {children}
      </Link>
    )
  else if (href)
    return (
      <a className={className} href={href} onMouseDown={(ev) => ev.preventDefault()}>
        {children}
      </a>
    )
  else
    return (
      <button className={className} onClick={onPress} onMouseDown={(ev) => ev.preventDefault()}>
        {children}
      </button>
    )
}
