import styled from "styled-components";

export const Form = styled.form`
// @media screen and (max-width: 400px) {
    margin-top: 40px ; 
    margin-bottom: 50px; 
position; relative; 

div {
  width: 100%; 
  position: relative; 
  text-align: center; 
}

input {
  font-size: 1.5rem; 
  padding: 10px 50px ; 
  border-radius: 100rem; 
  width: 60%

// img {
//   position: absolute; 
//   top: 24%; 
//   left: 17.5%
// }

`;

export const Menu = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;

  .menu-bar {
    color: white;
    position: absolute;
    top: 2rem;
    right: 2rem;
    display: none;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: gray;
  }

  nav h1 {
    font-size: 40px;
    font-weight: bold;
    margin: 30px;
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
    background-color: brown;
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

  @media screen and (max-width: 1096px) {

    
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

export const Wrapper = styled.div`
  @media screen and (max-width: 450px) {
  }

  //   margin: 50px 50px;
`;

export const Card = styled.div`

  min-height: 25rem;
  min-width: 20rem; 
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
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
    font-size: 20px; 
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
