import React from 'react'

const SettingsNav = () => {
  return (
    <div>
    <div className='bg-white flex divide-gray-300 divide-x-[1px] w-fit rounded-lg mt-2 outline outline-1 outline-gray-300 text-gray-700 font-semibold text-sm max-w-full overflow-x-auto'>
        <div className='p-3 min-w-fit cursor-pointer hover:bg-gray-200'>My details</div>
        <div className='p-3 min-w-fit cursor-pointer hover:bg-gray-200'>Profile</div>
        <div className='p-3 min-w-fit cursor-pointer hover:bg-gray-200'>Password</div>
        <div className='p-3 min-w-fit cursor-pointer hover:bg-gray-200'>Team</div>
        <div className='p-3 min-w-fit cursor-pointer hover:bg-gray-200'>Plan</div>
        <div className='p-3 min-w-fit cursor-pointer hover:bg-gray-200'>Billing</div>
        <div className='p-3 min-w-fit cursor-pointer hover:bg-gray-200'>Notifications</div>
        <div className='p-3 min-w-fit cursor-pointer hover:bg-gray-200'>Integrations</div>
        <div className='p-3 min-w-fit cursor-pointer hover:bg-gray-200'>API</div>
    </div>
    </div>
  )
}

export default SettingsNav