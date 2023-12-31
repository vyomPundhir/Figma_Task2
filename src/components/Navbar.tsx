const Navbar = () => {
  return (
    <aside className="h-full fixed flex w-16 flex-col items-center gap-[60px] overflow-y-scroll scrollbar-hidden border-r bg-white py-8">
      <nav className="flex flex-1 flex-col items-center justify-between space-y-6 bg-transparent"> 

        <a href="#" className="bg-transparent">
          <div className="w-[30px] h-[30px] bg-[#b8b8b8] rounded-full"></div>
        </a>

        <a
          href="#"
          className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-[#cecece] bg-transparent focus:bg-[#cecece]"
        >
          <img src="src\assets\home.png" alt="" className="w-[20px] h-[20px] bg-transparent"/>
        </a>

        <a
          href="#"
          className="rounded-lg bg-transparent p-1.5 text-gray-700 transition-colors duration-200 hover:bg-[#cecece] focus:bg-[#cecece]"
        >
          <img src="src\assets\users.png" alt="" className="w-[20px] h-[20px] bg-transparent"/>
        </a>

        <a
          href="#"
          className="rounded-lg bg-transparent p-1.5 text-gray-700 transition-colors duration-200 hover:bg-[#cecece] focus:bg-[#cecece]"
        >
          <img src="src\assets\calender.png" alt="" className="w-[20px] h-[20px] bg-transparent"/>
        </a>

        <a
          href="#"
          className="rounded-lg bg-transparent p-1.5 text-gray-700 transition-colors duration-200 hover:bg-[#cecece] focus:bg-[#cecece]"
        >
          <img src="src\assets\share.png" alt="" className="w-[20px] h-[20px] bg-transparent"/>
        </a>

        <a
          href="#"
          className="rounded-lg bg-transparent p-1.5 text-gray-700 transition-colors duration-200 hover:bg-[#cecece] focus:bg-[#cecece]"
        >
          <img src="src\assets\docs.png" alt="" className="w-[20px] h-[20px] bg-transparent"/>
        </a>

        <a
          href="#"
          className="rounded-lg bg-transparent p-1.5 text-gray-700 transition-colors duration-200 hover:bg-[#cecece] focus:bg-[#cecece]"
        >
          <img src="src\assets\book.png" alt="" className="w-[20px] h-[20px] bg-transparent"/>
        </a>

        <a
          href="#"
          className="rounded-lg p-1.5 bg-transparent text-gray-700 transition-colors duration-200 hover:bg-[#cecece] focus:bg-[#cecece]"
        >
          <img src="src\assets\heart.png" alt="" className="w-[20px] h-[20px] bg-transparent"/>
        </a>

        <a
          href="#"
          className="rounded-lg bg-transparent p-1.5 text-gray-700 transition-colors duration-200 hover:bg-[#cecece] focus:bg-[#cecece]"
        >
          <img src="src\assets\left-arrow.png" alt="" className="w-[20px] h-[20px] bg-transparent"/>
        </a>

      </nav>

      <div className="flex flex-col items-center justify-between space-y-6  bg-transparent">
        
        <a
          href="#"
          className="rounded-lg bg-transparent p-1.5 text-gray-700 transition-colors duration-200 hover:bg-[#cecece] focus:bg-[#cecece]"
        >
          <img src="src\assets\setting.png" alt="" className="bg-transparent w-[20px] h-[20px]"/>
        </a>

        <a href="#" className="bg-transparent">
          <img
            className="h-8 w-8 rounded-full object-cover bg-transparent"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="User avatar"
          />
        </a>
      </div>
    </aside>
  )
}

export default Navbar