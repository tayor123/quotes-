let btn = document.getElementById('btn')
let output = document.getElementById('output')
let quote =[
    '"The greatest glory in living lies not in never falling, but in rising every time we fall." -Nelson Mandela',
'"The way to get started is to quit talking and begin doing." -Walt Disney',
'"You must be the change you wish to see in the world. -Mahatma Gandhi"',
'"The future belongs to those who believe in the beauty of their dreams." -Eleanor Roosevelt',
'"Spread love everywhere you go. Let no one ever come to you without leaving happier." -Mother Teresa',
'"The only thing we have to fear is fear itself." -Franklin D. Roosevelt',
'"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that." -Martin Luther King Jr.',
'"Do one thing every day that scares you." -Eleanor Roosevelt',
'"Well done is better than well said." -Benjamin Franklin',
'"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." -Helen Keller',
'"It is during our darkest moments that we must focus to see the light." -Aristotle',
'"Do not go where the path may lead, go instead where there is no path and leave a trail." -Ralph Waldo Emerson',
'"Be yourself; everyone else is already taken." -Oscar Wilde'
]

btn.addEventListener('click', function(){
    var randomQuotes =quote[Math.floor(Math.random() *quote.length)]

    output.innerHTML = randomQuotes;

})



var quoter=[

  '"The greatest glory in living lies not in never falling, but in rising every time we fall." -Nelson Mandela',
'"The way to get started is to quit talking and begin doing." -Walt Disney',
'"You must be the change you wish to see in the world. -Mahatma Gandhi"',
'"The future belongs to those who believe in the beauty of their dreams." -Eleanor Roosevelt',
'"Spread love everywhere you go. Let no one ever come to you without leaving happier." -Mother Teresa',
'"The only thing we have to fear is fear itself." -Franklin D. Roosevelt',
'"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that." -Martin Luther King Jr.',
'"Do one thing every day that scares you." -Eleanor Roosevelt',
'"Well done is better than well said." -Benjamin Franklin',
'"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." -Helen Keller',
'"It is during our darkest moments that we must focus to see the light." -Aristotle',
'"Do not go where the path may lead, go instead where there is no path and leave a trail." -Ralph Waldo Emerson',
'"Be yourself; everyone else is already taken." -Oscar Wilde'

];

var quoterIndex=0;
var quoterduration=3000;

function quoterfunction(){
  document.getElementById("output").innerHTML=quoter[quoterIndex];
  quoterIndex++;
  if(quoterIndex == quoter.length){quoterIndex=0}
  setTimeout("quoterfunction()",quoterduration);
}
quoterfunction();


/*let texts = Array.from(document.querySelectorAll('.container p'));
let i = 1; // starting from 1 because 0 already has is-visible, it would cause slight delay otherwise.

setInterval(() => {
  texts.forEach(text => {
    text.classList.remove('is-visible');
  });
  texts[i].classList.add('is-visible');
  i += 1;
  if (i >= texts.length) {
    i = 0;
  }
}, 2000);

*/