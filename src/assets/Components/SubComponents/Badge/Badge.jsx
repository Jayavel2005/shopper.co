import React from 'react'

const Badge = ({badgeContent}) => {
    return (
        <div className='bg-[#ECE3FF] inline-block p-1 rounded-full px-5 border border-[#C2A6FF] text-sm'>
            {badgeContent}
        </div>
    )
}

export default Badge
