import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import { v4 as uuidv4 } from 'uuid';
import { totalPrice } from '../../utils'
import './styles.css'


const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id !== id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const currentOrder = {
            date: '01.02.23',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }
        context.setOrder([...context.order, currentOrder])
        context.setCartProducts([])
    }

    return (
        <aside
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded bg-white `}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div
                    className='cursor-pointer hover:bg-slate-300 rounded'
                    onClick={() => context.closeCheckoutSideMenu()}>
                    <XMarkIcon className='h-6 w-6 text-black'></XMarkIcon>
                </div>
            </div>
            <div className='px-6 overflow-auto flex-1'>
                {
                    context.cartProducts.map(product =>
                        <OrderCard
                            key={uuidv4()}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images[0]}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    )
                }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total: </span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <button className='bg-black py-3 text-white w-full rounded-lg' onClick={() => handleCheckout()}>Checkout</button>
            </div>

        </aside>
    )
}

export { CheckoutSideMenu }  