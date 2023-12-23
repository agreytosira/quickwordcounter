import './App.css'

function App() {
  return (
    <>
      <main className='min-h-screen flex items-center justify-center'>
        <div className='container'>
          <section className='wordcounter w-2/3 mx-auto'>
            <div className='my-4'>
              <h1 className='text-4xl font-bold mb-4'>Word Counter</h1>
              <div className='flex items-center gap-4'>
                <div className='flex flex-col items-start bg-slate-300 px-4 py-2 rounded-lg'>
                  <p>Total Word</p>
                  <h5 className='text-3xl font-bold'>200</h5>
                </div>
                <div className='flex flex-col items-start bg-slate-300 px-4 py-2 rounded-lg'>
                  <p>Total Letter</p>
                  <h5 className='text-3xl font-bold'>200</h5>
                </div>
              </div>
            </div>
            <textarea className='p-4 border w-full h-[300px] border-slate-300 rounded-lg' placeholder='Input your text here...' name='input-text' id='input-text'></textarea>
            <p className='my-4'>
              Developed by <strong>Agrey Tosira</strong>
            </p>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
