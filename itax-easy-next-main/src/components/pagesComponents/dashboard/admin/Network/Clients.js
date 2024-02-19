import DashSection from "@/components/pagesComponents/pageLayout/DashSection"


const Clients = () => {
  return (
    <>
        <DashSection title={"All Clients"} titleRight={"current year - 2024"}>
                    <div >

        <table class="w-full border border-slate-500  text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs bg-blue-500 text-neutral-50   dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th
                scope="col"
                class="border border-slate-600 px-6 py-3"
                
              >
               
                Name
              </th>
              <th
                scope="col"
                class="border border-slate-600 px-6 py-3"
               
              >
                
                Email
                
              </th>
              <th scope="col" className="border border-slate-600 text-center" >
              Phone
              </th>
              <th scope="col" className="border border-slate-600 text-center" >
              Aadhaar
              </th>
              <th scope="col" className="border border-slate-600 text-center" >
              Pan
              </th>
              <th scope="col" className="border border-slate-600 text-center" >
              User Type
              </th>
            </tr>
          </thead>
          <tbody>
         
            <tr >
            <td className="border border-slate-600">
                <input
                  type="text"
                  id="small-input"
                 
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  id="small-input"
                  
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              
              <td className="border border-slate-600">
                <input
                  type="text"
                  id="small-input"
   
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  id="small-input"
                  
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  id="small-input"
                 
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td className="border border-slate-600">
                <input
                  type="text"
                  id="small-input"
                
                  class="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
            
             
            </tr>
       
          
   
          </tbody>
        </table>


        </div>
       
      </DashSection>
    
    
    
    </>
  )
}

export default Clients