import React, { useContext } from "react";
import { ContextData } from "../ContextData/ContextData";

function Product() {
  const contextData = useContext(ContextData);
  return (
    <div>
      {contextData.allProducts.map((product) => (
          <div className="w-full p-5 bg-red-300">
            <img src={product.thumbnails} alt="" />
            <h2 className="text-sm text-gray-500 mt-2 box-content hover:text-blue-600">
              {product.title}
            </h2>
            <samp className="w-auto bg-blue-100 py-1 px-3 text-blue-500 text-xs rounded-lg">
              {product.discount}
            </samp>
            <div className="price flex justify-between justify-center items-center">
              <span className="text-red-400 text-sm">{product.oldPrice}</span>
              <span className="text-blue-600 text-lg">
                {product.price}
                <span className="text-gray-400 text-[10px]">تومان</span>
              </span>
            </div>
          </div>
      ))}
    </div>
  );
}

export default Product;
