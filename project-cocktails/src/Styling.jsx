import styled from "styled-components";

export const Header = styled.div`
  h1 {
    text-align: start;
    margin-top: 50px;
  }

  div {
    display: inline-block;
  }

  .menu-bar {
    display: none;
  }

  @media screen and (max-width: 1250px) {
    button {
      cursor: pointer;
      background: none;
      border: none;
    }

    .menu-bar {
      display: block;
      position: absolute;
      right: 70px;
      top: 55px;
    }
  }
`;

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
  div {
    // display: flex;
    // justify-content: center;
    // align-content: center;
  }

  h3 {
    padding-right: 30px;
    padding-left: 30px;
    margin-bottom: 10px;
  }

  img {
    margin-top: 20px;
    position: relative;
    left: px; 
  }

  ul {
    text-align: center;
  }

  li {
    list-style: none;
    position: relative;
    padding-bottom: 30px;
    display: inline-block;
  }

  @media screen and (max-width: 1250px) {
//    ul {
//     background: gray; 
//     position: fixed; 
//     width: 100%; 
//     height: 100vh; 
//     top: 80px; 
//     left: 0; 
//    }

//    li {
//     display: block; 
//    }

//    h3:hover {
//     background: black; 
//     color: yellow; 
//    }
//   }
`;

export const Wrapper = styled.div`
  @media screen and (max-width: 450px) {
  }

  //   margin: 50px 50px;
`;

export const Card = styled.div`

@media screen and (max-width: 480px) {

}
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

  h1 {
    margin-top: 10px;
    margin-bottom: 30px;
    text-align: center;
  }

  img {
    max-width: 100%;
    margin-bottom: 15px;
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
