import React from 'react'

export default function PointsTable() {
    return (
        <>
            <div id="pointsTable" className="pointsTable position-absolute bg-white p-2 rounded">
                <div className="pointsTableContainer">
                    <table className='table table-hover'>
                        <thead className='text-center'>
                            <tr>
                               <td>Your's</td>
                               <td>Oponnent</td>
                               <td>Points</td>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            <tr>
                                <td>Hand</td>
                                <td>Scissors</td>
                                <td>0 - 1</td>
                            </tr>
                            <tr>
                                <td>Hand</td>
                                <td>Scissors</td>
                                <td>0 - 1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
