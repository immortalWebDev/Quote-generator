const quotes = [
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    text: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa",
  },
  {
    text: "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    text: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    text: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "You define your own life. Don’t let other people write your script.",
    author: "Oprah Winfrey",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
  },
  {
    text: "What we think, we become.",
    author: "Buddha",
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    text: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
  },
  {
    text: "Life itself is the most wonderful fairy tale.",
    author: "Hans Christian Andersen",
  },
  {
    text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
  },
  {
    text: "Life is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow. Let reality be reality.",
    author: "Lao Tzu",
  },
  {
    text: "Go confidently in the direction of your dreams! Live the life you’ve imagined.",
    author: "Henry David Thoreau",
  },
  {
    text: "It is our choices that show what we truly are, far more than our abilities.",
    author: "J.K. Rowling",
  },
  {
    text: "Keep your face always toward the sunshine—and shadows will fall behind you.",
    author: "Walt Whitman",
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
  },
  {
    text: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington",
  },
  {
    text: "The best way to predict your future is to create it.",
    author: "Peter Drucker",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    text: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    text: "Don’t judge each day by the harvest you reap but by the seeds that you plant.",
    author: "Robert Louis Stevenson",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "The mind is everything. What you think you become.",
    author: "Buddha",
  },
  {
    text: "An unexamined life is not worth living.",
    author: "Socrates",
  },
  {
    text: "To love and be loved is to feel the sun from both sides.",
    author: "David Viscott",
  },
  {
    text: "Change your thoughts and you change your world.",
    author: "Norman Vincent Peale",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "Keep smiling, because life is a beautiful thing and there's so much to smile about.",
    author: "Marilyn Monroe",
  },
  {
    text: "Good friends, good books, and a sleepy conscience: this is the ideal life.",
    author: "Mark Twain",
  },
  {
    text: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    author: "Brian Tracy",
  },
  {
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
  },
  {
    text: "We must let go of the life we have planned, so as to accept the one that is waiting for us.",
    author: "Joseph Campbell",
  },
  {
    text: "There is no charm equal to tenderness of heart.",
    author: "Jane Austen",
  },
  {
    text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    author: "Buddha",
  },
  {
    text: "We can't help everyone, but everyone can help someone.",
    author: "Ronald Reagan",
  },
  {
    text: "The only real mistake is the one from which we learn nothing.",
    author: "Henry Ford",
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    text: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
    author: "Jordan Belfort",
  },
  {
    text: "Our greatest glory is not in never falling, but in rising every time we fall.",
    author: "Confucius",
  },
  {
    text: "You cannot swim for new horizons until you have courage to lose sight of the shore.",
    author: "William Faulkner",
  },
  {
    text: "It’s not whether you get knocked down, it’s whether you get up.",
    author: "Vince Lombardi",
  },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
  },
  {
    text: "Nothing is impossible, the word itself says, ‘I’m possible!'",
    author: "Audrey Hepburn",
  },
  {
    text: "Your present circumstances don't determine where you can go; they merely determine where you start.",
    author: "Nido Qubein",
  },
  {
    text: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
];
