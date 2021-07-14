import styled from "styled-components";
import Navbar from "../../Components/Navbar";
import {useHistory} from "react-router-dom"; 
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect,useState } from 'react';
import axios from 'axios';





const Title = styled.h5`
font-size: 24px;
font-weight: bold;
font-family: SFProDisplay;
color: #313131;
margin-top:67px;
margin-left: 21px;
line-height: 29px;
letter-spacing: 1.5px;
`;

const CoverBG = styled.div`
width: 100%;
height: 282px;
background-color: #FFF6E5;
position: relative;
border-bottom-right-radius: 100px;
`;

const Author = styled.h5`
font-size: 16px;
font-weight: 900;
font-family: Roboto;

margin-top: 7px;
margin-bottom: 10px;
margin-left: 21px;
line-height: 19px;
letter-spacing: 0.670588px;

color: #FF6978;

`;

const Description = styled.p`
font-size: 14px;
font-weight: 900;
font-family: SFProText;
margin-left: 21px;
margin-right: 20px;
line-height: 25px;
letter-spacing: 0.2px;
color: rgba(49, 49, 49, 0.6);
text-align: justify;
text-justify: inter-word;
`;

const CreatedDate = styled.p`
font-size: 16px;
font-weight: 900;
font-family: Roboto;
margin-top: 7px;
line-height: 19px;
letter-spacing: 0.670588px;
color: #FF6978;
padding-bottom: 100px;
margin-left: 21px;
`;

const Cover = styled.img`
width: 151px;
height: 234px;
z-index: 99;
border-radius: 2px;
position: absolute;
top:84px;
left: 113px;
`;

const ArrowButton = styled.button`
  position: absolute;
  margin-top:55px;
  margin-left:33px;
  border: none;
  z-index: 99;
  background:  transparent;
`;



function Details({match}) {

  const [books, setBooks] = useState([])
    const history = useHistory();

    useEffect(() => {
      axios.get('http://localhost:3001/api').then(res => {
        setBooks(res.data)
      }).catch(err => console.log(err));
  }, [])
        

    return (
      <div >

          <ArrowButton onClick={() => history.goBack()}><FontAwesomeIcon icon={faArrowLeft} size="1x"/></ArrowButton>
          
          {books.map((val,key) => val.id.toString() === match.params.id &&(
 
            <div style={{ backgroundColor: '#F2F2F2', height: '100%' }} key={key}>
              
              <Navbar/>
              <CoverBG/>
              <Cover src={val.cover}></Cover>
              <Title>{val.title}</Title>
              <Author>by {val.author}</Author>
              <Description>{val.description}</Description>
              <CreatedDate>Created Date: {val["createdDate"]}</CreatedDate>
            </div>
              
      ))}
      </div>
      
    )

  }
  
  export default Details;