import React, {useState, useRef} from 'react'
import Repositories from '../Repositories'


function Form() {
    const [username, setUsername] = useState('')
    const userRef = useRef()

    function handleSubmit(e){
        e.preventDefault()
        setUsername(userRef.current.value)
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor='username'>GitHub Username: </label>
        <input id='username' type = "text" placeholder= "e.g. Jaxsan2206" ref={userRef}></input>
        <input type='submit'></input>
    </form>
    {username && <Repositories username={username}/>}
    </>
  )
}

export default Form