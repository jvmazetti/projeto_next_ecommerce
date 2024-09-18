"use client"
import styled from "styled-components";

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  border: 1px solid white;
  color: white;
  padding-top: 32px;
  padding-left: 32px;
  padding-right: 32px;
`
const ListagemDeProdutos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px;
`

export default function Home() {
  return (
    <>
      <Container>
        <ListagemDeProdutos>
          <div>prod 1</div>
          <div>prod 1</div>
          <div>prod 1</div>
          <div>prod 1</div>
          <div>prod 1</div>
        </ListagemDeProdutos>
      </Container>
    </>
  );
}
