"use client"
import styled from "styled-components";
import { ProductType } from "@/types/ProductType";
import Product from "./components/Product";

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  color: white;
  margin-top: 20px;
  padding-top: 32px;
  padding-left: 32px;
  padding-right: 32px;
`
const ListagemDeProdutos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px;

`

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products')
  if (!res.ok) {
    throw new Error('failed to find Data')
  }
  return res.json();
}

export default async function Home() {
  const products = await getProducts();
  console.log(products)
  return (
    <>
      <Container>
        <ListagemDeProdutos>
          {products.map((product: ProductType) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </ListagemDeProdutos>
      </Container>
    </>
  );
}
