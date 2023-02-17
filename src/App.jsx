import Header from "./components/Header"
import Page from "./components/Page"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <div className="sticky top-0 z-10 bg-neutral-900 text-lime-100">
        <Header/>
      </div>
      <main className="z-0 bg-zinc-800">
        <Page/>
      </main>
      <div className="sticky top-0 z-0 bg-neutral-900 text-lime-100">
        <Footer/>
      </div>     
    </>
  )
}

export default App
