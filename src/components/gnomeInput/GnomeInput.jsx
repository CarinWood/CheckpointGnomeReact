import { useState } from 'react'
import './gnomeInput.css'

const GnomeInput = () => {
    const [input, setInput] = useState("")

    const inputChange = (event) => {
        setInput(event.target.value)
    }

    const displayText = () => {
        if(input === '') {
            return <p>The gnome doesn't like anything</p>
        } else {
            return<p>The gnome likes {input}</p>
        }
       
    }

    

  return (
    <div className='page'>
        <h2>Level 1</h2>
        <div className='question'>
            <label>
                What does the gnome like? 
                <input type="text" className="food" value={input} onChange={inputChange} />
            </label>
        </div>

        
        <div className={input === '' ? "likes": "likes frame"}>
            {displayText()}
        </div>
    </div>
  )
}

export default GnomeInput