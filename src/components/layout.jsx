// src/layout.jsx
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

export default function Layout() {
  return (
    <>
      <NavBar />
      <main style={{ padding: "16px" }}>
        <Outlet />
      </main>
    </>
  );
}
