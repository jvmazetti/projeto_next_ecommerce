"use client"
import styled from "styled-components";

export const BarraDeNavegacao = styled.nav`
  position: fixed;
  top: 0;
  max-width: 100%;
  display: flex;
  align-items: center;
  padding:8px 32px;
  justify-content: space-between;
  z-index: 50;
  background-color: cadetblue;
`

const Link = styled.link`
  text-transform: uppercase;
  font-weight: bold;
  font-size: medium;
  height: 48px;
  display: flex;
  align-items: center;
`

export const MainContainer = styled.main`
    background-color:black;
    height: 100vh;
    padding: 64px;
`

export function NavBar() {
    return(
        <>
            <BarraDeNavegacao>
                <Link href="/">
                    Next Store
                </Link>
            </BarraDeNavegacao>
        </>
    )
}