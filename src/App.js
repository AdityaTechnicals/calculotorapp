import React,{useState,useEffect} from 'react'
import './App.css';


function App() {
  const [input, setinput] = useState("0");
  const [prestate, setprestate] = useState("");
  const [curstate, setcurstate] = useState("");
  const [oper,setoper] = useState(null);
  const [total, settotal] = useState(false);
  const inputNum =(e) =>{
    if(total){
      setprestate("")
    }
    curstate ? setcurstate(pre=>pre + e.target.innerText ) :setcurstate(e.target.innerText)
    settotal(false)
  }
  useEffect(() => {
  setinput(curstate)
  }, [curstate]);
  useEffect(() => {
    setinput("0")
  }, []);
  const opera =(w) =>{

  }
  const reset =() =>{

  }
  const equal =() =>{

  }

  return (


   <>
   
 <div className="container">
<div className="wrapper">
  <div className="screen"> {input} </div>
    <div className="btn light-gray" onClick={reset}>AC</div>
    <div className="btn org" onClick={opera}>-</div>

    <div className="btn org" onClick={opera}>/</div>
    <div className="btn org" onClick={opera}>X</div>
    <div className="btn" onclick={inputNum}>7</div>
    <div className="btn" onclick={inputNum}>8</div>
    <div className="btn" onclick={inputNum}>9</div>
    <div className="btn org" onClick={opera}>+</div>
    <div className="btn" onclick={inputNum}>4</div>
    <div className="btn" onclick={inputNum}>5</div>
    <div className="btn" onclick={inputNum}>6</div>
    <div className="btn org" onClick={equal}>=</div>
    <div className="btn" onclick={inputNum}>1</div>
    <div className="btn" onclick={inputNum}>2</div>
    <div className="btn" onclick={inputNum}>3</div>




</div>
 </div>
   </>
  );
}

export default App;
