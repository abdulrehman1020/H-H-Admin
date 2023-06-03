
import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getUserDetails } from "../redux/action/IndividualAction";
import DetailComponent from "../components/DetailComponent";
// import Loader from "../../components/Loader";

const MemberDetail = () => {
  const dispatch = useDispatch();  
  const params = useParams();
  const memberId = params.id;
  console.log(
    "🚀 ~ file: IndividualMemberDetail.tsx:9 ~ IndividualMemberDetail ~ memberId:",
    memberId
  );

// if (memberId) {
//     dispatch(getUserDetails(memberId)) 
// }

  useEffect(() => {
    console.log("called")
    dispatch(getUserDetails(memberId))
  }, [dispatch, memberId, params.id])

  const { loading, user } = useSelector((state) => state.userDetail)
  console.log("🚀 ~ file: MemberDetail.js:18 ~ MemberDetail ~ user:", user?.member)
  const member = user?.member;
  console.log("🚀 ~ file: MemberDetail.js:29 ~ MemberDetail ~ member:", member)
  
  if(loading){
    return <h1>loading...</h1>
  }

  
  

  return (
    <div className="bg-white shadow-md rounded-2xl px-8 pt-6 h-auto ml-14 mobile:ml-0 tabletOnly:w-max">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange">Member Detail</h1>
        {/* <Button text="Edit" route="/" /> */}
      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <div>
        <h1 className="text-2xl font-bold text-orange">Personal Information</h1>
        <br></br>
        <DetailComponent member={member} />
             
      </div >
    </div>
  );
};

export default MemberDetail;
