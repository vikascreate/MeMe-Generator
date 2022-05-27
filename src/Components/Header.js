import troll from './Images/Troll Face.png'
export default function Header(){
    return(
       <header className="header">
           <img src={troll} className="header-img"></img>
           <h2 className='header-title'>MeMe Generator</h2>
           <h4 className='header-project'>ReactJs Project-3</h4>
       </header>
       
    )

}