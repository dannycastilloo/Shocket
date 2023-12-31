import { lazy, Suspense } from 'react'

import Layout from '../../components/Layout'
import ProductDetail from '../../components/ProductDetail'

const ItemList = lazy(() => import('../../components/ItemList'))

function Home() {
  return (
    <Layout>
      <h1 className='py-8 text-lg'>Nuestros Productos</h1>
      <Suspense fallback={<div><h1>Cargando...</h1></div>}>
        <ItemList />
      </Suspense>
      <ProductDetail />
    </Layout>
  )
}

export default Home