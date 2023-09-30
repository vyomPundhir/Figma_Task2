const Navbar = () => {
  return (
    <aside className="h-full fixed flex w-16 flex-col items-center gap-[60px] overflow-y-scroll scrollbar-hidden border-r bg-white py-8">
      <nav className="flex flex-1 flex-col items-center justify-between space-y-6"> 

        <a href="#">
          <div className="w-[30px] h-[30px] bg-[#b8b8b8] rounded-full"></div>
        </a>

        <a
          href="#"
          className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-[#cecece] focus:bg-[#cecece]"
        >
          <img src="src\assets\home.svg" alt="" className="w-[20px] h-[20px]"/>
        </a>

        <a
          href="#"
          className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-[#cecece] focus:bg-[#cecece]"
        >
          <img src="src\assets\users.svg" alt="" className="w-[20px] h-[20px]"/>
        </a>

        <a
          href="#"
          className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-[#cecece] focus:bg-[#cecece]"
        >
          <img src="src\assets\calender.svg" alt="" className="w-[20px] h-[20px]"/>
        </a>

        <a
          href="#"
          className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-[#cecece] focus:bg-[#cecece]"
        >
          <img src="src\assets\share.svg" alt="" className="w-[20px] h-[20px]"/>
        </a>

        <a
          href="#"
          className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-[#cecece] focus:bg-[#cecece]"
        >
          <img src="src\assets\docs.svg" alt="" className="w-[20px] h-[20px]"/>
        </a>

        <a
          href="#"
          className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-[#cecece] focus:bg-[#cecece]"
        >
          <img src="src\assets\book.svg" alt="" className="w-[20px] h-[20px]"/>
        </a>

        <a
          href="#"
          className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-[#cecece] focus:bg-[#cecece]"
        >
          <img src="src\assets\heart.svg" alt="" className="w-[20px] h-[20px]"/>
        </a>

        <a
          href="#"
          className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-[#cecece] focus:bg-[#cecece]"
        >
          <img src="src\assets\left-arrow.svg" alt="" className="w-[20px] h-[20px]"/>
        </a>

      </nav>

      <div className="flex flex-col items-center justify-between space-y-6">
        
        <a
          href="#"
          className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-[#cecece] focus:bg-[#cecece]"
        >
          <img src="src\assets\setting.svg" alt="" className="w-[20px] h-[20px]"/>
        </a>

        <a href="#">
          <img
            className="h-8 w-8 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="User avatar"
          />
        </a>
      </div>
    </aside>
  )
}

export default Navbar