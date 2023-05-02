import { createContext, useState } from "react";
import { slider, service, products, baner, brand } from "./../../data";
export const ContextData = createContext();

const Context = ({ children }) => {
  const [sliders, setSliders] = useState(slider);
  const [services, setServices] = useState(service);
  const [allProducts, setAllProducts] = useState(products);
  const [baners, setBaners] = useState(baner);
  const [brands, setBrands] = useState(brand);
  return (
    <ContextData.Provider
      value={{
        sliders,
        services,
        allProducts,
        baners,
        brands,
      }}
    >
      <div>{children}</div>
    </ContextData.Provider>
  );
};

export default Context;
