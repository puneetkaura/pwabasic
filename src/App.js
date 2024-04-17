import './App.css';
import DATA from './data';

import { useSearchParams } from "react-router-dom";



function App() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name")
  const lmpDate = searchParams.get("lmpDate")
  return (
    <div className="App">
      <div class="h-full w-full bg-teal-400 w-1/2 p-4 mx-auto text-center border">
     
        <><h1 class="text-4xl text-center text-pink-700	 ">Mrs. Anjali chikkara PREGNANCY TRACKER</h1><br></br>
        <><h2 class="text-2xl"> Full Name : {name} </h2><h2 class="text-2xl"> lmpDate : {lmpDate} </h2></></>
         
    </div>
    <table>
      <thead class="h-full w-full bg-teal-400 w-1/2 p-4 mx-auto text-center text-pink-700 border">
        <tr class="bg-white">
             <th>Id</th>
              <th>Checkup</th>
              <th>Importance</th>
              <th>Trimsester</th>
              <th>Pregnancy month</th>
              <th>Start week</th>
              <th>End week</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
      </thead>
     
      <tbody>
       {
        // DATA.filter(item => item.StartDate > lmpDate).map((item)=>
        DATA.map((item)=>(
        <tr class="even:bg-gray-100 odd:bg-white">
        <td className='text-pink-700 text-3xl'>{item["Id"]}</td>
        <td>{item["Checkup"]}</td>
        <td>{item["Importance"]}</td>
        <td>{item["Trimsester"]}</td>
        <td>{item["Pregnancymonth"]}</td>
        <td>{item["Startweek"]}</td>
        <td>{item["Endweek"]}</td>
        <td>{item["StartDate"]}</td>
        <td>{item["EndDate "]}</td>
      </tr>
      ))}
       
      </tbody>
      </table>
  
    </div>
  );
}

export default App;
