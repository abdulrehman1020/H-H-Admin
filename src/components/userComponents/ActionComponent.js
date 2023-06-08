import React from 'react'
// import { CircularProgress } from '@mui/material'
// import { deleteHostAction } from '../../store/thunks/HostActions'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
// import { deleteDriverAction } from '../../store/thunks/driverActions'

const ActionComponent = ({memberLink, detailLink, id }) => {

    const dispatch = useDispatch()

    // const handleDelete = () => {
    //     if (window.confirm("Are you sure ?")) {
    //         link == "host" && dispatch(deleteHostAction(id))
    //         link == "driver" && dispatch(deleteDriverAction(id))
    //     }
    // }

    return (
        <>
            <NavLink to={`/${detailLink}/${id}`} className="bg-viewBlue p-1 px-4 rounded-[21px] text-[white]">
                View
            </NavLink>
            
            <NavLink to={`/${memberLink}/${id}`} className="bg-editGreen p-1 px-4 rounded-[21px] text-[white]">
                members
            </NavLink>
            <NavLink className="bg-deleteRed p-1 px-4 rounded-[21px] text-[white]"
                // onClick={(id) => handleDelete(id)}
                >
                <p>Delete</p>
            </NavLink>
        </>
    )
}

export default ActionComponent