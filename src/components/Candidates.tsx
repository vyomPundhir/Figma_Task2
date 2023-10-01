import Card from "./Card"
import "../data"
import { Data } from "../data"

const Candidates = () => {
  return (
    <div className="candidates w-3/5 flex flex-col gap-[33px]">
      <div className="topbar flex flex-row justify-between mt-[20px]">
        <div className="topleft">

          <details className="dropdown">
            <summary className="rounded-[20px] flex flex-row items-center justify-start gap-[50px] btn bg-[white] hover:bg-[#ffffff] text-[#1D4ED8] font-[700] text-[14px]">
              Opportunity Browsing
              <img src="src\assets\down-arrow-blue.png" alt="" className="w-[19px] bg-transparent"/>
            </summary>

            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-[280px]">
              <li><a>Applied</a></li>
              <li><a>Shortlisted</a></li>
              <li><a>Technical Interview</a></li>
              <li><a>Opportunity Browsing</a></li>
              <li><a>Video Interview I</a></li>
              <li><a>Video Interview II</a></li>
              <li><a>Video Interview III</a></li>
              <li><a>Offer</a></li>
              <li><a>Withdrawn</a></li>
            </ul>
          </details>
        </div>

        <div className="topright flex flex-row items-center w-[380px] gap-[10px]">
          <div className="bg-[white] flex flex-row justify-center items-center w-[29px] h-[29px] rounded-[5px]">
            <img src="src\assets\tag.svg" alt="" className="w-[18px] h-[18px] bg-[white]"/>
          </div>

          <div className="bg-[white] flex flex-row justify-center items-center w-[28px] h-[28px] rounded-[5px]">
            <img src="src\assets\user-cross.svg" alt="" className="w-[22px] h-[22px] bg-white"/>
          </div>

          <div className="bg-[white] flex flex-row justify-center items-center w-[28px] h-[28px] rounded-[5px]">
            <img src="src\assets\user-check.svg" alt="" className="w-[22px] h-[22px] bg-white"/>
          </div>

          <div className="bg-[white] flex flex-row justify-center items-center w-[28px] h-[28px] rounded-[5px]">
            <img src="src\assets\user-speak.svg" alt="" className="w-[22px] h-[22px] bg-white"/>
          </div>

          <div className="bg-[white] flex flex-row justify-center items-center w-[28px] h-[28px] rounded-[5px]">
            <img src="src\assets\mail.svg" alt="" className="w-[22px] h-[22px] bg-white"/>
          </div>

          <button className="px-2 text-[13px] text-[white] flex flex-row items-center bg-[#1D4ED8] h-[35px] rounded-[7px] gap-[5px]">
            Move to Video Interview |
            <img src="src\assets\down-arrow-white.svg" alt="" className="w-[15px] h-[15px] bg-[#1D4ED8]"/>
          </button>
        </div>
      </div>
      
      <div className="candidate-list w-full h-auto flex flex-col gap-[5px]">

        <div className="rounded-[10px] px-[10px] py-[15px] list-top bg-white flex flex-row justify-between">

          <div className="bg-transparent flex flex-row gap-[25px] items-center">
            <input type="checkbox" name="" id="" className="w-[17px] h-[17px] cursor-pointer" />
            <span className="bg-transparent text-[14px] font-[700] text-[#1D4ED8]">247 Candidates</span>
          </div>

          <div className="bg-transparent flex flex-row items-center gap-[10px]">

            <div className="bg-white text-[13px] font-[600] text-[#1D4ED8]  flex flex-row gap-[10px]">
              Qualified
              <span className="text-[#d2d1d1] bg-white font-[500]">|</span>
            </div>

            <div className="bg-white text-[13px] font-[600] flex flex-row gap-[10px]">
              Task
              <span className="flex flex-row items-center justify-center w-[20px] h-[20px] rounded-full text-[10px] font-[500]">25</span>
              <span className="text-[#d2d1d1] bg-white font-[500]">|</span>
            </div>

            <div className="bg-white text-[13px] font-[600] flex flex-row gap-[10px]">
              Disqualified
              <span className="flex flex-row items-center justify-center w-[20px] h-[20px] rounded-full text-[10px] font-[500]">78</span>
            </div>

          </div>
        
        </div>

        <div className="flex flex-col gap-[5px]">
          {
            Data.map((dt ,index)=>(
              <div key={index}>
                <Card name={dt.Name} city={dt.Location.city} nation={dt.Location.country} course={dt.Education.course} university={dt.Education.university} session={dt.Education.session} />
              </div>
            ))
          }
        </div>

      </div>

    </div>
  )
}

export default Candidates