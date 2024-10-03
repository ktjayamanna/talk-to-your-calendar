import { getWeekDays } from '@/lib/getTime'
import { useDateStore } from '@/lib/store'
import React from 'react'

export default function WeekView() {

  const { userSelectedDate } = useDateStore()

  const Days = getWeekDays(userSelectedDate)

  console.log(Days);
  

  return (
    <div>WeekView</div>
  )
}
