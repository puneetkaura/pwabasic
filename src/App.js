import './App.css';
import DATA from './data';

import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from 'react';


function App() {
  let devicewidth = 1440
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name")
  const lmpDate = searchParams.get("lmpDate")
  const [activeDesc, setActiveDesc] = useState(1)
  const [accordianOpen, setAccordianOpen] = useState(false)
  const handleAccordian = (activeId) => {

    if (activeId === activeDesc) {
      setAccordianOpen(!accordianOpen);
    } else {
      setAccordianOpen(true);
    }

    setActiveDesc(activeId);
  }


  useEffect(() => {
    devicewidth = window.innerWidth
    console.log(devicewidth)
  });

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
              {
                window.innerWidth > 768 &&
                <>
                  <th>Tri-month</th>
                  <th>Month</th>
                </>
              }
              
              <th>Week</th>
              <th>DueDate</th>
            </tr>
          </thead>
          <tbody>
            {
              //  DATA.filter(item => item.StartDate > lmpDate).map((item)=>(
              DATA.map((item) => (
                <>

                  <tr className="bg-gray-100  accordion text-left" onClick={() => handleAccordian(item["Id"])}>

                    <td className='text-pink-700 text-1xl'>
                      {item["Id"]}
                    </td>
                    <td>{item["Checkup"]}

                    </td>
                    {
                      window.innerWidth > 768 &&
                      <>
                        <td>{item["Trimsester"]}
                        </td>
                        <td>{item["Pregnancymonth"]}</td>
                      </>
                    }

                    <td>{item["Weekdue"]}</td>
                    <td>{item["DueDate"]}</td>

                  </tr>

                  {
                    item["Id"] === activeDesc && accordianOpen &&
                    <tr>

                      <td colSpan={window.innerWidth > 768 ? 5 : 3}>

                        <div className='accordian-content'>
                          {item["Importance"]}
                        </div>
                      </td>
                      <td >
                        <a href='https://www.youtube.com/watch?v=aJgAwjP20RY&t=11s' target='_blank'>veiw video</a>
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
