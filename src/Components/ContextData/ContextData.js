import { createContext ,useState} from "react";
import { slider, service, products } from "./../../data";
export  const ContextData = createContext();

const Context = ({ children }) => {
  const [sliders, setSliders] = useState(slider);
  const [services, setServices] = useState(service);
  const [allProducts, setAllProducts] = useState(products);

  return (
    <ContextData.Provider
      value={{
        sliders,
        services,
        allProducts,
      }}
    >
      <div>{children}</div>
    </ContextData.Provider>
  );
};

export default Context;
