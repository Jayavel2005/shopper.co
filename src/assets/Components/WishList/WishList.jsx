import React, { useContext, useState } from 'react'
import { Heart, Laptop, Shirt, Trash, Trash2, Backpack, Sofa, Glasses, Footprints } from "lucide-react"
import { WishListContext } from '../../Context/WishListContext'

const WishList = () => {
    const { wishList, removeFromWishList, clearWishList } = useContext(WishListContext);

    const categories = [
        { type: "All", icon: <Heart /> },
        { type: "Electronics", icon: <Laptop /> },
        { type: "Bags", icon: <Backpack /> },
        { type: "Furniture", icon: <Sofa /> },
        { type: "Clothing", icon: <Shirt /> },
        { type: "Accessories", icon: <Glasses /> },
        { type: "Footwear", icon: <Footprints /> },
    ];

    const [selectedCategory, setSelectedCategory] = useState("All");

    function handleFilteredCategory(category) {
        setSelectedCategory(category);
    }

    const filteredCategory =
        selectedCategory === "All"
            ? wishList
            : wishList.filter(product => product.category === selectedCategory);

    return (
        <div className="space-y-4">
            {/* Clear Wishlist Button */}
            <div className="shadow p-2 my-2">
                <button
                    className="text-sm flex items-center gap-2 py-1 text-white hover:bg-red-600 bg-red-500 rounded-full px-4 transition"
                    onClick={() => clearWishList()}
                >
                    Clear Wishlist <Trash2 width={15} />
                </button>
            </div>

            <section className="flex gap-5 items-start">
                {/* Category section */}
                <div className="shadow-md px-4 py-5 rounded-lg w-64 sticky top-6">
                    <h3 className="font-semibold text-xl">Categories</h3>
                    <ul className="my-3 flex flex-col ml-2">
                        {categories.map((category) => (
                            <li
                                key={category.type}
                                className={`my-1 inline-flex cursor-pointer items-center gap-2 p-2 rounded-md transition 
                  ${selectedCategory === category.type
                                        ? "bg-rose-100 text-red-500 font-semibold"
                                        : "text-neutral-700 hover:bg-neutral-100"
                                    }`}
                                onClick={() => handleFilteredCategory(category.type)}
                            >
                                {category.icon} {category.type}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Wishlist Items */}
                <div className="flex-1 p-3 rounded-lg">
                    {filteredCategory.length === 0 ? (
                        <div className="w-full py-20 flex items-center justify-center">
                            <p className="text-neutral-500 text-lg">Your wishlist is empty.</p>
                        </div>
                    ) : (
                        filteredCategory.map((product) => (
                            <div
                                key={product.id || product.name}
                                className="shadow-md rounded-md p-3 flex gap-5 items-center justify-between my-4 hover:scale-[1.01] transition"
                            >
                                {/* Product Image */}
                                <div>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-24 h-24 rounded-lg object-cover object-center"
                                    />
                                </div>

                                {/* Product Info */}
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold">{product.name}</h3>
                                    <p className="text-sm text-neutral-600">{product.description}</p>

                                    <div className="flex items-center my-1 gap-2">
                                        <img
                                            src={`src/assets/images/StarRatings/rating-${product.rating * 10}.png`}
                                            alt="rating"
                                            className="w-20"
                                        />
                                        <span className="text-xs text-neutral-500">
                                            ({product.rating})
                                        </span>
                                    </div>

                                    <div className="inline-flex items-center gap-2">
                                        <span className="text-lg font-semibold text-green-600">
                                            ₹{Math.floor(product.price - product.price * (15 / 100))}
                                        </span>
                                        <del className="text-neutral-500 text-xs">₹{product.price}</del>
                                        {product.offer && (
                                            <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">
                                                {product.offer}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Remove Button */}
                                <button
                                    onClick={() => removeFromWishList(product)}
                                    className="cursor-pointer hover:scale-110 transition"
                                    title="Remove from Wishlist"
                                >
                                    <Trash color="red" />
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </section>
        </div>
    );
};

export default WishList;
