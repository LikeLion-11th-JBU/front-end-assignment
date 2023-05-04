const quotes = [
  {
    quote:
      'Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit,',
    author: '[Matthew 28:19, NIV] ',
  },
  {
    quote:
      'But he said to me, "My grace is sufficient for you, for my power is made perfect in weakness." Therefore I will boast all the more gladly about my weaknesses, so that Christ\'s power may rest on me.',
    author: '[2 Corinthians 12:9, NIV] ',
  },
  {
    quote: 'Cast all your anxiety on him because he cares for you.',
    author: '[1 Peter 5:7, NIV] ',
  },
  {
    quote:
      'And without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him.',
    author: '[Hebrews 11:6, NIV] ',
  },
  {
    quote:
      ' "I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world."',
    author: '[John 16:33, NIV]',
  },
  {
    quote:
      'and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age."',
    author: '[Matthew 28:20, NIV]',
  },
  {
    quote:
      'However, if you suffer as a Christian, do not be ashamed, but praise God that you bear that name.',
    author: '[1 Peter 4:16, NIV]',
  },
  {
    quote:
      'So whether you eat or drink or whatever you do, do it all for the glory of God.',
    author: '[1 Corinthians 10:31, NIV]',
  },
  {
    quote:
      'This is why it is said:"Wake up, sleeper, rise from the dead, and Christ will shine on you."',
    author: '[Ephesians 5:14, NIV]',
  },
  {
    quote:
      "Love the Lord your God with all your heart and with all your soul and with all your mind and with all your strength.'",
    author: '[Mark 12:30, NIV]',
  },
  {
    quote:
      "The second is this: 'Love your neighbor as yourself.' There is no commandment greater than these.\"",
    author: '[Mark 12:31, NIV]',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

/** Math Module
 
 * Math.Random(): 0~1사이의 숫자를 실수(double) 로 무작위 반환 
 * Math.round(): 반올림
 * Math.ceil():  올림
 * Math.floor(): 내림
 */