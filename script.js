// Select link element
var link = document.getElementById('linkCuestionario');

// Create url array
var urls = [
    'https://forms.gle/eLmWVDVB4ZegHjd19',
    'https://forms.gle/fk6j7D4KRCAGsvJm7'
];

// Get random url from array
var randomUrl = urls[Math.floor(Math.random() * urls.length)];

// Set link href to random url
link.href = randomUrl;

