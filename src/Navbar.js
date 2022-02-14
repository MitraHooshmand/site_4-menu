import React from "react";
import styled from "styled-components";

const MyUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: left;
  z-index: 15;
  background: silver;
  li {
    padding: 0 10px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 50px 10px;
    background: silver;
    width: 150px;
    height: 100%;
    position: fixed;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
    transform: ${(props) =>
      props.flag ? "translateX(0)" : "translateX(-100%)"};
    top: 0;
    left: 0;
    li {
      padding: 10px 0;
      &:hover {
        cursor: pointer;
        background: #e2e0e0;
        border-radius: 5px;
    
      }
    }
  }
`;
const Navbar = ({ flag }) => {
  return (
    <MyUl flag={flag}>
      <li>Home</li>
      <li>Docs</li>
      <li>About Us</li>
      <li>Shop</li>
    </MyUl>
  );
};

export default Navbar;
