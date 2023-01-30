import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components';

function SubMenu({item}) {
    const [subnav, setSubnav] = useState(false);
  
  const showSubnav = () => setSubnav(!subnav);

  const SidebarLink = styled(Link)`
    display: flex;
    color: #324054;
    justify-content: space-between;
    align-items: center;
    /* padding: 20px; */
    list-style: none;
    height: 50px;
    text-decoration: none;
    font-size: 16px;
    line-height: 20px;
    padding-right: 20px;
    font-weight: 500;
    
    &:hover {
        background: linear-gradient(128.03deg, rgba(97, 153, 219, 0.1) -0.78%, rgba(75, 202, 105, 0.1) 90.56%);
        border-left: 4px solid green;
        cursor: pointer;
    }
`;

const SidebarLabel = styled.span`
  margin-left: 20px;
  font-size: 16px;
`;

const DropdownLink = styled(Link)`
  background: linear-gradient(128.03deg, rgba(97, 153, 219, 0.1) -0.78%, rgba(75, 202, 105, 0.1) 90.56%);
  height: 50px;
  padding-left: 1.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: rgba(50, 64, 84, 0.7);
  font-size: 18px;
  
  &:hover {
    background: green;
    cursor: pointer;
    color: #ffffff;
  }
  `;

const Arrow = styled.div`
    font-size: 20px;
    color:  #71839B;
`


  return (
    <div>
        <SidebarLink to='' onClick={item.subNav && showSubnav}>
            <div className='flex items-center'>
                <span className=''>
                    {item.icon}
                </span>
                <SidebarLabel>{item.title}</SidebarLabel>
            </div>
            <Arrow>
                {item.subNav && subnav
                ? item.iconOpened
                : item.subNav
                ? item.iconClosed
                : null}
            </Arrow>
        </SidebarLink>
        {subnav &&
            item.subNav.map((item, index) => {
            return (
                <DropdownLink to={item.path} key={index}>
                    <span className='text-sm lg:text-2xl'> 
                        {item.icon}
                    </span>
                    <SidebarLabel>{item.title}</SidebarLabel>
                </DropdownLink>
            );})
        }
    </div>
  )
}

export default SubMenu