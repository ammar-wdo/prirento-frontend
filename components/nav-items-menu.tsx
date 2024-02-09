import React from 'react'

type Props = {
    mobile?:boolean,
    title:string
}

const NavItemsMenu = ({mobile,title}: Props) => {
  return (
    <div className='grid grid-cols-4 gap-4 p-4 '>
<span>1</span>
<span>2</span>
<span>3</span>
<span>4</span>
<span>5</span>
<span>6</span>
    </div>
  )
}

export default NavItemsMenu