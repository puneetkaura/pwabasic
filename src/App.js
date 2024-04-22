import './App.css';
import DATA from './data';
import Accordion from './accordian'
import { useSearchParams } from "react-router-dom";


function App() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name")
  const lmpDate = searchParams.get("lmpDate")
  return (
    <div className="App">
      <div class="sticky top-0 left-0 w-full bg-blue-700">
        <><h1 class="text-1xl text-left text-white">Pregnancy Tests Chart By Dr Richa Malhan</h1>
          <div className=' text-left	flex-direction: column-reverse;'><h2 class="text-sm">
            <span className='text-white text-sm '> Patient Name : {name}   LMP Date : {lmpDate} </span> </h2> </div>
        </>
      </div>
     
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
     
      <table  class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-4 bg-indigo-50 dark:bg-indigo-800">Id</th> 
            <th scope="col" class="px-6 py-4 bg-indigo-50 dark:bg-indigo-800">Test</th>
            <th  scope="col" class="px-6 py-4 bg-indigo-50 dark:bg-indigo-800">Tri-month</th>
            <th scope="col" class="px-6 py-4 bg-indigo-50 dark:bg-indigo-800">Month</th>
            <th scope="col" class="px-6 py-4 bg-indigo-50 dark:bg-indigo-800">Week</th>
            <th scope="col" class="px-6 py-4 bg-indigo-50 dark:bg-indigo-800">Date</th>
          </tr>
        </thead>
        <tbody>
          {
            //  DATA.filter(item => item.StartDate > lmpDate).map((item)=>(
            DATA.map((item) => (
              <>
                <div className='accordion w-full text-left text-teal-700'>
                  <Accordion Importance={item["Importance"]} />
                </div>
                <tr className="even:bg-gray-100 odd:bg-white accordion text-left">
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

              </>

            ))}
        </tbody>
      </table>
      </div>
      </div>
  );
}

export default App;
