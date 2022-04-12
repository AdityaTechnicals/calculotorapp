import React,{useState,useEffect} from 'react'
import './App.css';
import NumberFormat from 'react-number-format';


function App() {
  
  const [input, setinput] = useState("0");
  const [prestate, setprestate] = useState("");
  const [curstate, setcurstate] = useState("");
  const [oper,setoper] = useState(null);
  const [total, settotal] = useState(false);
  const [style, setstyle] = useState({
    backgroundColor:"#283747",    
  })
  const [CALSTYLE, setCALSTYLE] = useState({
    backgroundColor:"#ECF0F1"
  });
  const drk =() =>{

    if(style.backgroundColor==="#283747"){
      setstyle({
        backgroundColor:"#ECF0F1"
      })
      setCALSTYLE({
        backgroundColor:"#283747"
      })
    }else{
      setstyle({
        backgroundColor:"#283747"
      })
      setCALSTYLE({
        backgroundColor:"#ECF0F1"
      })
    }
  }
  const inputNum =(e) =>{
    if(total){
      setprestate("");
    }
    curstate ? setcurstate( pre=>pre + e.target.innerText ) : setcurstate(e.target.innerText)
    settotal(false);
  };
  useEffect(() => {
  setinput(curstate)
  }, [curstate]);
  useEffect(() => {
    setinput("0")
  }, []);
  const opera =(e) =>{
    settotal(false);
setoper(e.target.innerText)
if(curstate==="0") return
if(prestate !== ""){
  equal()
}else{
setprestate(curstate)
setcurstate("");
};
  }
  
  const reset =() =>{
   setinput("0")
   setprestate("")
   setcurstate("")
  }
  const equal =(e) =>{
   if(e?.target.innerText==="="){
   settotal(true);   }
  
  let cal
  switch(oper){
    case "/": 
      cal =String(parseFloat(prestate)/parseFloat(curstate));
      break;
      case "X": 
      cal =String(parseFloat(prestate)*parseFloat(curstate));
      break;
      case "+": 
      cal =String(parseFloat(prestate)+parseFloat(curstate));
      break;
      case "-": 
          cal = String(parseFloat(prestate)-parseFloat(curstate));
      break; 
      default: 
      return;
  }
  setinput("")
  setprestate(cal)
  setcurstate("")
  }
  return (


   <div className="body" style={style}>
   <div className="header">
     <h1 >Calculatorapp <span>Light Theme</span></h1>
   </div>
 <div className="container" style={CALSTYLE}>
<div className="wrapper">
  <div className="screen"> {input !=="" || input ==="0" ? <NumberFormat value={input} displayType={'text'}/>:<NumberFormat value={prestate} displayType={'text'}/>} </div>
    <div className="btn light-gray" onClick={reset}>AC</div>
    <div className="btn org" onClick={opera}>-</div>

    <div className="btn org" onClick={opera}>/</div>
    <div className="btn org" onClick={opera}>X</div>
    <div className="btn" onClick={inputNum} value="7">7</div>
    <div className="btn" onClick={inputNum} value="8">8</div>
    <div className="btn" onClick={inputNum} value="9">9</div>
    <div className="btn org" onClick={opera}>+</div>
    <div className="btn" onClick={inputNum} value="4">4</div>
    <div className="btn" onClick={inputNum} value="5">5</div>
    <div className="btn" onClick={inputNum} value="6">6</div>
    <div className="btn org" onClick={equal}>=</div>
    <div className="btn" onClick={inputNum} value="1">1</div>
    <div className="btn" onClick={inputNum} value="2">2</div>
    <div className="btn" onClick={inputNum} value="3">3</div>
    <div className="btn" onClick={inputNum} value="0">0</div>




</div>
 </div>
 <footer>
   <button onClick={drk}>Enable theme</button>
 </footer>
   </div>
  );
}

export default App;
