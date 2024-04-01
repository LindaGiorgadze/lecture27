import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import AuthLayout from "./components/Layouts/AuthLayout";
import Login from "./pages/authPages/Login";
import { QueryClient, QueryClientProvider } from "react-query";
import Calculator from "./pages/calculator";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="calculator" element={<Calculator />} />
            </Route>
          </Routes>
        </div>
      </main>
    </QueryClientProvider>
  );
}

export default App;
