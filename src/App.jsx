import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import AuthLayout from "./components/Layouts/AuthLayout";
import Login from "./pages/authPages/Login";
import { QueryClient, QueryClientProvider } from "react-query";
import Calculator from "./pages/calculator";
import { useSelector } from "react-redux";
import PrivateLayout from "./components/Layouts/PrivateLayout";
import Products from "./pages/products";

function App() {
  const queryClient = new QueryClient();
  const user = useSelector((state) => state.user.user);
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <Routes>
            {user?.username ? (
              <Route path="/" element={<PrivateLayout />}>
                <Route index element={<Products />} />
                <Route path="calculator" element={<Calculator />} />
              </Route>
            ) : (
              <Route path="/" element={<AuthLayout />}>
                <Route index element={<Login />} />
              </Route>
            )}
          </Routes>
        </div>
      </main>
    </QueryClientProvider>
  );
}

export default App;
