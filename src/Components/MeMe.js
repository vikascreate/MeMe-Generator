import React from "react";
export default function MeMe(){
    const [memeObject,setMeMeObject]=React.useState({
        topText:"",
        BottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
})
React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMeMeImages(data.data.memes))
},[])
const [allMeMeImages,setAllMeMeImages]=React.useState([])
    function submitted(){
        var rand=Math.floor(Math.random()*100)
        const memesArr=allMeMeImages
        const url=memesArr[rand].url
         setMeMeObject(prevob => ({
             ...prevob,
             randomImage:url,
         }))
    }
    function handleChange(event){
        const {name,value}=event.target
        setMeMeObject(prevob => ({
            ...prevob,
            [name]:value
        }))
    }
    return(
        <main>
            <div className="form">
                <input 
                      type="text"
                      className="form-input"
                      placeholder="Top text"
                      name="topText"
                      value={memeObject.topText}
                      onChange={handleChange}
                ></input>
                <input 
                      type="text"
                      className="form-input"
                      placeholder="Bottom text"
                      name="BottomText"
                      value={memeObject.BottomText}
                      onChange={handleChange}
                ></input>
               <button 
                 className="form-button" onClick={submitted}
               >
                   Get a new meme Image 🖼
                </button>
            </div>
            <div className="meme">
            <img src={memeObject.randomImage} className="meme--image"/> 
            <h2 className="meme--text top">{memeObject.topText}</h2>
            <h2 className="meme--text bottom">{memeObject.BottomText}</h2>
            </div>
        </main>
        
    )
}