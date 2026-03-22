
import './App.css'
function Button({ text }){
  return(
    <button className='rounded-full border border-white/20 bg-linear-to-r from-amber-300 via-orange-300 to-pink-300 px-4 py-2 font-semibold text-slate-900 shadow-lg shadow-pink-500/20 transition hover:scale-[1.02]'>
      {text}
    </button>
  );
}

function Input({ text, type, place }){
  return(
    <>
     <p className='mb-1 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100'>{text}</p>
      <input type={type} placeholder={place} className='mb-4 w-full rounded-xl border border-white/15 bg-white/90 px-3 py-2 font-medium text-slate-800 shadow-sm outline-none placeholder:text-slate-400 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/40'/>
      </>
  );
}
function Navbar(){
  return(
     <div className='flex items-center justify-between border-b border-white/10 bg-black/15 px-6 py-4 backdrop-blur-md'>
      <h1 className='text-2xl font-black tracking-wide text-white'>C.V-Generator</h1>
      <Button text="Download"/>
     </div>
  );
}
function Sidebar(){
  return(
    <>
    <div className='w-full max-w-sm p-5'>
    <div className='mb-4 rounded-3xl border border-white/10 bg-white/8 p-4 shadow-xl shadow-slate-950/30 backdrop-blur-xl'>
    <h1 className='mb-3 text-2xl font-bold text-white'>General information</h1>
        <Input type="text" text="Name:" place="Jane Doe"/>
        <Input type="text" text="Email:" place="example@gmail.com"/>
        <Input type="text" text="Phone:" place="1234569"/>
    </div>

    <div className='mb-4 rounded-3xl border border-white/10 bg-white/8 p-4 shadow-xl shadow-slate-950/30 backdrop-blur-xl'>
    <h1 className='mb-3 text-2xl font-bold text-white'>Education</h1>
        <Input type="text" text="School" place="Oxford University"/>
        <Input type="text" text="Degree" place="B.S Computer Science"/>
        <Input type="date" text="Date:" />
    </div>

    <div className='mb-4 rounded-3xl border border-white/10 bg-white/8 p-4 shadow-xl shadow-slate-950/30 backdrop-blur-xl'>
    <h1 className='mb-3 text-2xl font-bold text-white'>Experience</h1>
        <Input type="text" text="Name:" place="Software Engineer"/>
        <Input type="text" text="Title:" place="Software Engineer"/>
        <Input type="text" text="Responsibilities:" place="Software Engineer"/>
        <Input type="date" text="Start Date:" place="Software Engineer"/>
        <Input type="date" text="End Date:" place="Software Engineer"/>
    </div>
    <button className='w-full rounded-full bg-linear-to-r from-cyan-300 via-sky-300 to-violet-300 px-4 py-3 font-bold text-slate-900 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.01]'>Submit</button>
    </div>
    
    </>
  );
}
function App() {
  
  return (
    <div className='min-h-screen bg-linear-to-br from-slate-950 via-indigo-950 to-fuchsia-950'>  
    <Navbar/>
    <div className='flex px-4 py-6 md:px-8'>
      <Sidebar/>
    </div>
    </div>
  )
}

export default App
