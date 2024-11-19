import NavigationLeft from "../components/NavigationLeft";
import NavigationTop from "../components/NavigationTop";
import { Outlet } from "react-router-dom";
import "./styles/Feed.css";
export default function Index() {
  return (
    <div className="in-layout">
      <NavigationLeft />
      <div className="layout-item">
        <NavigationTop />
        <div className="layout-outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
