import {useState} from "react";
import { Container, Modal, ModalBody, ModalFooter, Row } from "reactstrap";

/*const getLocalItems = () => {
    let list = localStorage.getItem('lists');

    if (list ){
        return JSON.parse(localStorage.getItem('lists'));
    }else {
        return[];
    }
}*/

const FormOpen =({onOpen}) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [subject, setSubject] = useState("");
    
    const addBook=()=>{
        //console.log(title,author,subject);
        onOpen(title, author, subject)

    }
   /* const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputData(value => ({...value, [name]: value}))
    }
    const handleSubmit = () => {
        setAuthor([...author,inputData]);
        onOpen();
    }*/

    return(
        <>
             <Container>
                 <Row xs="2">
            <Modal isOpen >
            <ModalFooter>Add Me to the Library</ModalFooter>
            <ModalBody>
            <form >
                    <label> Title : 
                    <input type="text" name="title" onChange={(e) => setTitle(e.target.value)}/> </label><br/> <br/>
                    <label> Author : 
                    <input type="text" name="author" onChange={(e) => setAuthor(e.target.value)}/> </label><br/> <br/>
                    <label> Subject : 
                    <input type="text" name="subject" onChange={(e) => setSubject(e.target.value)}/> </label><br/> <br/>

                    <button type="button" className="btn btn-primary" onClick={addBook} />
            </form>
            </ModalBody>
            </Modal>
            </Row>
            </Container>
        </>

    );
};

export default FormOpen;

