import { Routes, Route } from "react-router-dom";
import SideNav from "./components/SideNav";
import { IndividualUser, MemberDetail } from "./screens";


function App() {
  return (
    <div className="flex w-full min-h-screen overflow-auto relative">
    <SideNav />
      <Routes>
      <Route path="/user" element={<IndividualUser />} />
      <Route path="/memberDetail/:id" element={<MemberDetail />} />
      </Routes>
    {/* </SideNav> */}
    </div>
  );
}

export default App;
