import "../index.css"
const Internship = () => {

  return (
    <div className="min-h-screen w-[405px] overflow-y-scroll scrollbar-hidden bg-[#e7e8ed] flex flex-col gap-[20px] items-center ml-[64px] pt-8">

      <div className="flex flex-col gap-[5px] bg-[#e7e8ed]">
        <div className="w-[350px] text-[#1D4ED8] font-[700] text-[18px] bg-[#e7e8ed]">
          London Internship Program
        </div>

        <div className="text-[12px] font-[400] text-[black] bg-[#e7e8ed]">London</div>
      </div>

      <div className="flex flex-row items-center justify-between w-[350px] bg-[white] px-3 py-2 rounded-[5px]">

        <div className="flex flex-row items-center gap-[14px] bg-transparent">
          <img src="src\assets\search.svg" alt="search" className='w-[14px] h-[14px] bg-transparent' />

          <input type="search" name="search" id="" placeholder='Search by name, edu, exp or #tag' className='w-[250px] text-[14px] bg-transparent focus:outline-none'/>
        </div>

        <div className="bg-transparent w-[15px] h-[15px] flex justify-center items-center border-[1.5px] border-[#c5c4c4] text-[#bdbdbd] text-[10px] rounded-full">!</div>

      </div>

      <div className='flex flex-col w-[350px] gap-[4px]'>
        <div className="bg-[white] flex flex-row justify-between w-[350px] px-3 py-3 rounded-[5px]">
          <div className="font-[700] text-[12px] text-[black] bg-transparent">Filters</div>
          <div className="font-[500] text-[12px] text-[black] bg-transparent">0 Selected</div>
        </div>

        <div className="flex flex-col gap-[2px]">

          <div className="collapse bg-base-200">
            <input type="checkbox" /> 
            <div className="collapse-title text-[14px] flex flex-row items-center justify-start gap-[110px] bg-[white]">
              <div className="items-center bg-transparent flex flex-row gap-[8px] w-[200px]">
                <img src="src\assets\docs.svg" alt="" className="w-[15px] h-[15px] bg-transparent"/>
                Personal Information
              </div>
              <img src="src\assets\down-arrow.svg" alt="" className="w-[15px] h-[15px] bg-transparent"/>
            </div>

            <div className="collapse-content bg-white">
              <div className="flex flex-row gap-[10px] bg-white">
                <input type="checkbox" name="name" id="name" className="cursor-pointer"/>
                <p className="text-[14px] bg-transparent">Name</p>
              </div>
              <div className="flex flex-row gap-[10px] bg-white">
                <input type="checkbox" name="name" id="name" className="cursor-pointer"/>
                <p className="text-[14px] bg-transparent">Age Range</p>
              </div>
              <div className="flex flex-row gap-[10px] bg-white">
                <input type="checkbox" name="name" id="name" className="cursor-pointer"/>
                <p className="text-[14px] bg-transparent">Gender</p>
              </div>
              <div className="flex flex-row gap-[10px] bg-white">
                <input type="checkbox" name="name" id="name" className="cursor-pointer"/>
                <p className="text-[14px] bg-transparent">Contact Information</p>
              </div>
            </div>
            
          </div>

          <div className="collapse bg-base-200">
            <input type="checkbox" /> 
            <div className="collapse-title text-[14px] flex flex-row items-center justify-start gap-[110px] bg-[white]">
              <div className="items-center bg-transparent flex flex-row gap-[8px] w-[200px]">
                <img src="src\assets\docs.svg" alt="" className="w-[15px] h-[15px] bg-transparent"/>
                Education
              </div>
              <img src="src\assets\down-arrow.svg" alt="" className="w-[15px] h-[15px] bg-transparent"/>
            </div>
            <div className="collapse-content bg-white">
              <div className="flex flex-row gap-[10px] bg-white">
                <input type="checkbox" name="name" id="name" className="cursor-pointer"/>
                <p className="text-[14px] bg-transparent">Institution</p>
              </div>
              <div className="flex flex-row gap-[10px] bg-white">
                <input type="checkbox" name="name" id="name" className="cursor-pointer"/>
                <p className="text-[14px] bg-transparent">Degree Level</p>
              </div>
              <div className="flex flex-row gap-[10px] bg-white">
                <input type="checkbox" name="name" id="name" className="cursor-pointer"/>
                <p className="text-[14px] bg-transparent">Major/Field of Study</p>
              </div>
              <div className="flex flex-row gap-[10px] bg-white">
                <input type="checkbox" name="name" id="name" className="cursor-pointer"/>
                <p className="text-[14px] bg-transparent">Graduation Year</p>
              </div>
            </div>
          </div>

          <div className="collapse bg-base-200">
            <input type="checkbox" /> 
            <div className="collapse-title text-[14px] flex flex-row items-center justify-start gap-[110px] bg-[white]">
              <div className="items-center bg-transparent flex flex-row gap-[8px] w-[200px]">
                <img src="src\assets\docs.svg" alt="" className="w-[15px] h-[15px] bg-transparent"/>
                Work Experience
              </div>
              <img src="src\assets\down-arrow.svg" alt="" className="w-[15px] h-[15px] bg-transparent"/>
            </div>
            <div className="collapse-content bg-white">
              <div className="flex flex-row gap-[10px] bg-white">
                <input type="checkbox" name="name" id="name" className="cursor-pointer"/>
                <p className="text-[14px] bg-transparent">Job Title</p>
              </div>
              <div className="flex flex-row gap-[10px] bg-white">
                <input type="checkbox" name="name" id="name" className="cursor-pointer"/>
                <p className="text-[14px] bg-transparent">Company</p>
              </div>
              <div className="flex flex-row gap-[10px] bg-white">
                <input type="checkbox" name="name" id="name" className="cursor-pointer"/>
                <p className="text-[14px] bg-transparent">Industry</p>
              </div>
              <div className="flex flex-row gap-[10px] bg-white">
                <input type="checkbox" name="name" id="name" className="cursor-pointer"/>
                <p className="text-[14px] bg-transparent">Years of Experience</p>
              </div>
            </div>
          </div>

          <div className="collapse bg-base-200 ">
            <input type="checkbox" /> 
            <div className="collapse-title text-[14px] flex flex-row items-center justify-start gap-[110px] bg-[white]">
              <div className="items-center bg-transparent flex flex-row gap-[8px] w-[200px]">
                <img src="src\assets\docs.svg" alt="" className="w-[15px] h-[15px] bg-transparent"/>
                Activity Filter
              </div>
              <img src="src\assets\down-arrow.svg" alt="" className="w-[15px] h-[15px] bg-transparent"/>
            </div>
            <div className="collapse-content bg-white">
              <div className="flex flex-row gap-[10px] bg-white">
                <input type="checkbox" name="name" id="name" className="cursor-pointer"/>
                <p className="text-[14px] bg-transparent">Recent Activity</p>
              </div>
              <div className="flex flex-row gap-[10px] bg-white">
                <input type="checkbox" name="name" id="name" className="cursor-pointer"/>
                <p className="text-[14px] bg-transparent">Online Status</p>
              </div>
              <div className="flex flex-row gap-[10px] bg-white">
                <input type="checkbox" name="name" id="name" className="cursor-pointer"/>
                <p className="text-[14px] bg-transparent">Engagement Level</p>
              </div>
            </div>
          </div>

          <div className="collapse bg-base-200">
            <input type="checkbox" /> 
            <div className="collapse-title text-[14px] flex flex-row items-center justify-start gap-[110px] bg-[white]">
              <div className="items-center bg-transparent flex flex-row gap-[8px] w-[200px]">
                <img src="src\assets\docs.svg" alt="" className="w-[15px] h-[15px] bg-transparent"/>
                Advanced Filter
              </div>
            </div>
            <div className="collapse-content bg-white">
              <div className="flex flex-row gap-[10px] bg-white">
                <input type="checkbox" name="name" id="name" className="cursor-pointer"/>
                <p className="text-[14px] bg-transparent">Custom Tags</p>
              </div>
              <div className="flex flex-row gap-[10px] bg-white">
                <input type="checkbox" name="name" id="name" className="cursor-pointer"/>
                <p className="text-[14px] bg-transparent">Location Radius</p>
              </div>
              <div className="flex flex-row gap-[10px] bg-white">
                <input type="checkbox" name="name" id="name" className="cursor-pointer"/>
                <p className="text-[14px] bg-transparent">Advanced Search Queries</p>
              </div>
              <div className="flex flex-row gap-[10px] bg-white">
                <input type="checkbox" name="name" id="name" className="cursor-pointer"/>
                <p className="text-[14px] bg-transparent">Membership Type</p>
              </div>
            </div>
          </div>

          
        </div>


        

        {/* <div className="flex flex-col gap-1">
          
          <div className="collapse bg-white w-[350px] h-[72px] rounded-[5px]">
            <input type="checkbox" /> 
            <div className="collapse-title text-sm font-medium bg-white">
              Personal Information
            </div>
            <div className="collapse-content h-[12px]"> 
              <p className="text-sm">hello</p>
            </div>
          </div>

          <div className="collapse bg-base-200">
            <input type="checkbox" /> 
            <div className="collapse-title text-sm font-medium">
              Education
            </div>
            <div className="collapse-content"> 
              <p className="text-sm">hello</p>
            </div>
          </div>

          <div className="collapse bg-base-200">
            <input type="checkbox" /> 
            <div className="collapse-title text-sm font-medium">
              Work Experince
            </div>
            <div className="collapse-content"> 
              <p className="text-sm">hello</p>
            </div>
          </div>

          <div className="collapse bg-base-200">
            <input type="checkbox" /> 
            <div className="collapse-title text-sm font-medium">
              Activity Filter
            </div>
            <div className="collapse-content"> 
              <p className="text-sm">hello</p>
            </div>
          </div>

          <div className="collapse bg-base-200">
            <input type="checkbox" /> 
            <div className="collapse-title text-sm font-medium">
              Advanced Filter
            </div>
            <div className="collapse-content"> 
              <p className="text-sm">hello</p>
            </div>
          </div>
                  </div> */}


{/* const App: React.FC = () => (
  
); */}

      </div>
    </div>
  )
}

export default Internship