import './App.css'
import HeroSection from './components/Hero-Section';
import MainCategorySection from './components/Main-Category-Section';

function App() {

  return (
    <div className='selection:bg-teal-100 selection:text-teal-600'>
      <HeroSection />
      <MainCategorySection />
    </div>
  )
}

export default App
