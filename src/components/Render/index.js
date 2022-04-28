import React, {useState} from 'react'

function Render({data}) {
  const {name, forks, description, open_issues, stargazers_count, watchers_count} = data
  const [click, setClick]= useState(false)
 
  const clickHandler = () => {
    setClick(!click)
  }

  const showMoreInfo = () =>{
    return(
    <>
      <p>Forks: {forks}</p>
      <p>Number of open issues: {open_issues}</p>
      <p>Stargazers Count: {stargazers_count}</p>
      <p>Watchers Count: {watchers_count}</p>
    </>
    )
  }

  return (
    <div onClick={clickHandler}>
        <h2>{name}</h2>
        {!description ? <p>No description found. </p> : <p>{description}</p>}
        {click && showMoreInfo()}
    </div>
  )
}

export default Render