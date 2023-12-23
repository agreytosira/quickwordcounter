import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [wordCount, setWordCount] = useState(0)
  const [letterCount, setLetterCount] = useState(0)

  const handleTextChange = (event) => {
    const inputText = event.target.value
    setText(inputText)
    countWordsAndLetters(inputText)
  }

  const countWordsAndLetters = (inputText) => {
    const words = inputText.split(/\s+/).filter((word) => word !== '')
    const letters = inputText.replace(/\s+/g, '').split('')

    setWordCount(words.length)
    setLetterCount(letters.length)
  }

  const currentYear = new Date().getFullYear()

  return (
    <>
      <main className='min-h-screen flex items-center justify-center'>
        <div className='container'>
          <section className='wordcounter md:w-2/3 mx-auto'>
            <div className='my-4 flex item-center justify-between items-center flex-col-reverse md:flex-row'>
              <div className='flex items-center gap-4 w-full md:w-auto'>
                <div className='w-full md:w-auto flex flex-col items-start text-left bg-indigo-300 px-4 py-2 rounded-lg text-indigo-900'>
                  <p>Total Word</p>
                  <h5 className='text-3xl font-bold'>{wordCount}</h5>
                </div>
                <div className='w-full md:w-auto flex flex-col items-start text-left bg-lime-300 px-4 py-2 rounded-lg text-lime-900'>
                  <p>Total Letter</p>
                  <h5 className='text-3xl font-bold'>{letterCount}</h5>
                </div>
              </div>
              <div className='flex items-center flex-col md:items-end gap-0 mb-8 md:mb-0'>
                <h1 className='text-center text-4xl font-bold mb-1 md:text-right'>Quick Word Counter</h1>
                <p className='text-slate-600'>v1.0.0</p>
              </div>
            </div>
            <textarea
              className='transition-all duration-100 ease focus:ring focus:ring-red-300 focus:outline focus:outline-red-600 p-4 border w-full h-[300px] border-slate-300 rounded-lg'
              placeholder='Input your text here...'
              name='input-text'
              id='input-text'
              value={text}
              onChange={handleTextChange}></textarea>
            <p className='my-4'>
              Developed by <strong>Agrey Tosira</strong> - All Rights Reserved &copy; {currentYear}
            </p>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
