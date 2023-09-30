import Candidates from './Candidates'
import Internship from './Internship'

const Right = () => {
  return (
    <div className='pl-[100px] py-8 flex flex-row justify-between'>
      <Internship/>
      <Candidates/>
    </div>
  )
}

export default Right