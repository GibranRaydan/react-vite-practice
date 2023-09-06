import { XMarkIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import './styles.css'


const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)

    return (
        <aside
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail  flex-col fixed right-0 border border-black rounded bg-white `}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div
                    className='cursor-pointer hover:bg-slate-300 rounded'
                    onClick={() => context.closeProductDetail()}>
                    <XMarkIcon className='h-6 w-6 text-black'></XMarkIcon>
                </div>
            </div>
            <figure className='px-6'>
                <img
                    className='w-full h-full rounded'
                    src={context.currentProduct.images[0]}
                    alt={context.currentProduct.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl'>${context.currentProduct.price}</span>
                <span className='font-medium text-md'>${context.currentProduct.title}</span>
                <span className='font-light text-sm'>${context.currentProduct.description}</span>
            </p>
        </aside>
    )
}

export { ProductDetail }  