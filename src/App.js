import './App.css';
import DATA from './data';

import { useSearchParams } from "react-router-dom";



function App() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name")
  const lmpDate = searchParams.get("lmpDate")
  return (
    <div className="App">
      <div class="h-full w-full bg-blue-500 w-1/2 p-2 mx-auto text-center border">
     
        <><h1 class="text-4xl text-center text-white 	height: 1px;">Pregnancy Tests Chart By Dr Richa Malhan</h1><br/>
       
        <div className='	flex-direction: column-reverse;'><h2 class="text-2xl">
          <span className='text-white text-2xl'> Patient Name : {name}   LMP Date : {lmpDate} </span> </h2> </div>
        </>
       
         
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
              <th>Week due</th>
              <th>Start Date</th>
              <th>Due Date</th>
            </tr>
      </thead>
     
      <tbody>
       {
       
      //  DATA.filter(item => item.StartDate > lmpDate).map((item)=>(
        DATA.map((item)=>(
        <tr class="even:bg-gray-100 odd:bg-white">
        <td className='text-pink-700 text-3xl'>{item["Id"]}</td>
        <td>{item["Checkup"]}</td>
        <td>{item["Importance"]}</td>
        <td>{item["Trimsester"]}</td>
        <td>{item["Pregnancymonth"]}</td>
        <td>{item["Startweek"]}</td>
        <td>{item["Weekdue"]}</td>
        <td>{item["StartDate"]}</td>
        <td>{item["DueDate "]}</td>
      </tr>
      ))}
       
      </tbody>
      </table>
  
    </div>
  );
}

export default App;
