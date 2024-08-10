import Header from './components/Header'
import Home from './components/Home'

export default function App() {
  return (
    <>
      <Header></Header>
      <main className="h-screen flex items-center">
        <Home></Home>
      </main>
    </>
  )
}
