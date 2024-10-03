import { cn } from '@/lib/utils'
import React from 'react'
import Create from './create'
import SideBarCalendar from './side-bar-calendar'
import SearchUsers from './search-users'
import MyCalendars from './my-calendars'

export default function SideBar() {
  return (
    <aside
    className={cn(
      "w-92 hidden transition-all duration-300 ease-in-out border-t py-3 px-2 lg:block",
     
    )}
  >
    <Create/>
    <SideBarCalendar/>
    <SearchUsers/>
    <MyCalendars/>
    </aside>
  )
}
