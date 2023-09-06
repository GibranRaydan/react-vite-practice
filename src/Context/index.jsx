import { useState, createContext } from 'react';
import { PropTypes } from 'prop-types'


export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {

    ShoppingCartProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }
    const [count, setCount] = useState(0)
    const [cartProducts, setCartProducts] = useState([])


    const [order, setOrder] = useState([])

    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    const [currentProduct, setCurrentProduct] = useState({
        title: "",
        price: "",
        description: "",
        images: []
    })


    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            currentProduct,
            setCurrentProduct,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}