import React, { useContext, useState } from 'react';
import ProductCard from '../SubComponents/ProductCard/ProductCard';
import products from '../../data/products';
import ProductDetails from '../ProductDetails/ProductDetails';
import { WishListContext } from '../../Context/WishListContext';
import { useNavigate } from 'react-router-dom';


const ProductsList = () => {
    const categories = [
        "All",
        "Electronics",
        "Bags",
        "Furniture",
        "Clothing",
        "Accessories",
        "Footwear"
    ];

    const [selectedCategory, setSelectedCategory] = useState(products);
    const [activeCategory, setActiveCategory] = useState("All");

    const { wishList } = useContext(WishListContext);
    const navigate = useNavigate();




    const handleCategorySelect = (category) => {
        setActiveCategory(category); // NEW LINE
        if (category === "All") {
            setSelectedCategory(products);
        } else {
            setSelectedCategory(products.filter(product => product.category === category));
        }
    };

    // const toggleWishList = (product) => {
    //     const isWishListed = wishlist.find(item => item.id === product.id);
    //     if (isWishListed) {
    //         setWishlist(wishlist.filter(item => item.id !== product.id))
    //         toast.info("Product is removed to My Wishlist")


    //     } else {
    //         setWishlist([...wishlist, product])
    //         toast.info("Product is added to My Wishlist")


    //     }
    // };
    const [selecetdProduct, setSelectedProduct] = useState(null);


    // console.log(wishlist);
    console.log(selecetdProduct);


    return (
        <section>
            {selecetdProduct ? <ProductDetails selectedProductdetail={selecetdProduct} removeSeletecdProduct={() => setSelectedProduct(null)} /> : <>
                <button className='flex items-center gap-1 p-1 text-[#8754ff] cursor-pointer' onClick={() => navigate('/')}><i className="bi bi-arrow-left-circle-fill text-xl"></i> Back to home</button>
                <div>
                    <p className='text-center text-3xl my-2 font-semibold text-[#28262C] underline underline-offset-3 decoration-[#8754ff]'>
                        Categories
                    </p>
                    <div className='flex justify-center gap-2 my-4 flex-wrap'>
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                onClick={() => handleCategorySelect(category)}
                                className={`inline-block p-1 rounded-full px-5 border text-sm cursor-pointer transition-all 
            ${activeCategory === category ? "bg-[#8754ff] text-white border-[#8754ff]" : "bg-[#ECE3FF] border-[#C2A6FF] text-black hover:bg-[#e6dbff] hover:border-[#bb9cff]"}`}
                            >
                                {category}
                            </div>
                        ))}

                    </div>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-6'>
                    {selectedCategory.map((product, index) => (
                        <ProductCard key={index} product={product} setProductDetails={() => setSelectedProduct(product)} />
                    ))}
                </div>
            </>}
        </section>
    );
};

export default ProductsList;
