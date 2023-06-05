import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteIndividualMember } from '../../redux/action/IndividualAction'


const MembersTable = ({ data }) => {
// console.log("🚀 ~ file: MembersTable.js:7 ~ MembersTable ~ data:", data?.individualMembers)
    // const members = data?.individualMembers
    const dispatch = useDispatch()

    // Handlers
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this property?")) {
            dispatch(deleteIndividualMember(id))
        }
    }

    // const handleCopyBtn = (content) => {
    //     navigator.clipboard.writeText(content);
    //     window.alert("Unique Link Copied")
    // }

    return (
        <div className="relative overflow-x-auto border-[0.5px] border-solid border-[#CCCCCC] rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-[black] text-[white]">
                    <tr>
                        <th className="px-4 py-3">
                            Name
                        </th>
                        <th className="px-4 py-3">
                            email
                        </th>
                        <th className="px-4 py-3">
                            Contact
                        </th>
                        <th className="px-4 py-4">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((entry, index) => (
                        <tr
                            key={entry._id}
                            className="bg-white border-b-[#CCCCCC] border-b-[0.5px]"
                        >
                            <td className="px-4 w-fit max-w-[200px]">
                                <p className='truncate'>{`${entry?.firstName} ${entry?.lastName}`}</p>
                            </td>

                            <td className="px-4 w-fit max-w-[200px]">
                                <p className='truncate'>{entry.email}</p>
                            </td>

                            <td className="px-4 w-fit min-w-[190px]">
                                <div className="flex justify-between max-w-[200px]">
                                <p className='truncate'>{entry.email}</p>
                                
                                </div>
                            </td>

                            <td className="py-4 px-4 flex justify-between w-fit gap-2">
                                <NavLink to={`/memberDetail/${entry._id}`} className="bg-viewBlue p-1 px-4 rounded-[21px] text-[white]">
                                    View
                                </NavLink>
                                {/* <NavLink to={`/hostList/${entry.hostID}/${entry._id}?edit=true`} className="bg-editGreen p-1 px-4 rounded-[21px] text-[white]">
                                    Edit
                                </NavLink> */}
                                <NavLink onClick={() => handleDelete(entry._id)} className="bg-deleteRed p-1 px-4 rounded-[21px] text-[white]">
                                    Delete
                                </NavLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default MembersTable