
import { useState } from 'react'
import './App.css'

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  school: '',
  degree: '',
  educationDate: '',
  company: '',
  jobTitle: '',
  responsibilities: '',
  startDate: '',
  endDate: '',
}

function Button({ text, onClick }){
  return(
    <button
      type='button'
      onClick={onClick}
      className='rounded-full border border-white/20 bg-linear-to-r from-amber-300 via-orange-300 to-pink-300 px-4 py-2 font-semibold text-slate-900 shadow-lg shadow-pink-500/20 transition hover:scale-[1.02]'
    >
      {text}
    </button>
  );
}

function Input({ text, type, place, value, onChange }){
  return(
    <>
     <p className='mb-1 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100'>{text}</p>
      <input
        type={type}
        placeholder={place}
        value={value}
        onChange={onChange}
        className='mb-4 w-full rounded-xl border border-white/15 bg-white/90 px-3 py-2 font-medium text-slate-800 shadow-sm outline-none placeholder:text-slate-400 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/40'
      />
      </>
  );
}
function Navbar({ onDownload }){
  return(
     <div className='flex items-center justify-between border-b border-white/10 bg-black/15 px-6 py-4 backdrop-blur-md'>
      <h1 className='text-2xl font-black tracking-wide text-white'>C.V-Generator</h1>
      <Button text="Download" onClick={onDownload}/>
     </div>
  );
}
function Sidebar({ formData, onFieldChange, onSubmit, onClear }){
  return(
    <>
    <div className='w-full max-w-sm p-5'>
    <div className='mb-4 rounded-3xl border border-white/10 bg-white/8 p-4 shadow-xl shadow-slate-950/30 backdrop-blur-xl'>
    <h1 className='mb-3 text-2xl font-bold text-white'>General information</h1>
        <Input type="text" text="Name:" place="Jane Doe" value={formData.name} onChange={(event) => onFieldChange('name', event.target.value)}/>
        <Input type="text" text="Email:" place="example@gmail.com" value={formData.email} onChange={(event) => onFieldChange('email', event.target.value)}/>
        <Input type="text" text="Phone:" place="1234569" value={formData.phone} onChange={(event) => onFieldChange('phone', event.target.value)}/>
    </div>

    <div className='mb-4 rounded-3xl border border-white/10 bg-white/8 p-4 shadow-xl shadow-slate-950/30 backdrop-blur-xl'>
    <h1 className='mb-3 text-2xl font-bold text-white'>Education</h1>
        <Input type="text" text="School" place="Oxford University" value={formData.school} onChange={(event) => onFieldChange('school', event.target.value)}/>
        <Input type="text" text="Degree" place="B.S Computer Science" value={formData.degree} onChange={(event) => onFieldChange('degree', event.target.value)}/>
        <Input type="date" text="Date:" place="" value={formData.educationDate} onChange={(event) => onFieldChange('educationDate', event.target.value)}/>
    </div>

    <div className='mb-4 rounded-3xl border border-white/10 bg-white/8 p-4 shadow-xl shadow-slate-950/30 backdrop-blur-xl'>
    <h1 className='mb-3 text-2xl font-bold text-white'>Experience</h1>
        <Input type="text" text="Company:" place="Company Name" value={formData.company} onChange={(event) => onFieldChange('company', event.target.value)}/>
        <Input type="text" text="Title:" place="Software Engineer" value={formData.jobTitle} onChange={(event) => onFieldChange('jobTitle', event.target.value)}/>
        <Input type="text" text="Responsibilities:" place="Built web applications" value={formData.responsibilities} onChange={(event) => onFieldChange('responsibilities', event.target.value)}/>
        <Input type="date" text="Start Date:" place="" value={formData.startDate} onChange={(event) => onFieldChange('startDate', event.target.value)}/>
        <Input type="date" text="End Date:" place="" value={formData.endDate} onChange={(event) => onFieldChange('endDate', event.target.value)}/>
    </div>
    <div className='flex gap-3'>
      <button
        type='button'
        onClick={onSubmit}
        className='w-full rounded-full bg-linear-to-r from-cyan-300 via-sky-300 to-violet-300 px-4 py-3 font-bold text-slate-900 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.01]'
      >
        Submit
      </button>
      <button
        type='button'
        onClick={onClear}
        className='w-full rounded-full border border-white/20 bg-white/10 px-4 py-3 font-bold text-white transition hover:bg-white/20'
      >
        Clear
      </button>
    </div>
    </div>
    
    </>
  );
}

