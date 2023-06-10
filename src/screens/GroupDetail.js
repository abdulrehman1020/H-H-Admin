import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getGroupDetails, getGroupMembers } from '../redux/action/GroupAction';
import Loader from '../components/Loader';

const GroupDetail = () => { 
  const dispatch = useDispatch();  
  const params = useParams();
  const groupId = params.id;

  useEffect(() =>  {
    console.log("called")
   dispatch(getGroupDetails(groupId))
   dispatch(getGroupMembers(groupId))
  }, [dispatch, groupId, params.id])

  const { loading, group } = useSelector((state) => state.groupDetail)
  const {members} = useSelector((state) => state.groupMembers)
  console.log("🚀 ~ file: GroupDetail.js:20 ~ GroupDetail ~ groupMembers:", members.groupUsers)
 
  console.log("🚀 ~ file: MemberDetail.js:18 ~ MemberDetail ~ group:", group)
  if (!group || !members.groupUsers ) {
    return <Loader />; 
  }
  const member = group?.member;
  console.log("🚀 ~ file: MemberDetail.js:29 ~ MemberDetail ~ member:", member)
return (
  <>
    {loading ? (
      <Loader />
    ) : (
      <>
        <div className='m-28 mobile:ml-0 tabletOnly:ml-14 tabletOnly:w-max tabletScreen:ml-0'>
          <h1 className="text-4xl font-semibold">
            Hello, {group?.associationName}
          </h1>
          <br></br>
          <div className='shadow-inset shadow-2xl rounded-xl w-full'>
            <h1 className='text-xl font-semibold p-4'>Group Detail</h1>
            <hr></hr>
            <br></br>
            <div className="flex flex-row mobile:flex-wrap">
              <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
                <h2 className="text-orange text-xl font-semibold mb-2">Association Name</h2>
                <p className="text-gray-500 text-base mobile:pt-1">{group?.associationName}</p>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
                <h2 className="text-orange text-xl font-semibold mb-2">Email</h2>
                <p className="text-gray-500 text-base mobile:pt-1">{group?.email}</p>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
                <h2 className="text-orange text-xl font-semibold mb-2">Country</h2>
                <p className="text-gray-500 text-base mobile:pt-1">{group?.country}</p>
              </div>
            </div>
            <div className="flex flex-row mobile:flex-wrap">
              <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
                <h2 className="text-orange text-xl font-semibold mb-2">Account Status:</h2>
                <p className="text-gray-500 text-base mobile:pt-1">{group.accountStatus}</p>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
                <h2 className="text-orange text-xl font-semibold mb-2">Registered Members:</h2>
                <p className="text-gray-500 text-base mobile:pt-1">{group.registeredMembers}</p>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
                <h2 className="text-orange text-xl font-semibold mb-2">Contact:</h2>
                <p className="text-gray-500 text-base mobile:pt-1">{group.phoneNumbers[0]}</p>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        { members.groupUsers.map((data, index) => {
          return (
            <div key={data._id} className='shadow-inset shadow-xl rounded-xl mb-4'>
              <div className='flex justify-between p-2'>
                <h1 className='text-xl font-semibold'>Representative {Number(index) + 1}</h1>
                <NavLink to={`/individual-Detail/${data._id}`} className="text-orange text-base pr-4 hover:underline" >View Detail</NavLink>
              </div>
              <hr></hr>
              <div className="flex flex-row mobile:flex-wrap tabletOnly:flex-wrap">
                <div className="w-full sm:w-1/2 lg:w-1/3 px-4 my-2 mobile:flex mobile:justify-between mobile:mb-0">
                  <h2 className="text-orange text-xl font-semibold mb-1">Name:</h2>
                  <p className="text-gray-500 text-base mobile:pt-1">{data.firstName} {data.lastName}</p>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 px-4 my-2 mobile:flex mobile:justify-between mobile:mb-0">
                  <h2 className="text-orange text-xl font-semibold mb-1">Email:</h2>
                  <p className="text-gray-500 text-base mobile:pt-1">{data.email}</p>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 px-4 my-2 mobile:flex mobile:justify-between mobile:mb-0">
                  <h2 className="text-orange text-xl font-semibold mb-1">Contact:</h2>
                  <p className="text-gray-500 text-base mobile:pt-1">555 555 555</p>
                </div>
              </div>
            </div>
          )
        })}
      </>
    )}
  </>
);
      }

export default GroupDetail