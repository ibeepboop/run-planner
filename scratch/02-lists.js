const days = [
  { date: '2026-07-25', tempMax: 31, rain: 5 },
  { date: '2026-07-26', tempMax: 19, rain: 60 },
  { date: '2026-07-27', tempMax: 22, rain: 10 },
  { date: '2026-07-28', tempMax: 17, rain: 0 },
  { date: '2026-07-29', tempMax: 28, rain: 45 }
]

const dates = days.map( d => d.date )
console.log(dates)

const notRainy = days.filter( d => d.rain < 20 )
console.log(notRainy)

const goodDays = days.filter( d => d.rain < 20 ).map( d => `${d.date}: high of ${d.tempMax} degrees, ${d.rain}% chance of rain.`)
console.log(goodDays)
console.log(days.length)

const goodDaysGoneBad = days.map( d => `${d.date}: high of ${d.tempMax} degrees, ${d.rain}% chance of rain.` ).filter( d => d.rain < 20 )
// so this returns an empty array. Why? For each of the days, I map each of the data to the appropriate template literal in the sentance I want to return. Ohhhhh okay. When I filter, I'm looking for d.rain, but now I just have an array of template literals, not a date object with a rain property.
console.log(goodDaysGoneBad)

// Adding a new line to this file for Lesson 3 homework, made a new branch first.