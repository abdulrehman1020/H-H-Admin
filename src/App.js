import { Routes, Route } from "react-router-dom";
import SideNav from "./components/SideNav";
import { CreateMember, IndividualMembers, IndividualUser, MemberDetail } from "./screens";
import "./App.css"

function App() {
  return (
    <div className="flex w-full min-h-screen overflow-auto relative">
    <SideNav />
      <Routes>
      <Route path="/user" element={<IndividualUser />} />
      <Route path="/memberDetail/:id" element={<MemberDetail />} />
      <Route path="/individualMember/:id" element={<IndividualMembers />} />
      <Route path="/createMember/:id" element={<CreateMember />} />
      </Routes>
    {/* </SideNav> */}
    </div>
  );
}

export default App;
