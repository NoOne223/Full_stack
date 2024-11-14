import Link from 'next/link'
import React from 'react'

interface LinkButtonProps {
    href: string;
    children: React.ReactNode;
    className: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({href, className, children}) => {
  return (
    <div>
      <Link className={className} href={href}>{children}</Link>
    </div>
  )
}

export default LinkButton
