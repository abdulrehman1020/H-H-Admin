import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getGroupDetails } from '../redux/action/GroupAction';

const GroupDetail = () => { 
  const dispatch = useDispatch();  
  const params = useParams();
  const groupId = params.id;

  useEffect(() => {
    console.log("called")
    dispatch(getGroupDetails(groupId))
  }, [dispatch, groupId, params.id])

  const { loading, group } = useSelector((state) => state.groupDetail)
  console.log("🚀 ~ file: MemberDetail.js:18 ~ MemberDetail ~ group:", group)
//   const member = group?.member;
//   console.log("🚀 ~ file: MemberDetail.js:29 ~ MemberDetail ~ member:", member)
  return (
    <div>GroupDetail</div>
  )
}

export default GroupDetail