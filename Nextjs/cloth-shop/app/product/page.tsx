import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { Metadata } from 'next';
import React from 'react';
import ProductFilter from './product_component/ProductFilter';
import ProductInfo from './product_component/ProductInfo';

export const metadata: Metadata = {
    title: 'Product',
    description: 'This is product page'
}

export default function Product() {
    return (
        <>
            <Header />
            <main>
                <ProductFilter />
                <ProductInfo />
            </main>
            <Footer />
        </>
    )
}