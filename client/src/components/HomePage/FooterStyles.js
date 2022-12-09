import styled from "styled-components";

export const Box = styled.div`
  background-color: #eaece5;
  color: black;
  text-align: center;
  position: absolute;
  left: 0;
  button: 0;
  width: 100%;
  font-family: "monospace";
  padding-top: 30px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "monospace";
  min-heigth: 100vh;
  background-color: #e0d9cc;
`;

export const Column = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  line-height: normal;
  padding: 0.5em auto;
  min-height: 100%;
  text-align: left;
  padding-left: 10px;
`;

export const Row = styled.div`
  display: flex;
  padding: 10px auto;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;
  line-height: normal;
  min-width: 100%;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: black;
  margin-bottom: 15px;
  font-size: 1rem;
  text-align: left;
  text-decoration: none;
`;
export const Form = styled.div`
  margin-bottom: 1px;
  text-align: left;
  margin-top: 0;
`;

export const Button = styled.button`
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  color: white;
  background-color: black;
  padding: 0 10px;
  font-size: 14px;
  text-align: left;
  cursor: pointer;
  border-radius: 5px;
  border-left: 0px;
  height: 40px;
`;

export const Email = styled.div`
  padding: 25px 25px;
  border-radius: 1px;
  outline: 1px solid #3D9FFF
  width: 400px;
  font-size: 18px;
`;

export const Heading = styled.h1`
  font-size: 20px;
  color: black;
  margin-bottom: 10px;
  font-weight: bold;
`;
