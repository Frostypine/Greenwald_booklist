import React from 'react';
import {Form, Button} from 'react-bootstrap';
import './components.css'; 

const Book= () => {
    return (
        
    <div>
        <Form>
            <Form.Group>
            <Form.Label>Title </Form.Label><br/>
        <Form.Control className="mx-auto"  
                size="lg" type="text" placeholder="To Kill a Mockingbird" />
<br/>
<Form.Label>Author</Form.Label><br/>
<Form.Control className="mx-auto"  
                size="lg" type="text" placeholder="Harper Lee" />
<br/>
<Form.Label>Synopsis</Form.Label><br/>
<Form.Control className="mx-auto synopBox text-wrap"  
                size="lg" type="text" placeholder="Boo, Scout and Gregory play in a treehouse. " />
                <br/>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </Form.Group>
        </Form>

    </div>
    )

}
export default Book;