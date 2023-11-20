import React from 'react'

const OrderCard = ({ title, imageUrl, price }) => {
    return (
        <div className='flex justify-between items-center mb-4'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img
                        className='w-full h-full rounded-lg object-cover'
                        src={imageUrl}
                        alt={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div>
                <p className='text-lg font-medium'>{price}</p>
                <img
                    className='w-5 h-5 cursor-pointer'
                    src="./x-mark.svg"
                    alt="x" />
            </div>
        </div>
    )
}

export default OrderCard