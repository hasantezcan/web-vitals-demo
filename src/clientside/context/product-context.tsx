import {
  Context,
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { ColorOptions, Product } from "../interfaces/product";
import { API_URL } from "../../constants";

interface IProductContext {
  productList: Product[];
  colorOptions: ColorOptions[];
}

const defaultProductContext: IProductContext = {
  productList: [],
  colorOptions: []
};

interface ProductContextProps {
  initialProducts?: Product[];
  initialColorOptions?: ColorOptions[];
}

const ProductContext: Context<IProductContext> = createContext(
  defaultProductContext
);

const useProduct = () => useContext(ProductContext);

const ProductProvider = ({
  children,
  initialProducts,
  initialColorOptions
}: PropsWithChildren<ProductContextProps>) => {
  const setInitialProductList = () =>
    initialProducts && Array.isArray(initialProducts) && initialProducts.length
      ? initialProducts
      : [];
  const setInitialColorOptions = () =>
    initialColorOptions && Array.isArray(initialColorOptions) && initialColorOptions.length
      ? initialColorOptions
      : [];
  const [productList, setProductList] = useState<Product[]>(
    setInitialProductList()
  );
  const [colorOptions, setColorOptions] = useState<ColorOptions[]>(setInitialColorOptions());

  const getProductData = async () => {
    const response = await fetch(`${API_URL}/products`);
    const productData = await response.json();
    if (productData && Array.isArray(productData) && productData.length) {
      setProductList(productData);
    }
  };

  const getColorOptionsData = async () => {
    const response = await fetch(`${API_URL}/color-options`);
    const colorOptionsData = await response.json();
    if (colorOptionsData && Array.isArray(colorOptionsData) && colorOptionsData.length) {
      setColorOptions(colorOptionsData);
    }
  };

  useEffect(() => {
    if (!productList?.length) getProductData();
    if (!colorOptions?.length) getColorOptionsData();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productList,
        colorOptions
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, useProduct };
