
import React ,{useState} from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import { navigate } from '@reach/router';

const Create = (props) => {
    const [dailyIncome,setDailyIncome]=useState(props.initialDailyIncome)
    const [expenses,setExpenses]=useState(props.initialExpenses)
    const [debts,setDebts]=useState(0)
    const [select , setSelect] = useState(props.initialSelect)
    const [food,setFood]=useState(0)
    const [residence,setResidence]=useState(0)
    const [transport,setTransport]=useState(0)
    const [clothes,setClothes]=useState(0)
    const [health,setHealth]=useState(0)
    const [entertainment,setEntertainment]=useState(0)
    const [maintenance,setMaintenance]=useState(0)
    const [other,setOther]=useState(0)
  


    var data = JSON.parse(sessionStorage.getItem('user'))


    const handleSubmet=(e)=>{
//       var dayClicked = true;
//       if (dayClicked) {
//         alert("Error!");
//     }
//     else {
//       variable += 1;
//       dayClicked = false;
//   }
//   setTimeout(function() {
//     dayClicked = true;
// }, 86400000);

        e.preventDefault();
        var sum=0 
        sum = parseInt(food) + parseInt(residence) + parseInt(transport) + parseInt(clothes) + parseInt(health) + parseInt(entertainment) + parseInt(maintenance) + parseInt(other) + parseInt(debts)
        props.onSubmitProp(dailyIncome , debts , expenses , food , residence , transport , clothes , health , entertainment , maintenance , other ,sum );

    }
    const navToHome =() =>{
      navigate("/home/")
    }
  
    
  return (
 
    <div>
      <h1>Add / Update your Finance for Today </h1>
      <button onClick={navToHome}>Home Page</button>
      <form onSubmit={handleSubmet}>
        <div>
            <h3>Daily Income:</h3>
            <input type="number" value={dailyIncome} onChange={(e)=>setDailyIncome(e.target.value)}></input>
        </div>
        <div>
          <br></br>
            <h3>Expenses</h3>
            <p>Food : <input type="number" value={food} onChange={(e)=>setFood(e.target.value)}></input></p>
            <p>Residence : <input type="number" value={residence} onChange={(e)=>setResidence(e.target.value)}></input></p>
            <p>Transport : <input type="number" value={transport} onChange={(e)=>setTransport(e.target.value)}></input></p>
            <p>Clothes : <input type="number" value={clothes} onChange={(e)=>setClothes(e.target.value)}></input></p>
            <p>Health : <input type="number" value={health} onChange={(e)=>setHealth(e.target.value)}></input></p>
            <p> Entertainment : <input type="number" value={entertainment} onChange={(e)=>setEntertainment(e.target.value)}></input></p>
            <p> Maintenance :<input type="number" value={maintenance} onChange={(e)=>setMaintenance(e.target.value)}></input></p>
            <p> Others : <input type="number" value={other} onChange={(e)=>setOther(e.target.value)}></input></p>
           
        </div>  
        <button style={{backgroundColor:"blue"}}>Add </button>
       
      </form>
      {props.children}
    </div>
  )
}

export default Create
