import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, emptyCart, increaseQuantity, removeFromCartItem } from '../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';
import { FaDeleteLeft } from 'react-icons/fa6';
import { RiDeleteBin7Fill } from 'react-icons/ri';

function Cart() {
  const cartArray = useSelector((state) => state.cartItem);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const totalProducts = cartArray?.length;
  const grandTotal = cartArray.reduce((sum, product) => sum + (product.price * product.quantity), 0);


  const handleCheckout = () => {
    alert("Order Placed Successfully");
    dispatch(emptyCart());
    navigate("/");
  };

  return (
    <>
      <h1 className="text-start text-2xl font-bold mb-8 text-violet-900 ms-6">Your Cart</h1>


      <div className="px-5 grid grid-cols-12 gap-6 items-start">


        <div className="col-span-12 lg:col-span-8 overflow-x-auto">
          {cartArray.length > 0 ? (
            <table className="table-auto w-full border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-200 p-2 bg-violet-700 text-white">S.No</th>
                  <th className="border border-gray-200 p-2 bg-violet-700 text-white">Title</th>
                  <th className="border border-gray-200 p-2 bg-violet-700 text-white">Image</th>
                  <th className="border border-gray-200 p-2 bg-violet-700 text-white">Quantity</th>
                  <th className="border border-gray-200 p-2 bg-violet-700 text-white">Price</th>
                  <th className="border border-gray-200 p-2 bg-violet-700 text-white">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartArray?.map((product, index) => (
                  <tr key={index}>
                    <td className="border border-gray-200 p-2 text-center">{index + 1}</td>
                    <td className="border border-gray-200 p-2">{product?.title}</td>
                    <td className="border border-gray-200 p-2 text-center">
                      <img
                        className="h-20 w-20 object-cover rounded"
                        src={product?.image}
                        alt="Product"
                      />
                    </td>
                    <td className="border border-gray-200 p-2 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => dispatch(decreaseQuantity(product?.id))}
                          disabled={product.quantity === 1} 
                          className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                        >
                          -
                        </button>
                        <span>{product.quantity}</span>
                        <button
                          onClick={() => dispatch(increaseQuantity(product?.id))}
                          className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="border border-gray-200 p-2 text-center">₹ {product?.price}</td>
                    <td className="border border-gray-200 p-2 text-center">
                      <button
                        onClick={() => dispatch(removeFromCartItem(product?.id))}
                        className="px-3 py-2 bg-red-700 text-white rounded hover:bg-red-800"
                      >
                        <RiDeleteBin7Fill />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className=" text-red-600">Your Cart is Empty</p>
          )}
        </div>


        {cartArray.length > 0 && (
          <div className="col-span-12 lg:col-span-4 flex justify-center mb-5">
            <div className="p-5 shadow-lg rounded-lg border w-full lg:w-80 h-fit">
              <h2 className="text-2xl text-center font-semibold text-gray-600">Cart Summary</h2>
              <p className="mt-4 text-xl">
                Total number of Products: <span className="font-bold">{totalProducts}</span>
              </p>
              <p className="mt-1 text-xl">
                Grand Total: <span className="font-bold">₹ {grandTotal.toFixed(2)}</span>
              </p>
              <button
                onClick={handleCheckout}
                className="w-full bg-green-600 text-white p-3 mt-4 rounded-lg hover:bg-green-700 transition"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
