const reviews = [
    {
      id: 1,
      name: 'Thomas Dogg',
      job: 'nigga',
      img: 'https://images.pexels.com/photos/2876486/pexels-photo-2876486.png?auto=compress&cs=tinysrgb&w=600',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 2,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 3,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 4,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 5,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];
  
  const img = document.getElementById("img");
  const name = document.getElementById("name");
  const job = document.getElementById("job");
  const text = document.getElementById("text");
  
  const btnPrev = document.querySelector(".btnPrev");
  const btnNext = document.querySelector(".btnNext");
  
  let currentItem = 0;
  
  window.addEventListener("DOMContentLoaded", function() {
  const item = reviews[currentItem];
  img.src = item.img;
  name.textContent = item.name;
  job.textContent = item.job;
  text.textContent = item.text;
  })
  
  function showPerson(person){
  const item = reviews[person];
  img.src = item.img;
  name.textContent = item.name;
  job.textContent = item.job;
  text.textContent = item.text;
  }
  
  btnNext.addEventListener("click", function() {
  currentItem++;
  if (currentItem >= reviews.length) {
  currentItem = 0;
  }
  showPerson(currentItem);
  })
  btnPrev.addEventListener("click", function() {
  currentItem--;
  if (currentItem < 0) {
  currentItem = reviews.length;
  }
  showPerson(currentItem);
  })