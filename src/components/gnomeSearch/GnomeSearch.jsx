import './gnomeSearch.css'
import { allGnomes } from '../../data/data'
import { useState } from 'react'

const GnomeSearch = () => {
    const [inputData, setInputData] = useState("")

     const displayGnomes = () => {
        if(inputData === '') {
         return  <>{allGnomes.map(gnome => 
             <div className='gnome-box' key={gnome.description}>
                 <img src={gnome.file} alt="" className='img'/>
                 <p className='descriptionText'>{gnome.description}</p>
                 <p className='price'>{gnome.price} kr</p>
               
             </div>
             )}  
             </>
        } else {
            const filteredGnomes = allGnomes.filter(gnome => {
                return gnome.description.toLowerCase().includes(inputData.toLowerCase())
            })

            return <>{filteredGnomes.map(gnome => 
                <div className='gnome-box' key={gnome.description}>
                    <img src={gnome.file} alt="" className='img'/>
                    <p className='descriptionText'>{gnome.description}</p>
                    <p className='price'>{gnome.price} kr</p>
                   
                </div>
                )}  
                </>

        }
     }

    const searchForGnome = (event) => {
        setInputData(event.target.value)
    }

       
     

    

    




  return (
    <div className='page'>
        <h2>Level 2</h2>
        <label>Search gnomes</label>
        <input className="searchText" id="searchText" value={inputData} onChange={searchForGnome} />

        <div className="gnomeResult">
           {displayGnomes()}
        </div>
  

    </div>


 
  )
}

export default GnomeSearch