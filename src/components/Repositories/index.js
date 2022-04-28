import React, {useEffect, useState} from 'react'
import Render from '../Render'

function Repositories({username}) {
    const [data, setData]=useState([])

    useEffect(()=>{
        async function fetchData (){
            const response = await fetch(`https://api.github.com/users/${username}/repos`)
            const response_json = await response.json()
            setData(response_json)
        }
        fetchData()
    }, [username])

    // function renderData(){
    //     data.map((repo, i)=><Render key={i} data={repo}/>)
    // }

    const renderData = () => data.map((repo, i)=><Render key={i} data={repo}/>)

  return (
    <>
    {data && renderData()}
    </>
  )
}

export default Repositories