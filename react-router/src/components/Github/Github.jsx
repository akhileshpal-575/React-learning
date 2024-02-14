import React, { useEffect,useState } from 'react'

function Github() {
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch('https://api.github.com/users/akhileshpal-575')
        .then((res) => res.json())
        .then(data=>{
            console.log(data);
            setData(data)
        })
    },[])
  return (
    <div className='bg-gray-700 text-white p-4 text-3xl'>Github follower:{data.followers}
    <img src={data.avatar_url} className='w-1/6'></img>
  </div>
  )
}

export default Github