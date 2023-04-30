import React from 'react'

function Megamenu() {

const Links =[
    {name:"موبایل"},
    {name:"لپ تاپ"},
    {name:"تبلت"},
    {name:"واچ"},
]

  return (
    <>
    {Links.map(link=>(
        <div>
            <div>
                <p>{link.name}</p>
            </div>
        </div>
    ))}
    </>
  )
}

export default Megamenu