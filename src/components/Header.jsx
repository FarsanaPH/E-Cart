import React, { useState } from 'react'
import { CiMenuBurger } from 'react-icons/ci';
import { FaHeart, FaOpencart } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const cartArray = useSelector((state)=>state.cartItem)
    const wishlistArray = useSelector((state)=>state.wishlist)

    return (
        <>
            <header className="bg-violet-900 text-white shadow-md w-full fixed">
                <div className="mx-auto px-md-5 pe-md-8 px-2 pe-5  py-3 flex items-center justify-between">
                    {/* Logo / Brand */}
                    <div className="flex items-center">
                        <FaOpencart className="text-2xl me-1" />
                        <Link to="/" className="text-2xl">E-CART</Link>
                    </div>

                    {/* Navigation */}
                    <nav className="space-x-5 flex items-center">
                        {/* Wishlist */}
                        <Link to="/wishlist" className="flex items-center">
                            Wishlist
                            <div className="relative ml-1">
                                <FaHeart className="text-xl" />
                                <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                    {wishlistArray?.length}
                                </span>
                            </div>
                        </Link>
                        
                        {/* Cart */}
                        <Link to="/cart" className="flex items-center">
                            Cart
                            <div className="relative ml-2">
                                <FaOpencart className="text-xl" />
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                    {cartArray?.length}
                                </span>
                            </div>
                        </Link>

                        {/* Hambergur Icon */}
                        <button className='border border-gray-400 p-2 px-3 rounded md:hidden ' onClick={() => setMenuOpen(!menuOpen)} ><CiMenuBurger /></button>
                    </nav>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden bg-violet-800 p-4 space-y-3">
                        <Link to="/wishlist" className="block text-white">Wishlist</Link>
                        <Link to="/cart" className="block text-white">Cart</Link>
                        <Link to="/" className="block text-white">Home</Link>
                    </div>
                )}
            </header>
        </>
    )
}

export default Header
