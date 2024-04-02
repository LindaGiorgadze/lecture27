import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  return (
    <div className="PrivateLayout">
      <Outlet />
    </div>
  );
};
export default PrivateLayout;
