import React, { useEffect, useState } from "react";
import MainHeader from "../../components/mainheader/MainHeader";
import About from "../../components/about/About";
import Discount from "../../components/discount/Discount";
import ProductList from "../../components/productlist/ProductList";
import Contact from "../../components/contact/Contact";
import ProductSlider from "../../components/productslider/ProductSlider";
import CategorySlider from "../../components/categoryslider/CategorySlider";
import CollectionSlider from "../../components/collectionslider/CollectionSlider";
import ProductService from "../../APIs/services/ProductService";
import Title from "../../components/title/Title";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);

  const GetAllProducts = async () => {
    setProducts(await ProductService.getAllProduct());
  };

  useEffect(() => {
    GetAllProducts();
  }, []);

  return (
    <>
      <MainHeader />
      <CategorySlider slidesToShow={4} />
      <About showButton={true} />
      <Discount />
      <div className="container">
        <Title>
          <h3 className="title__head">{ t("title.products")}</h3>
          <div className="title--action">
            <Link to="/products">{t("titleaction")}</Link>
          </div>
        </Title>
      </div>
      <ProductList products={products} take={8} />
      <ProductSlider slidesToShow={4} />
      <CollectionSlider slidesToShow={3} />
      <Contact />
    </>
  );
};

export default HomePage;
