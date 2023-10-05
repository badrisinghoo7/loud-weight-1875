
import styled from 'styled-components';

const InspirationContent = () => {
    return <DIV>
        <div className='box-1' >
             <img src="https://m.media-amazon.com/images/I/61+BDdeWUDL._AC_UF1000,1000_QL80_.jpg" alt="wall_Painting"/>
        </div>
        <div className='box-2'>
            <p className='heading'>Our Passion is Your <span style={{ color: "green" }}>Inspiration</span></p>
            <br />
            <br />
            <p>With each Livary Wall we send you our passion for beautiful thing for your home.The content of each wall is agreed with thr Creators.</p>
            <button> Shop Now </button>
        </div>
    </DIV>
}

export default InspirationContent;

const DIV = styled.div`
    width: 90%;
    display: flex;
    margin-left: 5%;
    margin-bottom:50px;
    .box-1{
        width: 100%;
        background-color: #f0ede6;
        padding:2%;
    }
    .box-2{
        width: 100%;
        padding: 5%;
        margin-left:20px;
    }
    img{
        width:100%;
        height: 350px;
    }
    .heading{
        font-size: 45px;
    }
 
    button{
        margin-top: 30px;
        width: 100px;
        height: 30px;
        background-color: #47bd47;
        border-radius:5px;
        border:1px solid #47bd47;
        color: white;
    }
    button:hover{
        background-color:blue;
    }
`

