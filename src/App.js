import './App.css';
import DATA from './data';
import Accordion from './accordian'
import { useSearchParams } from "react-router-dom";
import { useState } from 'react';


function App() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name")
  const lmpDate = searchParams.get("lmpDate")
  const [activeDesc, setActiveDesc] = useState(1)
  const [accordianOpen,setAccordianOpen]=useState(false)
  const handleAccordian = (activeId) => {

    if(activeId == activeDesc) {
        setAccordianOpen(!accordianOpen);
    } else {
        setAccordianOpen(true);
    }

    setActiveDesc(activeId);
}

  return (
    <div className="App">
      <div className="sticky top-0 left-0 w-full bg-blue-700 z-50">
        <><h1 className="text-1xl text-center text-white">Pregnancy Tests Chart By Dr Richa Malhan</h1>
          <div className=' text-center	flex-direction: column-reverse;'><h2 class="text-sm">
            <span className='text-white text-sm '> Patient Name : {name}   LMP Date : {lmpDate} </span> </h2> </div>
        </>
      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">

        <table class="text-sm text-left">
          <thead class=" font-semi-bold leading-tight h-full w-full bg-teal-400 w-1/2 p-4 mx-auto text-center text-pink-700 border">
            <tr class="bg-white">
              <th>Id</th>
              <th>Test</th>
              <th>Tri-month</th>
              <th>Month</th>
              <th>Week</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {
              //  DATA.filter(item => item.StartDate > lmpDate).map((item)=>(
              DATA.map((item) => (
                <>
                
                  <tr className="bg-gray-100  accordion text-left" onClick={()=>handleAccordian(item["Id"])}>

                    <td className='text-pink-700 text-1xl'>
                      {item["Id"]}
                    </td>
                    <td>{item["Checkup"]}

                    </td>
                    <td>{item["Trimsester"]}</td>
                    <td>{item["Pregnancymonth"]}</td>
                    <td>{item["Weekdue"]}</td>
                    <td>{item["DueDate"]}</td>

                  </tr>
        
                  {
                    item["Id"]==activeDesc && accordianOpen &&
                    <tr>
                     
                    <td colSpan={6}>
                      <div className='accordian-content'>
                        {item["Importance"]}
                      </div>
                    </td>
                  </tr>}
                </>

              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
