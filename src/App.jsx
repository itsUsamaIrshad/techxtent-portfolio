import "./App.css";
import NavbarContextProvider from "./Context/NavbarContext";
import Routes from "./Routes";

export default function App() {
  return (
    <>
      <NavbarContextProvider>
        <Routes />
      </NavbarContextProvider>
    </>
  );
}
