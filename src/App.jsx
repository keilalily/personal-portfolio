import { About, Experiences, Hero, Projects } from './components/index.js';

function App() {
  return (
    <main className='flex flex-col lg:flex-row bg-background'>
      <div className="bg-textured lg:fixed lg:inset-y-0 lg:left-0 lg:w-1/3 xl:w-1/4">
        <Hero />
      </div>
      <section className='flex flex-col grow gap-8 md:gap-12 p-8 md:p-16 w-full scroll-smooth lg:ml-[33.3333%] xl:ml-[25%] lg:h-screen lg:overflow-y-auto'>
        <About />
        <Experiences />
        <Projects />
      </section>
    </main>
  )
}

export default App
