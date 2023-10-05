import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <DIV>
      <div className="global">
        <div className="Box1">
          <h1>Paintku.</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            sapiente quo placeat perspiciatis ipsum, id adipisci harum corrupti
            rem tempore.
          </p>
          <div className="icons">
            <p>Like me</p>
            <img
              src="https://cdn-icons-png.flaticon.com/128/20/20837.png"
              alt=""
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/733/733635.png"
              alt=""
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png"
              alt=""
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/3128/3128219.png"
              alt=""
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/1384/1384012.png"
              alt=""
            />
          </div>
        </div>
        <div className="box2">
            <h1>Visit our other website</h1>
            <input type="search" placeholder="Choose website" />
            <label><input type="checkbox"/>  I read and accept all terms and conditions</label>
            <div>
                <p>Cookie policy</p>
            <p>Privacy policy</p>
            <p>Terms and consitions</p>
            <p>Contact us</p>
            <p>About</p></div>
        </div>
      </div>
      
      <div className="box3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa reiciendis nemo necessitatibus nisi harum ad est quia<br/>nesciunt. Sit laudantium mollitia cum adipisci autem ratione!
      </div>
    </DIV>
  );
}
const DIV = styled.div`
.global {
    margin-top: 50px;
}
div{
 /* margin-top:50px; */
 /* padding-top: 50px; */
 background-color:#f6f4f4;
display: flex;
justify-content: space-evenly;
padding: 15px;
  .Box1{
    width: 40%;
    display: flex;
    flex-direction: column;
    /* background-color: red; */
    gap: 25px;
    padding: 20px;
    margin: auto 5px;
   .icons {
      display: flex;
      justify-content: space-evenly;
      img {
        width: 5%;
      }
    }
  }
  .box2{
    width: 40%;
    display: flex;
    flex-direction: column;
    /* background-color: green; */
    gap: 20px;
    padding: 20px;
    margin: auto 5px;
    div{
        display: flex;
       justify-content: space-evenly;
    }
  
}
}
  .box3{
    /* background-color: blue; */
    /* border: 2px red;
    border-top-color:20px solid grey */
    text-align:center;
  }
`;

export default Footer;
