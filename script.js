// Select link element
var link = document.getElementById('linkCuestionario')

// Create url array
var urls = [
  'https://forms.gle/eLmWVDVB4ZegHjd19', // 99% chance to select
  'https://forms.gle/fk6j7D4KRCAGsvJm7' // 1% chance to select
]

//Chances of being selected
var chances = [99, 1]

// Get random url from array
var sum = chances.reduce((acc, el) => acc + el, 0)
var acc = 0
chances = chances.map((el) => (acc = el + acc))
var rand = Math.random() * sum
var randomUrl = urls[chances.filter((el) => el <= rand).length]

// Set link href to random url
link.href = randomUrl
