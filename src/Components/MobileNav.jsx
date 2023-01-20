import React from 'react'

const MobileNav = () => {
  return (
    <div className='flex md:hidden p-5 items-center'>
        <img src='/logo.svg' alt='logo'/>
        <div className='font-semibold pl-3'>Untitled UI</div>
        <img src="/ham.png" alt='hamburger' height={10} className="h-4 ml-auto" />
    </div>
  )
}

export default MobileNav