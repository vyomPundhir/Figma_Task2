import Candidates from './Candidates'
import Internship from './Internship'
import "../index.css"

const Right = () => {

  return (
    <div className='bg-[#e7e8ed] flex flex-row'>
      <Internship/>
      <Candidates/>
    </div>
  )
}

export default Right