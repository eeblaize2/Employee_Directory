import React from 'react'

const TableRow = ({employee }) => {
    return (
        <tr>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>
              <td>{employee.dob.age}</td>
              <td>{employee.gender}</td>
              <td>{employee.location.state}</td>
            </tr>
    )
}

export default TableRow
