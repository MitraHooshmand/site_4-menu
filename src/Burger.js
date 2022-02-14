import React, { Component } from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

const MyDiv = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 40;
  left: 300;
  z-index: 20;
  display: none;
  cursor: pointer;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 9px 12px;
  }
  div {
    width: 2rem;
    height: 0.2rem;
    border-radius: 5px;
    background: ${(props) => (props.flag ? "gray" : "silver")};
    margin: 2px;
    transform-origin:1px;
    transition : all 0.4s  ease-in-out;
    &:nth-child(1) {
      transform: ${(props) => (props.flag ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2){
        // transform : ${(props) =>
          props.flag ? "translateX(100%)" : "translateX(0)"}
           opacity : ${(props) => (props.flag ? 0 : 1)} 
        }
    &:nth-child(3){
        transform ${(props) => (props.flag ? "rotate(-45deg)" : "rotate(0)")}
    }
  }
`;
class Burger extends Component {
  constructor() {
    super();
    this.state = {
      flag: false,
    };
  }
  chgFlag = () => {
    this.setState({
      flag: !this.state.flag,
    });
  };

  render() {
    return (
      <>
        <MyDiv flag={this.state.flag} onClick={this.chgFlag}>
          <div></div>
          <div></div>
          <div></div>
        </MyDiv>
        <Navbar flag={this.state.flag} />
      </>
    );
  }
}

export default Burger;
