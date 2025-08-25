import React from 'react'
import { FaOpencart, FaStar } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux'
import { removeWislistItem } from '../redux/slices/wishlistSlice';
import { addToCartItem } from '../redux/slices/cartSlice';


function Wishlist() {
  const wishlistArray = useSelector((state) => state.wishlist)
  console.log(wishlistArray);

  const dispatch = useDispatch()

  const handleWishlist = (item) => {
    dispatch(addToCartItem(item))
    dispatch(removeWislistItem(item?.id))
  }

  return (
    <>
      <h1 className="text-start  text-2xl font-bold mb-8 text-violet-900 ms-6">Your Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {wishlistArray?.length > 0 ? (
          wishlistArray?.map((product, id) => (
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
                  <h3 className="font-semibold text-left text-gray-900 text-sm">{product?.title.slice(0,20)}...</h3>
                  <p className="text-gray-500 text-left text-xs">{product?.description.slice(0,160)}...</p>
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
                   <button onClick={()=>dispatch(removeWislistItem(product?.id))} className="bg-red-500 hover:bg-red-600 text-white rounded-full px-2 p-1 transition">
                    <MdDelete className="text-lg" />
                  </button>
                  <button onClick={()=>handleWishlist(product)} className="bg-yellow-500 hover:bg-yellow-600 rounded-full p-1 px-2 transition">
                    <FaOpencart className="text-lg" />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-red-600">Your Wishlist is Empty</div>
        )}
      </div>

    </>
  )
}

export default Wishlist