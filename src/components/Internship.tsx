import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
const Internship = () => {
  const items: MenuProps['items'] = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];
  
  
  return (
    <div className="h-full w-[400px] overflow-y-scroll scrollbar-hidden bg-[#F9FAFF]">

      <div>
        <div className="text-[#1D4ED8] font-[700] text-[18px]">
          London Internship Program
        </div>

        <div className="text-[12px] font-[400] text-[black]">London</div>
      </div>

      <div className="flex flex-row items-center">
        <img src="src\assets\search.svg" alt="search" className='w-[15px] h-[15px]' />
        <input type="search" name="search" id="" placeholder='Search by name, edu, exp or #tag' className='bg-transparent border-[#F9FAFF] border-0' />
      </div>

      <div className='flex flex-col'>
        <div className="flex flex-row">
          <div className="font-[500]">Filters</div>
          <div>0 selected</div>
        </div>

        {/* <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" /> 
            <div className="collapse-title text-xl font-medium">
              Personal Information
            </div>
            <div className="collapse-content"> 
              <p>hello</p>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border  border-base-300">
            <input type="radio" name="my-accordion-4" /> 
            <div className="collapse-title text-xl font-medium">
              Education
            </div>
            <div className="collapse-content"> 
              <p>hello</p>
            </div>
          </div>
          
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" /> 
            <div className="collapse-title text-xl font-medium">
              Work Experience
            </div>
            <div className="collapse-content"> 
              <p>hello</p>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" /> 
            <div className="collapse-title text-xl font-medium">
              Activity Filter
            </div>
            <div className="collapse-content"> 
              <p>hello</p>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" /> 
            <div className="collapse-title text-xl font-medium">
              Advanced Filter
            </div>
            <div className="collapse-content"> 
              <p>hello</p>
            </div>
          </div>
        </div> */}
        <Dropdown menu={{ items }} trigger={['click']}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Click me
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>

        <Dropdown menu={{ items }} trigger={['click']}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Click me
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>

        <Dropdown menu={{ items }} trigger={['click']}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Click me
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>

        <Dropdown menu={{ items }} trigger={['click']}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Click me
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>

        <Dropdown menu={{ items }} trigger={['click']}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Click me
            </Space>
          </a>
        </Dropdown>


{/* const App: React.FC = () => (
  
); */}

      </div>
    </div>
  )
}

export default Internship