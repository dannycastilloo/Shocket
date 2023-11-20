import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../context'
import OrderCard from '../../components/OrderCard'

const CheckoutSideMenu = () => {

  const context = useContext(ShoppingCartContext)

  return (
    <aside
      className={`${context.isCheckoutOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg'>Detail</h2>
        <button>
          <img
            className='w-5'
            src="./x-mark.svg"
            alt="x"
            onClick={() => context.closeCheckout()} />
        </button>
      </div>
      <div className='px-6'>
        {
          context.cartProducts.map(product => (
            <OrderCard
              key={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price} />
          ))
        }
      </div>
    </aside>
  )
}

export default CheckoutSideMenu