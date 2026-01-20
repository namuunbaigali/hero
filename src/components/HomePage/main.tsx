import AppBar from "./AppBar";
import TabPage from "./TabPage";
import Ticker from "../Ticker"; // ✅ шинэ table компонент

export default function HomePage() {
  return (
    <>
      {/* <Ticker/> */}
      <AppBar />
      <TabPage />
    </>
  );
}
