import { Header } from "../../components/Header"
import { Hero } from "../../components/Hero"
import { Categories } from "../../components/Categories"
import { Partners } from "../../components/Partners"
import { ProductNav } from "../../components/ProductNav";
import { Brands } from "../../components/Brands";
import { NewsLetter } from "../../components/NewsLetter";
import { Footer } from "../../components/Footer";
import { FooterCopyright } from "../../components/FooterCopyright";
import { RelatedProducts } from "../../components/RelatedProducts";
import { useState } from "react";

export function Home() {

  const [searchTerms, setSearchTerms] = useState('')

  return (
    <>
      <Header searchTerms={searchTerms} setSearchTerms={setSearchTerms} />
      <Hero/>
      <Categories/>
      <ProductNav searchTerms={searchTerms}/>
      <Partners/>
      <RelatedProducts searchTerms={searchTerms}/>
      <Partners/>
      <Brands/> 
      <RelatedProducts searchTerms={searchTerms}/>
      <NewsLetter/>
      <Footer/>
      <FooterCopyright/>
    </>
  )
}