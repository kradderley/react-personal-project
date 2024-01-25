import styled from "styled-components";

export const Form = styled.form`
  margin-top: 50px;
  margin-bottom: 100px;
  position: relative;

  div {
    width: 100%;
    text-align: center;
  }

  input {
    font-size: 1.5rem;
    font-family: "Lora", serif;
    padding: 10px 50px;
    border-radius: 100rem;
    width: 40%;
    background-color: #fcf5ed;
  }

  button {
    font-size: 20px; 
    margin-left: 10px; 
    background-color: #fcf5ed; 
    padding: 10px 30px;
    border-radius: 100rem;
    position: relative; 
    top: -3px; 
  }
`;

export const Menu = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;

  .menu-bar {
    color: white;
    position: absolute;
    top: 44px;
    right: 60px;
    display: none;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #739072;
  }

  nav h1 {
    font-style: italic;
    font-size: 50px;
    font-weight: 100px;
    margin: 30px;
    margin-left: 90px;
    color: white;
  }

  nav ul {
    display: flex;
    align-content: center;
    padding-right: 40px;
  }

  nav ul li {
    list-style: none;
    position: relative;
    padding-top: 35px;
    margin-bottom: 10px;
  }

  nav ul li:hover {
    background-color: #4f6f52;
    border-radius: 10px;
  }

  nav ul li h3 {
    display: block;
    color: white;
    padding: 8px;
    margin: 0 8px;
    border-radius: 8px;
    white-space: nowrap;
  }

  nav ul li img {
    position: absolute;
    right: 35%;
    bottom: 45%;
  }

  @media screen and (max-width: 450px) {
    nav h1 {
      font-size: 40px;
      font-weight: 100px;
      margin-left: 30px;
    }

    .menu-bar {
      color: white;
      position: absolute;
      top: 35px;
      right: 32px;
      display: none;
    }
  }

  @media screen and (max-width: 1215px) {
    .menu-bar {
      display: block;
    }

    nav {
      flex-direction: column;
      align-items: start;
    }

    nav ul {
      display: none;
      flex-direction: column;
      width: 95%;
      margin-bottom: 50px;
    }

    nav ul li {
      width: 100%;
      padding-top: 15px;
      padding-bottom: 15px;
    }

    nav ul li:hover {
      width: 95%;
    }

    nav ul li h3 {
      text-align: center;
    }

    nav ul li img {
      top: 24%;
      right: 72.5%;
    }

    nav ul.open {
      display: flex;
    }
  }
`;

export const FeaturedWrapper = styled.div`
  h2 {
    text-align: center;
    margin-bottom: 50px;
    font-style: italic;
  }

  @media screen and (min-width: 570px) {
    font-size: 26px;
  }

  @media screen and (max-width: 570px) {
    h2 {
      margin-top: 40px;
      margin-bottom: 20px;
    }
  }
`;

export const FeaturedCard = styled.div`

margin-bottom: 50px; 
  min-height: 25rem;
  min-width: 20rem; 
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border: 1px solid; 
    border-color: black; 
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute; 
    z-index: 100; 
    left: 50%
    bottom: 0%; 
    transform: translate (-50%, 0%); 
    background-color: black; 
    color: white; 
    font-weight: 600; 
    font-size: 22px; 
    padding: 3px;
    width: 100%; 
    text-align: center; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
  }
  @media screen and (max-width: 570px) {
    margin-bottom: 0px;
  }
`;

export const DessertWrapper = styled.div`
  margin: 50px 50px;

  h2 {
    text-align: center;
    margin-bottom: 50px;
    font-style: italic;
  }

  @media screen and (max-width: 570px) {
    margin-left: 0px;
    margin-right: 0px;

    h2 {
      margin-top: 40px;
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 570px) {
    font-size: 20px;
  }
`;

export const DessertCard = styled.div`
  min-height: 25rem;
  min-width: 20rem; 
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border: 1px solid; 
    border-color: black; 
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute; 
    z-index: 100; 
    left: 50%
    bottom: 0%; 
    transform: translate (-50%, 0%); 
    background-color: black; 
    color: white; 
    font-weight: 600; 
    font-size: 17px; 
    padding: 3px;
    width: 100%; 
    text-align: center; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
  }
`;

export const RecipeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 100px;
  margin: 0% 10%;
  margin-bottom: 50px;

  h1 {
    margin-top: 10px;
    margin-bottom: 30px;
    text-align: center;
  }

  img {
    max-width: 100%;
    margin-bottom: 15px;
    border-radius: 30px;
  }

  p {
    font-size: 20 px;
    // font-weight: bold;
    line-height: 25px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 730px) {
    h1 {
      font-size: 40px;
    }

    p {
      font-size: 22px;
      line-height: 30px;
    }
  }
`;

export const Button = styled.button`
  padding: 30px 70px;
  margin-top: 20px;
  background: white;
  color: black;
  border: 2px solid black;
  font-weight: bold;
  font-size: 17.5px;
  border-radius: 20px;
  background-color: #fcf5ed;
  font-family: "Lora", serif;

  @media screen and (min-width: 580px) {
    margin-left: 30px;
    margin-right: 30px;
  }
`;

export const Info = styled.div`
  div {
    margin-top: 60px;
    text-align: start;
  }

  li {
    padding: 10px;
  }

  ul {
    margin-top: 60px;
    list-style-type: none;
    // font-weight: bold;
    padding: 10px;
  }

  @media screen and (min-width: 730px) {
    li {
      font-size: 22px;
    }
  }

  // @media screen and (max-width: 600px) {

  // }

  // margin-left: 40px;

  //   p {
  //     font-size: 20px;
  //   }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  justify-items: center;
  margin: 100px;
  margin: 0% 10%;
  margin-bottom: 50px;
`;

export const SearchCard = styled.div`
  position: relative;

  img {
    object-fit: cover;
    width: 100%;
    border: 1px solid;
    border-color: black;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  div h3 {
    font-size: 17px;
    padding: 1rem;
    position: absolute;
    z-index: 100;
    // left: 50%
    bottom: 0%;
    transform: translate (-50%, 0%);
    background-color: black;
    color: white;
    font-weight: 600;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
