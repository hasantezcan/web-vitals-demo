import React, { Context, createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { Product } from '../interfaces/product';

interface IProductContext {
    productList: any[];
}

const defaultProductContext: IProductContext = {
    productList: []

};

interface ProductContextProps {
    products?: Product[];
}

const ProductContext: Context<IProductContext> = createContext(defaultProductContext);

const useProduct = () => useContext(ProductContext);

const ProductProvider = ({ children, products }: PropsWithChildren<ProductContextProps>) => {

    const setInitialProductList = () => products && Array.isArray(products) && products.length ? products : [];

    const [productList, setProductList] = useState<Product[]>(setInitialProductList());

    const getProductData = async () => {
        const response = await fetch("https://api.escuelajs.co/api/v1/products");
        const productData = await response.json();
        if (productData && Array.isArray(productData) && productData.length) {
            setProductList(productData);
        }

    }

    useEffect(() => {
        if (!productList?.length)
            getProductData();
    }, [])

    return (
        <ProductContext.Provider
            value={{
                productList
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export { ProductProvider, useProduct };
