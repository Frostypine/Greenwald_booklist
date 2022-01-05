import React, {useState} from 'react';
import {Form, Card,  Button} from 'react-bootstrap';


const Book= () => {
    
    // title: "To Kill a Mockingbird" ,
    // author: "Harper Lee",
    // synop : "Boo, Scout and Gregory play in a treehouse. "

    //
    
   const [title, setTitle] = useState("To Kill a Mockingbird");
   const [author, setAuthor] = useState("Harper Lee");
   const [synopsis, setSynopsis] = useState( "Boo, Scout and Gregory play in a treehouse.");

    const handleSubmit = (e) => 
    { 
      e.preventDefault(); 
    setTitle(e.target.title.value); 
    setAuthor(e.target.author.value);
    setSynopsis(e.target.synopsis.value);  
}   
    
   

    return (
        
    <div>
 <Form onSubmit={handleSubmit}>
            <Form.Group>
               
            <Form.Label>Title </Form.Label><br/>
        <Form.Control className="mx-auto aBox"  
                size="lg" type="text"  name="title" />
<br/>
<Form.Label>Author</Form.Label><br/>
<Form.Control className="mx-auto aBox"  
                size="lg" type="text" name="author" />
<br/>
<Form.Label>Synopsis</Form.Label><br/>
<Form.Control className="mx-auto synopBox text-wrap aBox"  
                size="lg" type="text" name="synopsis"/>
                <br/><br/>
  <Button className= "aButton aBox" variant="primary" type="submit"
 // onClick = {handleSubmit}
  >
    Submit
  </Button>

  </Form.Group>
    </Form>


        <Card className="mx-auto aCard "
        style={{ height: '5rem', width: '15rem' }}>
    
        <Card.Body>
     
      
    
          <Card.Title>   {title}</Card.Title>
          <Card.Text>{author} </Card.Text>
          <Card.Text> {synopsis}</Card.Text> 
        </Card.Body>
      </Card>

    </div>
    )

}
export default Book;