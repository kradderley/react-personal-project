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
    .menu-bar {
      display: block;
      position: absolute;
      right: 130px;
      top: 60px;
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
    img {
      right: 30px;
    }

    ul {
      text-align: end;
    }

    li {
      display: block;
      list-style: none;
      position: relative;
      padding-bottom: 30px;
    }
  }
`;

export const Wrapper = styled.div`
  @media screen and (max-width: 400px) {
  }

  //   margin: 50px 50px;
`;

export const Card = styled.div`

@media screen and (max-width: 400px) {

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
  @media screen and (max-width: 600px) {
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

    div {
      //   display: flex;
      //   flex-direction: column;
      //   text-align: center;
    }

    p {
      font-size: 20 px;
      font-weight: bold;
      line-height: 25px;
    }
  }

  @media screen and (min-width: 500px and max-width: 1000px) {
    margin-top: 10px;
    margin-bottom: 50px;
    margin-left: 50px;
    margin-right: 50px;
    display: flex;

    .clicked {
      background-color: black;
      color: white;
    }

    h1 {
      margin-bottom: 30px;
    }

    div {
      margin-right: 75px;
    }
  }
`;

export const Button = styled.button`
  @media screen and (max-width: 600px) {
    padding: 30px 70px;

    margin-top: 20px;
    background: white;
    color: black;
    border: 2px solid black;
    font-size: 17.5px;
    border-radius: 20px;
  }

  //   padding: 30px 70px;
  //   margin-bottom: 50px;
  //   margin-top: 50px;
  //   margin-left: 50px;
  //   background: white;
  //   color: black;
  //   border: 2px solid black;
  //   font-size: 17.5px;
  //   border-radius: 20px;
`;

export const Info = styled.div`
  @media screen and (max-width: 600px) {
    div {
      margin-top: 60px;
      text-align: start;
    }

    li {
      padding: 10px;
    }

    ul {
      list-style-type: none;
      font-weight: bold;
    }
  }

  // margin-left: 40px;

  //   p {
  //     font-size: 20px;
  //   }
`;
