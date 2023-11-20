import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {

    // Shopping Cart - Increment quantity
    const [count, setCount] = useState(0)

    // Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Product Detail - Show product
    const [productToShow, setProductToShow] = useState({})

    // Shopping Cart: Add products
    const [cartProducts, setCartProducts] = useState([])

    // Product Detail - CheckoutSideMenu
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
    const openCheckout = () => setIsCheckoutOpen(true)
    const closeCheckout = () => setIsCheckoutOpen(false)

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutOpen,
            openCheckout,
            closeCheckout
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}