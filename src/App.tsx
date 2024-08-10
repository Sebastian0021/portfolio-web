import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import Skills from './components/Skills'

export default function App() {
  return (
    <>
      <Header></Header>
      <main className="h-screen max-w-5xl flex flex-col mx-auto">
        <Home></Home>
        <About></About>
        <Skills />
      </main>
    </>
  )
}
