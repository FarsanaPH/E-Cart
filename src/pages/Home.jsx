import React from 'react'
import { FaHeart, FaOpencart, FaRegHeart, FaStar } from 'react-icons/fa6'
import usefetch from '../hooks/usefetch'
import { useDispatch, useSelector } from 'react-redux'
import { addWishlistItem } from '../redux/slices/wishlistSlice'
import { addToCartItem } from '../redux/slices/cartSlice'

function Home() {
  // Custom Hook
  const data = usefetch("https://fakestoreapi.com/products")
  // console.log(data); //comes in array

  const wishlistArray = useSelector((state) => state.wishlist)
  const dispatch = useDispatch()

  return (
    <>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.length > 0 ? (
            data?.map((product, id) => (
              <div key={id} className="shadow rounded-2xl bg-white p-2">
                {/* Image */}
                <img
                  src={product?.image}
                  alt="image"
                  className="w-full h-60 object-contain"
                />

                {/* Body */}
                <div className="flex flex-col p-3">
                  {/* Title + Description */}
                  <div className="mb-1">
                    <h3 className="font-semibold text-left text-gray-900 text-sm">{product?.title.slice(0, 25)}...</h3>

                    <p className="text-gray-500 text-left text-xs">{product?.description.slice(0, 160)}...</p>

                  </div>

                  {/* Price + Rating */}
                  <div className="mt-auto mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-lg">₹{product?.price}</span>
                    </div>
                    <div className="text-left flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 bg-green-600 text-white text-[10px] font-medium px-2 py-0.5 rounded">
                        4.8 <FaStar className="text-[10px]" />
                      </span>
                      <small className="text-gray-500 text-xs">(1728 reviews)</small>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-between mt-auto">
                    <button onClick={() => dispatch(addWishlistItem(product))} className="border border-red-500 text-red-500 rounded-full p-1 px-2 transition">
                      {wishlistArray.some(item => item.id === product.id) ? (
                        <FaHeart className="text-lg text-red-500" />   // filled red
                      ) : (
                        <FaRegHeart className="text-lg text-red-500" /> // only outline
                      )}
                    </button>

                    <button onClick={() => dispatch(addToCartItem(product))} className="bg-yellow-500 hover:bg-yellow-600 rounded-full p-1 px-2 transition">
                      <FaOpencart className="text-lg" />
                    </button>

                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-red-600 flex justify-center items-center">Loading...</div>
          )}
        </div>
      </div>

    </>
  )
}

export default Home