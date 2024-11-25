import { HopePageTop } from "../cmps/HopePageTop.jsx";
import { HopePageCenter } from "../cmps/HopePageCenter.jsx";
import { HopePageBottom } from "../cmps/HopePageBottom.jsx";
export function Home() {
  return (
    <div className="home">
      <HopePageTop/>
      <div className="full">
      <HopePageCenter/>
      <HopePageBottom/>
      </div>
    </div>
  );
}
