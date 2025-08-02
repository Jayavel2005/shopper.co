import React from 'react'

const RatingBadge = () => {
    return (
        <div className='bg-[#ECE3FF] inline-flex gap-1 p-0.5 rounded-full px-3 border border-[#C2A6FF] text-sm'>
            <i className="bi bi-star-fill text-[#5100ff]"></i>
            <span>4.5</span>
        </div>
    )
}

export default RatingBadge
