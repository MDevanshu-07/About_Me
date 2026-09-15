import React from 'react'
import NavBar from '../components/NavBar'
import Content_1 from '../components/Content_1'

const Home = () => {
  return (
    <div className="h-screen w-full flex flex-col flex-wrap">
        <NavBar />
        <Content_1 />
    </div>
  )
}

export default Home
