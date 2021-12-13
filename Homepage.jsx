import { React } from "react";
import { Button, Container, Row } from "reactstrap";
import { useState } from "react";
//const [ModalFormOpen, setModalFormOpen] =  useState(false);
import ModalForm from "./ModalForm";
import FormOpen from "./ModalForm";
//import count from "./count";
const Homepage= () => {
    const books=[
        
        {
            title:" Mudra Rakshasa" ,
            author: " Visakdatta",
            subject: " narrates the ascent of the king Chandragupta Maurya to power ",
        },
        {
            title:"history of Kashmir",
            author: "kalhana",
            subject:" it is stated that the valley of Kashmir was formerly a lake.",
        },
        {
            title:"The Ocean of Story",
            author: "Somdeva",
            subject: "Animals and the Ungrateful Woman, Story of the Grateful",
        },
        {
            title:"Soldier's Pay",
            author: "William Faulkner",
            subject:" Soldiers' Pay is war and the irreparable damage it causes.",
        },
        {
            title:"The Silver Cord",
            author: "Sidney Howard",
            subject:"This scathing drama of mother- love gone awry",
        },
        {
            title:"ESTHER WATERS BY GEORGE MOORE",
            author: "WILLIAM HEINEMANN",
            subject:"A PLAY IN FIVE ACT",
        },
        {
            title:"This Storm",
            author: "James Ellroy",
            subject:" the murder of two LAPD officers",
        },
        {
            title: "The Neaon Bible",
            author: "John Kennedy Toole",
            subject:"The novel is a bildungsroman about a callow youth",
        },
        {
            title: "The Porpoise",
            author:  "Mark Haddon",
            subject: "In comes a young man named Darius who discerns the secret, and the father drives him away while mortally threatening his life.",
        },
        {
            title:"Sidewall",
            author: "David Graham",
            subject:"sidewall arrangement and lower closure",
        },
        {
            title:"The Pearl",
            author: "John Steinbeck",
            subject:"theme of the destructive power of greed is explored as the characters navigate their personal desires, destiny, and racism. ",
        },
];
    const [modalOpen, setModalOpen] = useState(false);
    const [books1, setBooks1] = useState(books);
    
    const addOpenForm = ()=>{
        setModalOpen(!modalOpen);
    }

    const addItem = (title, author, subject) =>{
            setBooks1([...books1, {"title":title, "author":author, "subject":subject}]);
            addOpenForm();
    }

    //console.log(books);

    const deleteItem = (title) => {
        const updateditems = books1.filter((itemtitle) => itemtitle.title !==title);
        setBooks1(updateditems);
    }
    return(
        <>
        { modalOpen && <FormOpen onOpen={addItem}/>}
        <Container>
                <Row xs="2">
                <div className="book-list">

                    <div className="py-4">
                        <h1>Home page</h1>

                        <table class="table border shadow">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Subject</th>
                                </tr>
                            </thead>
                            <tbody>

                                
                                {books1.map((books, index) =>(
                                    <>
                                    <div className="book" key={index}>
                                        <ul>
                                            <li><h2>{books.title}</h2></li>
                                        </ul>
                                        <p>{books.author}</p>
                                        <p>{books.subject}</p>
                                        <Button onClick={()=> deleteItem(books.title)} class="btn btn-outline-danger" >Delete</Button> <br/> <br/>
                                        <Button class="btn btn-outline-primary ">edit</Button> 
                                    </div>
                                
                                    </>
                                    
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Row>
        
            <Row>
            <Button onClick={addOpenForm} className="btn btn-primary">Add</Button> <br/> <br/>
            
            </Row>
         
        </Container>   
        </>
    )
}


 export default Homepage;