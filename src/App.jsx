import About from "./components/About";
import Projects from "./components/Projects";
import Hero from "./components/Hero";

function App() {
  return (
    <main className='flex flex-col lg:flex-row bg-background'>
      <div className="lg:fixed lg:inset-y-0 lg:left-0 lg:w-1/3 xl:w-1/4">
        <Hero />
      </div>
      <section className='bg-textured flex flex-col grow w-full scroll-smooth lg:ml-[33.3333%] xl:ml-[25%] lg:h-screen lg:overflow-y-auto'>
        <About />
        <Projects />
      </section>
    </main>
  )
}

export default App