function Cv({ formData }){
  return(
    <>
    <div className='w-5xl max-w-5xl rounded-3xl bg-white shadow-2xl shadow-slate-950/30'>
      <div className='rounded-t-3xl bg-linear-to-r from-cyan-500 via-blue-600 to-violet-600 px-8 py-8'>
          <h1 className='text-4xl font-bold text-white'>{formData.name || 'Your Name'}</h1>
          <h2 className='mt-3 text-lg text-cyan-50'>{formData.email || 'Email'}</h2>
          <h2 className='text-lg text-cyan-50'>{formData.phone || 'Phone number'}</h2> 
      </div>
      <div className='space-y-8 p-8 text-slate-800'>
          <div>
            <h1 className='mb-3 text-3xl font-bold text-slate-900'>Education</h1>
            <h2 className='text-xl font-semibold'>{formData.school || 'School name'}</h2>
            <p className='text-base text-slate-600'>{formData.degree || 'Degree or course'}</p>
            <p className='text-sm text-slate-500'>{formData.educationDate || 'Graduation date'}</p>
          </div>

          <div>
            <h1 className='mb-3 text-3xl font-bold text-slate-900'>Experience</h1>
            <h2 className='text-xl font-semibold'>{formData.company || 'Company name'}</h2>
            <p className='text-base text-slate-600'>{formData.jobTitle || 'Job title'}</p>
            <p className='text-sm text-slate-500'>
              {(formData.startDate || 'Start date')} - {(formData.endDate || 'End date')}
            </p>
            <p className='mt-3 text-base leading-7 text-slate-700'>{formData.responsibilities || 'Your work and responsibilities will appear here.'}</p>
          </div>
      </div>


        
    </div>
    </>
  )
}
function App() {
  const [formData, setFormData] = useState(initialFormData)
  const [savedFormData, setSavedFormData] = useState(initialFormData)

  function handleFieldChange(field, value) {
    setFormData((currentData) => ({
      ...currentData,
      [field]: value,
    }))
  }

  function handleSubmit() {
    setSavedFormData(formData)
  }

  function handleClear() {
    setFormData(initialFormData)
    setSavedFormData(initialFormData)
  }

  function handleDownload() {
    const cvElement = document.getElementById('cv-preview')

    if (!cvElement) {
      return
    }

    const printWindow = window.open('', '_blank')

    if (!printWindow) {
      return
    }

    printWindow.document.write(`
      <html>
        <head>
          <title>CV</title>
          <style>
            body {
              margin: 0;
              padding: 24px;
              background: #e2e8f0;
              font-family: Arial, sans-serif;
            }
            #print-root {
              max-width: 960px;
              margin: 0 auto;
            }
          </style>
        </head>
        <body>
          <div id="print-root">${cvElement.outerHTML}</div>
        </body>
      </html>
    `)
    printWindow.document.close()
    printWindow.focus()
    printWindow.print()
  }
  
  return (
    <div className='min-h-screen bg-linear-to-br from-slate-950 via-indigo-950 to-fuchsia-950'>  
    <Navbar onDownload={handleDownload}/>
    <div className='flex flex-col gap-6 px-4 py-6 md:flex-row md:items-start md:px-8'>
      <Sidebar
        formData={formData}
        onFieldChange={handleFieldChange}
        onSubmit={handleSubmit}
        onClear={handleClear}
      />
      <div id='cv-preview'>
        <Cv formData={savedFormData}/>
      </div>
    </div>

    </div>
  )
}

export default App
