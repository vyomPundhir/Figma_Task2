import Card from "./Card"
import "../data"
import { Data } from "../data"
import { useState } from "react"
import tag from "../assets/tag.png"
import cross from "../assets/user-cross.png"

const Candidates = () => {

  const [selectedCategory, setSelectedCategory] = useState<string | 'All'>('All');

  const filteredData = selectedCategory === 'All' ? Data : Data.filter(item => item.Category === selectedCategory);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="candidates w-3/5 flex flex-col gap-[33px]">
      <div className="topbar flex flex-row justify-between mt-[20px]">
        <div className="topleft">

          <select value={selectedCategory} onChange={handleCategoryChange} className="select w-[300px] text-[#1D4ED8] text-[17spx] font-[700] bg-[white]">
            <option disabled selected className="w-[300px] h-[40px]">Select a Category</option>
            <option className="text-[black]">All</option>
            <option className="text-[black]">Applied</option>
            <option className="text-[black]">Shortlisted</option>
            <option className="text-[black]">Technical Interview</option>
            <option className="text-[black]">Opportunity Browsing</option>
            <option className="text-[black]">Video Interview I</option>
            <option className="text-[black]">Video Interview II</option>
            <option className="text-[black]">Video Interview III</option>
            <option className="text-[black]">Offer</option>
            <option className="text-[black]">Withdrawn</option>
          </select>

        </div>

        <div className="topright flex flex-row items-center w-[380px] gap-[10px]">
          <div className="bg-[white] flex flex-row justify-center items-center w-[29px] h-[29px] rounded-[5px] cursor-pointer">
            <img src={tag} alt="" className="w-[18px] h-[18px] bg-[white]"/>
          </div>

          <div className="bg-[white] flex flex-row justify-center items-center w-[28px] h-[28px] rounded-[5px] cursor-pointer">
            <img src={cross} alt="" className="w-[22px] h-[22px] bg-white"/>
          </div>

          <div className="bg-[white] flex flex-row justify-center items-center w-[28px] h-[28px] rounded-[5px] cursor-pointer">
            <img src="src\assets\user-check.png" alt="" className="w-[22px] h-[22px] bg-white"/>
          </div>

          <div className="bg-[white] flex flex-row justify-center items-center w-[28px] h-[28px] rounded-[5px] cursor-pointer">
            <img src="src\assets\user-speak.png" alt="" className="w-[22px] h-[22px] bg-white"/>
          </div>

          <div className="bg-[white] flex flex-row justify-center items-center w-[28px] h-[28px] rounded-[5px] cursor-pointer">
            <img src="src\assets\mail.png" alt="" className="w-[22px] h-[22px] bg-white"/>
          </div>

          <select className="px-2 text-[13px] text-[white] flex flex-row items-center bg-[#1D4ED8] h-[35px] rounded-[7px] gap-[5px] cursor-pointer">
            <img src="src\assets\down-arrow-white.png" alt="" className="w-[15px] h-[15px] bg-[#1D4ED8]"/>
            <option disabled selected className="w-[300px] h-[40px]">Move to Video Interview |</option>
            <option className="text-[black]">Video Interview I</option>
            <option className="text-[black]">Video Interview II</option>
            <option className="text-[black]">Video Interview III</option>
          </select>
        </div>
      </div>
      
      <div className="candidate-list w-full h-auto flex flex-col gap-[5px]">

        <div className="rounded-[10px] px-[10px] py-[15px] list-top bg-white flex flex-row justify-between">

          <div className="bg-white flex flex-row gap-[25px] items-center ">
            <input type="checkbox" name="" id="" className="w-[17px] h-[17px] cursor-pointer" />

            <span className="bg-transparent text-[14px] font-[700] text-[#1D4ED8]">{filteredData.length} Candidates</span>
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

        <div className="filteredObjects flex flex-col gap-[5px]">
          {
            filteredData.map((dt ,index)=>(
              <div key={index}>
                <Card name={dt.Name} city={dt.Location.city} nation={dt.Location.country} course={dt.Education.course} university={dt.Education.university} session={dt.Education.session}/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Candidates