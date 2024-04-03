import AttendeeList from "./components/attendeeList";
import Header from "./components/header";

export default function App(){
  return(
    <div className="max-w-[1216px] mx-auto py-5 flex flex-col gap-5">
      <Header/>
      <AttendeeList/>
    </div>
  )
}