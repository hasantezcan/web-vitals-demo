import {
  Context,
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { Product } from "../interfaces/product";
import { API_URL } from "../../constants";

interface IProductContext {
  productList: Product[];
}

const defaultProductContext: IProductContext = {
  productList: [],
};

interface ProductContextProps {
  initialProducts?: Product[];
}

const ProductContext: Context<IProductContext> = createContext(
  defaultProductContext
);

const useProduct = () => useContext(ProductContext);

const ProductProvider = ({
  children,
  initialProducts,
}: PropsWithChildren<ProductContextProps>) => {
  const setInitialProductList = () =>
    initialProducts && Array.isArray(initialProducts) && initialProducts.length
      ? initialProducts
      : [];

  const [productList, setProductList] = useState<Product[]>(
    setInitialProductList()
  );

  const getProductData = async () => {
    const response = await fetch(`${API_URL}/products`);
    const productData = await response.json();
    if (productData && Array.isArray(productData) && productData.length) {
      setProductList(productData);
    }
  };

  useEffect(() => {
    if (!productList?.length) getProductData();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productList,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, useProduct };
