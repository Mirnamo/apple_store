import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import Footer from './components/Footer';
import VideoAnimation from './components/VideoAnimation';

 const App = () => {
   return (
    <main className='bg-black'>
       <Navbar />
       <Hero />
       <Highlights />
       <Model />
       <Features/>
       <VideoAnimation/>
       <Footer/>
    </main>
  )
}

export default App;
