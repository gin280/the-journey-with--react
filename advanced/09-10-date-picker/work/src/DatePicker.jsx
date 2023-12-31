import { useState } from "react"
import dayjs from "dayjs"
import isToday from "dayjs/plugin/isToday"
import isSameOrBefore from "dayjs/plugin/isSameOrBefore"
import weekOfYear from "dayjs/plugin/weekOfYear"
import weekDay from "dayjs/plugin/weekday"

dayjs.extend(isToday)
dayjs.extend(isSameOrBefore)
dayjs.extend(weekOfYear)
dayjs.extend(weekDay)

export function DatePicker({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="date-picker-container">
      <button
        className="date-picker-button"
        onClick={() => setIsOpen((o) => !o)}
      >
        {value == null ? "Select a Date" : dayjs(value).format("MMM Do, YYYY")}
      </button>
      {isOpen && <DatePickerModal onChange={onChange} value={value} />}
    </div>
  )
}

function DatePickerModal({ value, onChange }) {
  const [visibleMonth, setVisibleMonth] = useState(value || new Date())

  console.log(visibleMonth, "la")

  const startOfWeek = dayjs(visibleMonth).startOf("month").startOf("week")
  const endOfWeek = dayjs(visibleMonth).endOf("month").endOf("week")

  const visibleDates = Array.from(
    { length: endOfWeek.diff(startOfWeek, "day") + 1 },
    (_, index) => {
      return startOfWeek.add(index, "day")
    }
  )

  function showPreviousMonth() {
    setVisibleMonth((currentMonth) => dayjs(currentMonth).add(-1, "month"))
  }

  function showNextMonth() {
    setVisibleMonth((currentMonth) => dayjs(currentMonth).add(1, "month"))
  }

  return (
    <div className="date-picker">
      <div className="date-picker-header">
        <button
          className="prev-month-button month-button"
          onClick={showPreviousMonth}
        >
          &larr;
        </button>
        <div className="current-month">
          {dayjs(visibleMonth).format("MMMM - YYYY")}
        </div>
        <button
          className="next-month-button month-button"
          onClick={showNextMonth}
        >
          &rarr;
        </button>
      </div>
      <div className="date-picker-grid-header date-picker-grid">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className="date-picker-grid-dates date-picker-grid">
        {visibleDates.map((date) => (
          <button
            onClick={() => onChange(date)}
            className={`date ${
              !date.isSame(visibleMonth, "month") &&
              "date-picker-other-month-date"
            } ${date.isSame(value, "day") && "selected"} ${
              date.isToday() && "today"
            }`}
            key={date.format("YYYY-MM-DD")}
          >
            {date.date()}
          </button>
        ))}
      </div>
    </div>
  )
}
