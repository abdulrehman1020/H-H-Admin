import { Routes, Route } from "react-router-dom";
import SideNav from "./components/SideNav";
import { CreateMember, GroupDetail, GroupMembers, GroupUsers, IndividualMembers, IndividualUser, MemberDetail } from "./screens";
import { MemberDataProvider } from "./context/MemberDataContext";


function App() {
  return (
    <div className="flex w-full min-h-screen overflow-auto relative">
    <SideNav />
      <Routes>
      <Route path="/user" element={<IndividualUser />} />
      <Route path="/memberDetail/:id" element={<MemberDataProvider><MemberDetail /></MemberDataProvider>} />
      <Route path="/individualMember/:id" element={<IndividualMembers />} />
      <Route path="/createMember" element={<CreateMember />} />
      <Route path="/groupUser" element={<GroupUsers />} />
      <Route path="/groupMember/:id" element={<GroupMembers />} />
      <Route path="/groupDetail/:id" element={<GroupDetail />} />
      </Routes>
    {/* </SideNav> */}
    </div>
  );
}

export default App;
