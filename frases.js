const quotes =[
    {
      quote: "La mejor manera de predecir el futuro es inventarlo.",
      author: "Alan Kay",
      image: "https://www.thefamouspeople.com/profiles/images/alan-kay-3.jpg",
    },
    {
      quote: "La educacion es el arma mas poderosa que puedes usar para cambiar el mundo.",
      author: "Nelson Mandela",
      image: "https://th.bing.com/th/id/R.c7427ea046e3cf9f37ae7928452db494?rik=YSLMItcXg9b%2fLw&pid=ImgRaw&r=0",
    },
    {
      quote: "La vida es lo que hacemos de ella. Los viajes son los viajeros. Lo que vemos no es lo que vemos, sino lo que somos.",
      author: "Fernando Pessoa",
      image: "https://th.bing.com/th/id/OIP.AZgdr96y0jiBCmdX7cQ21gHaJt?pid=ImgDet&rs=1",
    },
    {
      quote: "Nunca sabes de lo que eres capaz hasta que lo intentas.",
      author: "Charles Dickens",
      image: "https://th.bing.com/th/id/OIP.6nSEHnPeIrf0lovhLCLOVwHaHa?pid=ImgDet&rs=1",
    },
    {
      quote: "El exito es la suma de pequenos esfuerzos repetidos dia tras dia.",
      author: "Robert Collier",
      image: "https://lessonsintruth.info/library/wp-content/uploads/2015/04/robert_collier1.gif",
    },
    {
      quote: "No te lamentes, se mejor.",
      author: "Kratos",
      image: "https://th.bing.com/th/id/R.2f6c0fd2e40a50d4b0e914f012635c11?rik=LsBu1jjjM9539g&riu=http%3a%2f%2fwww.zbrushcentral.com%2fuploads%2fdefault%2foptimized%2f3X%2ff%2fa%2ffab96c2251f575e3b329a0c07bf371125dfcb929_2_1024x1024.jpeg&ehk=5I2XzdhKC%2bi0CCZS7AI%2ff9SS1GguWkSHNoHDmlqfZjk%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      quote: "La felicidad no es algo hecho. Viene de tus propias acciones.",
      author: "Dalai Lama",
      image: "https://th.bing.com/th/id/OIP.fBheab2eHJdyTQ0j5oQbUAHaJ8?pid=ImgDet&rs=1",
    },
    {
      quote: "Querer algo no te da el derecho de tenerlo.",
      author: "Ezio Auditore",
      image: "https://wallpapercave.com/wp/wp2624637.jpg",
    },
    {
      quote: "Felicidad es no estar adolorido en el cuerpo ni preocupado en la mente.",
      author: "Thomas Jefferson",
      image: "https://th.bing.com/th/id/R.66a1e8bb7e8ab1079393208ba65e1b32?rik=PQfH3fsXtoQ3GQ&riu=http%3a%2f%2fwww.studenthandouts.com%2f01-Web-Pages%2f01-Picture-Pages%2fThomas-Jefferson-Portrait-Rembrandt-Peale-1800.jpg&ehk=bCJiGCVvRg%2foyW2%2fcuM2S248N0dH5tPLEVfKgt9w%2b9c%3d&risl=1&pid=ImgRaw&r=0",
    },
    {
      quote: "Nunca sabes lo fuerte que eres, hasta que ser fuerte es la unica opcion que te queda.",
      author: "Bob Marley",
      image: "https://th.bing.com/th/id/OIP.sWwSkfqJ-SBtUnA1gpVkkwHaIX?pid=ImgDet",
    },
    {
      quote: "No luches por alguien que no lucha por ti.",
      author: "Oaxakong",
      image: "https://th.bing.com/th/id/OIP.Soxj3wVdRWvxkcX1-BEgbwAAAA?pid=ImgDet&rs=1",
    },

  
    // otras citas y sus autores e imágenes
];
const imagen = document.getElementById('image');
const maxWidth = 120;

if (imagen.width > maxWidth) {
  imagen.width = maxWidth;
}

  const quoteDisplay = document.getElementById('quote');
  const authorDisplay = document.getElementById('author');
  const imageDisplay = document.getElementById('image');
  const newQuoteButton = document.getElementById('new-quote');
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };
  
  function displayQuote() {
    const randomQuote = getRandomQuote();
    quoteDisplay.textContent = randomQuote.quote;
    authorDisplay.textContent = `- ${randomQuote.author}`;
    imageDisplay.src = randomQuote.image;
  };
  
  newQuoteButton.addEventListener('click', displayQuote);
  
  displayQuote(); // muestra una cita aleatoria al cargar la página
  