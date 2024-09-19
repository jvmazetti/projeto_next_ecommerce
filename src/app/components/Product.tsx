"use client"
import { ProductType } from "@/types/ProductType"
import styled from "styled-components"

type ProductProps = {
    product: ProductType
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 348px;
    width: 250px;
    background-color: cadetblue;
    padding: 20px;
    color: black;
`

const CardImage = styled.div`
    position: relative;
    max-height: 288px;
    flex: 1;
`

const CardTitle = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    margin: 12px 0;
`

const BotaoAdicionar = styled.button`
    border-radius: 20px;
    background-color: aquamarine;
    padding: 14px 10px;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
`

export default function Product({ product } : ProductProps) {
    return (
        <>
            <CardContainer>
                <CardImage>IMG</CardImage>
                <CardTitle>{product.title}</CardTitle>
                <BotaoAdicionar>Adicionar ao Carrinho</BotaoAdicionar>
            </CardContainer>
        </>
    )
}