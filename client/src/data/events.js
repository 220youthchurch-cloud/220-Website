export const events = [
  {
    id: 1,
    title: "Sunday Worship Service",
    description: "Join us every Sunday at 10 AM for our weekly worship service. Experience uplifting music, inspiring sermons, and a welcoming community.",
    detailedDescription: "<h1>Sunday Worship Service</h1><p>Join us every Sunday at 10 AM for our weekly worship service. Experience uplifting music, inspiring sermons, and a welcoming community. Our services are designed to help you grow in your faith and connect with others. We look forward to worshiping with you!</p>",
    date: "Sunday",
    startTime: "10:00 AM",
    endTime: "11:30 AM",
    location: "220 Church Sanctuary",
    category: "Worship",
    recurring: true,
    isVideo: false,
    mediaPath: "/events/sunday_worship_service/flyer.jpg"
  },
  {
    id: 2,
    title: "220 WILDERNESS CAMPING TRIP",
    description: "Join us for a weekend camping trip to enjoy nature and fellowship. We will have activities for all ages, including hiking, games, and a campfire.",
    detailedDescription: "<h1>Camping Trip</h1><p>Join us for a weekend camping trip to enjoy nature and fellowship. We will have activities for all ages, including hiking, games, and a campfire. This is a great opportunity to connect with others in our community and experience the beauty of God's creation. Don't forget to bring your camping gear!</p>",
    date: "October 6-8, 2023",
    startTime: "",
    endTime: "",
    location: "Austin, TX",
    category: "Fellowship",
    recurring: false,
    isVideo: false,
    mediaPath: "/events/220_wilderness_camping_trip/flyer.jpg"
  },
  {
    id: 3,
    title: "Girl's Conference",
    description: "A special conference for girls to grow in their faith and build friendships.",
    detailedDescription: "<h1>Girl's Conference</h1><p>A special conference for girls to grow in their faith and build friendships. We will have engaging activities, inspiring speakers, and opportunities to connect with other girls in our community.</p>",
    date: "February 17-18, 2024",
    startTime: "Feb 17 1:00 PM",
    endTime: "Feb 18 10:00 AM",
    location: "220 Church Sanctuary",
    category: "Conference",
    recurring: false,
    isVideo: true,
    mediaPath: "/events/girls_conference/girls_conference.mp4"
  },
  {
    id: 4,
    title: "Spring Break Conference",
    description: "📣 Spring Break is almost here!! Join our conference “ARISE” March 14-16, and don’t forget to bring a friend! You don’t want to miss this!! Service will be in the Chapel (the adult service room) and on Sunday it will be in the 220 room.",
    detailedDescription: "<h1>Spring Break Conference</h1><p>📣 Spring Break is almost here!! Join our conference “ARISE” March 14-16, and don’t forget to bring a friend! You don’t want to miss this!! Service will be in the Chapel (the adult service room) and on Sunday it will be in the 220 room.</p>",
    date: "March 14-16, 2025",
    startTime: "Mar 14 7:00 PM",
    endTime: "Mar 16 10:00 AM",
    location: "220 Church Sanctuary",
    category: "Conference",
    recurring: false,
    isVideo: false,
    mediaPath: "/events/spring_conference_2025/flyer.jpg"
  },
  {
    id: 5,
    title: "Basketball Tournament",
    description: "PHASE ONE OF SATURDAY’S ACTIVITIES IS OUT. BE SURE TO FILL OUT THE FORM. WE GOT SO MUCH PLANNED! WE CANT WAIT TO SEE ALL OF YALL HERE. DON’T FORGET TO INVITE YOUR FRIENDS!!!!",
    detailedDescription: "<h1>Basketball Tournament</h1><p>PHASE ONE OF SATURDAY’S ACTIVITIES IS OUT. BE SURE TO FILL OUT THE FORM. WE GOT SO MUCH PLANNED! WE CANT WAIT TO SEE ALL OF YALL HERE. DON’T FORGET TO INVITE YOUR FRIENDS!!!!</p>",
    date: "March 15, 2025",
    startTime: "Mar 15 4:00 PM",
    endTime: "Mar 15 8:00 PM",
    location: "11110 Garland Rd, Dallas, TX 75218",
    category: "Recreation",
    recurring: false,
    isVideo: false,
    mediaPath: "/events/basketball_tournament/flyer.jpg"
  },
  {
    id: 6,
    title: "Consecrated Conference",
    description: "Join 220’s Young Adult Thanksgiving Conference……Consecrated!!!!! Experience three powerful days of worship, growth, and transformation! Be inspired by dynamic speakers: Pastor Nebiye Kelile, Ermmias Teclemariam, and Pastor Issrome Abraham.",
    detailedDescription: "<h1>Consecrated Conference</h1><p>Join 220’s Young Adult Thanksgiving Conference……Consecrated!!!!! Experience three powerful days of worship, growth, and transformation! Be inspired by dynamic speakers: Pastor Nebiye Kelile, Ermmias Teclemariam, and Pastor Issrome Abraham.</p>",
    date: "November 20-22, 2025",
    startTime: "Nov 20 7:00 PM",
    endTime: "Nov 22 10:00 AM",
    location: "220 Church Sanctuary",
    category: "Conference",
    recurring: false,
    isVideo: false,
    mediaPath: "/events/consecrated_2025/flyer.jpg"
  }
]

