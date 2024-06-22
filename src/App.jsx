import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import * as Sentry from '@sentry/react';
import Features from './components/Features';
import Footer from './components/Footer';
import VideoAnimation from './components/VideoAnimation';

 const App = () => {
  //test sentry error catch
 //return <button onClick={() => methodDoesNotExist()}>Break the world</button>;
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

export default Sentry.withProfiler(App);
