import React, { useState } from 'react';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/Homepage';
import books from './components/ModalForm';
//import Card from './components/Card';

/*const App = () => {
  const[records,setRecords] = useState(books);
  return(
    <div className='app-container'>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record)=>(
          <tr>
            <td>{record.fullTitle}</td>
            <td>{record.fullName}</td>
            <td>{record.fullSubject}</td>
          </tr>
          ))}
        </tbody>
      </table>
      <h2>Add a book</h2>
      <form>
        <input type="text" name="title" required="required" placeholder="Enter Title"/>
        <input type="text" name="author" required="required" placeholder="Enter author"/>
        <input type="text" name="subject" required="required" placeholder="Enter subject"/>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}*/
function App() {
  return (
    
      <div className="App">
        <h1>Library app</h1>
        <Homepage/>
        {/*<Card
        title=''
        author=''
        subject=''/>*/}
   
        </div>
  );
}

export default App;
