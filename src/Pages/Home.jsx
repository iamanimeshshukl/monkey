import React  from 'react'
import Navbar from '../components/Navbar.jsx'
import Movies from '../components/Movies.jsx'
import Search from '../components/Search.jsx'
import Header from '../components/Header.jsx'
import Fav from '../components/Fav.jsx'
import Footer from '../components/Footer.jsx'
import More from '../components/More.jsx'
import Video from '../components/Video.jsx'
const Home = () => {

  return (
    <div className='bg-[#ffd148]'>
      <Navbar />
      <Header />
      <br  />
      <br />
      <Search />
      <br />
      <br />
      <Movies />
      <br />
      <h1 className='text-5xl  font-bold m-8'>Explore Movies & TV shows </h1>
      <div className='grid grid-cols-1 lg:grid-cols-4 mx-3 p-4 space-y-3'>  <Fav /> </div>
      <h1 className='text-5xl font-bold m-8'>More to explore </h1>
      <More />
      <div className='mt-[3cm]'>
      <h1 className='text-5xl font-bold m-8'>What to watch </h1>
     <Video />
     </div>
     <div className='mt-[3cm]'>
     <Footer />
     </div>
   
    </div>
  )
}

export default Home
