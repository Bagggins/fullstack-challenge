import Footer from '../../Components/Footer';
import styled from "styled-components";
import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button';


const NewBookButton = styled(Button)`
position: absolute;
width: 336px;
height: 48px;
left: 16px;
top: 663px;
background: #FF6978;
box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.4926);
border-radius: 10px;
`;

const TitleInput = styled.input`

width: 336px;
height: 48px;
border: 2px solid #ccc;
background: #FDFCFC;
box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.4926);
border-radius: 10px;
`;

const AuthorInput = styled.input`

width: 336px;
height: 48px;
border: 2px solid #ccc;

background: #FDFCFC;
box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.4926);
border-radius: 10px;
`;

const DescriptionInput = styled.textarea`

width: 336px;
height: 228px;
text-align: left;
background: #FDFCFC;
box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.4926);
border-radius: 10px;
padding-bottom: 50%;
box-sizing: border-box;
border: 2px solid #ccc;


  font-size: 16px;
  resize: none;
`;

const TitleFieldSet = styled.fieldset`

position: absolute;
left: 20px;
top: 167px;
`;

const AuthorFieldSet = styled.fieldset`

position: absolute;
left: 19px;
top: 281px;
`;

const DescriptionFieldSet = styled.fieldset`
left: 20px;
top: 396px;
position: absolute;
background: transparent;
`;

const PageTitle = styled.p`
margin-top: 53px;
margin-left: 27px;
width: 200px;
height: 29px;
text-overflow: none;
font-family: SF Pro Display;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;



color: #FF6978;
`;

const FormLabelTitle = styled.p`

width: 46px;
height: 18px;
left: 20px;
top: 139px;
font-family: SFProText;
font-size: 16px;
line-height: 18px;
text-align: center;
color: #000000;
`;

const FormLabelAuthor = styled.p`

width: 54px;
height: 18px;
left: 20px;
top: 253px;
font-family: SFProText;
font-size: 16px;
line-height: 18px;
text-align: center;
color: #000000;
`;

const FormLabelDescription = styled.p`

width: 91px;
height: 18px;
left: 20px;
top: 368px;
font-family: SFProText;
font-size: 16px;
line-height: 18px;
text-align: center;
color: #000000;
`;


var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
var i = 0;
let today = new Date().toLocaleDateString("en")

var checkForSpecialChar = function(string){
  for(i = 0; i < specialChars.length;i++){
    if(string.indexOf(specialChars[i]) > -1){
        return true
     }
  }
  return false;
 }


class NewBook extends React.Component {
  
 
  constructor(props) {
    
    super(props);

    this.state = { 
      title: '',
      author:'',
      description:'',
      createdDate: today,
      id: Date.now().toString(36) + Math.random().toString(36).substr(2)
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  


  postNewBook = () => {
    axios.post('http://localhost:3001/api',{
      id: this.state.id,
      title: this.state.title,
      author: this.state.author,
      description: this.state.description,
      createdDate: this.state.createdDate,
      
  })
  .then(function (response) {
      console.log(response);
  })
  .catch(function (error) {
      console.log(error);
  });
    
}




  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit(event) {
    if(this.state.title === '' || checkForSpecialChar(this.state.title)){
      alert('Title cannot be empty or contain any special characters');
      return event.stopPropagation();
    }
    if(this.state.author === '' || checkForSpecialChar(this.state.author)){
      alert('Author cannot be empty or contain any special characters');
      return event.stopPropagation()
    }
    if(this.state.description === ''){
      alert('Description cannot be empty');
      return event.stopPropagation()
    } else {
    this.postNewBook()
    alert('A book was submitted: \n' + this.state.title + '\n By: \n' + this.state.author + '\n Description: \n' + this.state.description);
    window.location.reload();
    return event.preventDefault();
    
    }
  };

  render() {
   return(
   
    <div style={{display:"flex"}}>
       <Footer/>
       
       <PageTitle>Add a new Book</PageTitle>
      
        <form onSubmit={this.handleSubmit}>
        <TitleFieldSet>
          <label>
            <FormLabelTitle>Title</FormLabelTitle>
            <TitleInput autoComplete="off" name="title" type="text" value={this.state.title} onChange={this.handleChange} />
          </label>
        </TitleFieldSet>
        <AuthorFieldSet>
          <label>
            <FormLabelAuthor>Author</FormLabelAuthor>
            <AuthorInput autoComplete="off" name="author" type="text" value={this.state.author} onChange={this.handleChange}/>
          </label>
        </AuthorFieldSet>
        <DescriptionFieldSet>
          <label>
            <FormLabelDescription>Description</FormLabelDescription>
            <DescriptionInput autoComplete="off" name="description" type="text" value={this.state.description} onChange={this.handleChange}/>
          </label>
        </DescriptionFieldSet>
        <NewBookButton variant="primary" size="lg" type="submit" value="Submit">Create new Book</NewBookButton>
        </form>
    </div>
    
   )
  };
}

export default NewBook;