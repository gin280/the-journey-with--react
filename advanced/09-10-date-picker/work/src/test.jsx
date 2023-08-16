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

  const visibleDates = Array.from({ length: 42 }, (_, index) => {
    const start = dayjs(visibleMonth).startOf("month").startOf("week")
    return start.add(index, "day")
  })

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
              !isSameMonth(date, visibleMonth) && "date-picker-other-month-date"
            } ${isSameDay(date, value) && "selected"} ${
              isToday(date) && "today"
            }`}
            key={date.format("YYYY-MM-DD")} // 使用 dayjs 的 format 方法
          >
            {date.date()} {/* 使用 dayjs 的 date 方法获取日期部分 */}
          </button>
        ))}
      </div>
    </div>
  )
}
