import './styles/App.scss';
import { About } from './components/About'
import { Navbar } from './components/Navbar'
import { ProjectList } from './components/ProjectList';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <>
      <Navbar />

      <main className='container'>
        <About />
        <ProjectList />
        <Footer />
      </main>
    </>
  )
}
