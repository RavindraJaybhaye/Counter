import React ,{useState} from 'react'

const App = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [course, setCourse] = useState();
  const [users] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    users.splice(1,0,name)
    console.log(users);

  }
  return (
    <center>
    <div className='mainDiv'>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input type= "text" placeholder ='Enter you name' value={name} onChange={(e) => setName(e.target.value)}/> <br/>
        <input type= "text" placeholder ='Enter you email' value={email} onChange={(e) => setEmail(e.target.value)}/> <br/>
        <select value={course} onChange={(e) => setCourse(e.target.value)}>
          <option value="react">React</option>
          <option value="java">Java</option>
          <option value="python">Python</option>
        </select>
        <br/>
        <button type='submit'>Submit</button> <br/>

      </form>
      
    </div>
    </center>
  )
}


export default App
