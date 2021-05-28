import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState} from 'react';
import  {v4 as uuidv4 } from "uuid";


const AddModal =({getData})=> {

    const [show,setShow] = useState(false)
    const [input, setInput] = useState({
        Title:'',
        Description:'',
        PosterURL:'',
        Rating:'',
    });
    const handleAdd = (e) => {
        setInput({...input,[e.target.name]:e.target.value})
        };
    const sendData = (e) => {
        e.preventDefault();
        getData({...input, Id:uuidv4()});
    };
    const handleShow = () => {
        setShow(!show)    
    };  
    return (
        <div>
            
                <Button variant="primary" onClick={handleShow}>Add Movie</Button>
                <Modal show= {show} onHide={handleShow}      backdrop="static">
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Movie</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={sendData}>
                            <div>
                                <label className="input">Title</label>
                                <input type="text" onChange={handleAdd} name="Title"/>
                            </div>
                            <div>
                                <label className="input">Image</label>
                                <input type="text"  onChange={handleAdd} name="PosterURL"/>
                            </div>
                            <div>
                                <label className="input">Description</label>
                                <input type="text" onChange={handleAdd}  name="Description"/>
                            </div>
                            <div>
                                <label className="input">Rating</label>
                                <input type="text"  onChange={handleAdd}  name="Rating"/>
                            </div>                         
                        <Button variant="secondary"  type='submit' onClick={handleShow} >Add Movie</Button>
                        <Button variant="secondary"   onClick={handleShow} >Close</Button>
                        </form>
                    </Modal.Body>
                    {/* <Modal.Footer>
                    </Modal.Footer> */}
                </Modal>
           
        </div>
    );
}
export default AddModal;
