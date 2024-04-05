import './Wizyta.css';
import { InlineWidget } from "react-calendly";

export default function Wizyta() {
  return <div className="wizyta">
    <iframe id="calender-inline-widget" src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0BPIe2Q6llEVIHSemrZaRU8MIeeGhiJRFuXcNEms8W7s-Vn3SAJ4D7StYRi5xv39dcrRba1DBF?gv=true" width="100%" height="600" frameborder="0"></iframe>
  </div>
}