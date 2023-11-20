import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../context'

const ProductDetail = () => {

  const context = useContext(ShoppingCartContext)

  return (
    <aside
      className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-lg'>Detail</h2>
        <button>
          <img
            className='w-5'
            src="./x-mark.svg"
            alt="x"
            onClick={() => context.closeProductDetail()} />
        </button>
      </div>
      <div className='flex p-5 items-center'>
        <img
          className='w-2/6 rounded-lg'
          src={context.productToShow.images}
          alt={context.productToShow.title} />

        <p className='align-text-bottom ml-5'>
          <span className='font-medium'>${context.productToShow.price}</span><br />
          <span className='text-sm'>{context.productToShow.title}</span><br />
        </p>
      </div>

    </aside>
  )
}

export default ProductDetail