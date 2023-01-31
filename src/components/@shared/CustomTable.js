import React from 'react'

function CustomTable({rows, title, headers}) {
  return (
    <div>
        <div className=''>
            <h2 className='title'>{title}</h2>
        </div>
        <div className=''>
            <table className=''>
                <thead className=''>
                    <tr className=''>
                        {
                            headers.map(head => {
                                return <th key={head.name}>{head.label}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody className=''>
                        {
                            rows.map(row => {
                                return  <tr className=''>
                                            <td className=''>{row.name}</td>
                                            <td className=''>{row.email}</td>
                                            <td className=''>{row.address}</td>
                                        </tr>
                            })
                        }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default CustomTable