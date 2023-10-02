interface CardProps {
  name: string;
  city: string;
  nation: string;
  course: string;
  university: string;
  session: string;
}


  const Card = ({name, city, nation, course, university, session}: CardProps) => {
  
  return (
    <div className="bg-white card flex flex-row items-center gap-[20px] p-[10px]">

      <input type="checkbox" name="" id="" className="w-[17px] h-[17px] cursor-pointer"/>


      <div className="rounded-full bg-[#f3f1f1] w-[50px] h-[50px] flex flex-row justify-center items-center font-[700] text-[#6f95fe]">
        AS
      </div>

      <div className="details flex flex-col bg-[white]">

        <div className="text-[15px] font-[700] bg-[white]">{name}</div>

        <div className="flex flex-row gap-[8px] text-[12px] font-[600] bg-[white]">
          <span className=" bg-[white]">{city}</span>
          <span className=" bg-[white]">{nation}</span>
        </div>

        <div className="flex flex-row gap-[8px] text-[13px] bg-[white]">
          <span className=" bg-[white]">{course}</span>
          <span className=" bg-[white]">{university}</span>
          <span className=" bg-[white]">({session})</span>
        </div>

        <div className=" bg-[white] flex flex-row gap-[8px] text-[10px] text-[#1D4ED8] font-[500]">
          <span className=" bg-[white]">#top_candidate</span>
          <span className=" bg-[white]">#top_candidate</span>
        </div>

        <div className="flex flex-row gap-[8px] text-[10px] text-[#53c7ea] font-[500] bg-[white]">
          <span className="bg-[white]">New York</span>
          <span className="bg-[white]">Marketing</span>
          <span className="bg-[white]">London</span>
        </div>
      </div>

    </div>
  )
}

export default Card