const weekdayMap = {
  sunday: 0,
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
}

const getStartOfDay = (date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate())

const parseDateRange = (dateString) => {
  if (!dateString || typeof dateString !== 'string') {
    return null
  }

  const normalized = dateString.trim()
  const rangePattern = /^([A-Za-z]+)\s+(\d{1,2})(?:-(\d{1,2}))?,\s*(\d{4})$/
  const rangeMatch = normalized.match(rangePattern)

  if (rangeMatch) {
    const [, monthName, startDayRaw, endDayRaw, yearRaw] = rangeMatch
    const startDay = Number(startDayRaw)
    const endDay = Number(endDayRaw || startDayRaw)
    const year = Number(yearRaw)
    const monthIndex = new Date(`${monthName} 1, ${year}`).getMonth()

    if (Number.isNaN(monthIndex)) {
      return null
    }

    return {
      start: getStartOfDay(new Date(year, monthIndex, startDay)),
      end: getStartOfDay(new Date(year, monthIndex, endDay)),
    }
  }

  const parsedDate = new Date(normalized)
  if (!Number.isNaN(parsedDate.getTime())) {
    const day = getStartOfDay(parsedDate)
    return { start: day, end: day }
  }

  return null
}

const getRecurringWeekday = (event) => {
  const text = `${event?.date || ''} ${event?.description || ''}`.toLowerCase()

  for (const [weekdayName, weekdayIndex] of Object.entries(weekdayMap)) {
    if (text.includes(weekdayName)) {
      return weekdayIndex
    }
  }

  return null
}

const getNextOccurrence = (event, fromDate) => {
  const anchor = getStartOfDay(fromDate)

  if (event.recurring) {
    const weekday = getRecurringWeekday(event)
    if (weekday === null) {
      return null
    }

    const dayOffset = (weekday - anchor.getDay() + 7) % 7
    return new Date(anchor.getFullYear(), anchor.getMonth(), anchor.getDate() + dayOffset)
  }

  const range = parseDateRange(event.date)
  if (!range) {
    return null
  }

  return range.start
}

export const isEventOnDate = (event, date) => {
  if (!event || !date) {
    return false
  }

  const selectedDate = getStartOfDay(date)

  if (event.recurring) {
    const weekday = getRecurringWeekday(event)
    return weekday !== null && selectedDate.getDay() === weekday
  }

  const range = parseDateRange(event.date)
  if (!range) {
    return false
  }

  return selectedDate >= range.start && selectedDate <= range.end
}

export const getUpcomingEvents = (fromDate = new Date()) => {
  const anchor = getStartOfDay(fromDate)

  return events
    .filter((event) => {
      if (event.recurring) {
        return true
      }

      const range = parseDateRange(event.date)
      if (!range) {
        return false
      }

      return range.end >= anchor
    })
    .sort((eventA, eventB) => {
      const nextA = getNextOccurrence(eventA, anchor)
      const nextB = getNextOccurrence(eventB, anchor)

      if (!nextA && !nextB) return 0
      if (!nextA) return 1
      if (!nextB) return -1

      return nextA.getTime() - nextB.getTime()
    })
}

export const getEventsForDate = (date, eventList = []) => {
  if (!date) {
    return []
  }

  return eventList.filter((event) => isEventOnDate(event, date))
}