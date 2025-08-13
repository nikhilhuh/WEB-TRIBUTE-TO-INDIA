const stateData = {
  INAN: {
    name: "Andaman and Nicobar",
    description:
      "A union territory in the Bay of Bengal, known for its beautiful beaches and rich marine life.",
  },
  INTG: {
    name: "Telangana",
    description:
      "Formed from Andhra Pradesh in 2014, it is a hub for the IT and pharmaceutical industries with a vibrant cultural heritage.",
  },
  INAP: {
    name: "Andhra Pradesh",
    description:
      "Famous for its historical sites, temples, and coastal cuisine. It is a major producer of rice and other crops.",
  },
  INAR: {
    name: "Arunachal Pradesh",
    description:
      'The "Land of the Dawn-Lit Mountains" and the easternmost state of India, known for its monasteries and natural beauty.',
  },
  INAS: {
    name: "Assam",
    description:
      "Renowned for its tea plantations, wildlife sanctuaries, and rich Assamese culture.",
  },
  INBR: {
    name: "Bihar",
    description:
      "A state with a rich history and ancient center of power and learning, home to Buddhist and Jain religious sites.",
  },
  INCH: {
    name: "Chandigarh",
    description:
      "A Union Territory and a modern city known for its beautiful architecture and urban planning.",
  },
  INCT: {
    name: "Chhattisgarh",
    description:
      "Known for its temples, waterfalls, and rich tribal culture in the heart of India.",
  },
  INDH: {
    name: "Dādra and Nagar Haveli and Damān and Diu",
    description:
      "A Union Territory with a mix of Portuguese colonial architecture and stunning beaches.",
  },
  INDL: {
    name: "Delhi",
    description:
      "The bustling capital of India, a major political, cultural, and commercial center with centuries of history.",
  },
  INGA: {
    name: "Goa",
    description:
      "Famous for its stunning beaches, vibrant nightlife, and Portuguese-influenced architecture.",
  },
  INGJ: {
    name: "Gujarat",
    description:
      "A state with a long coastline, ancient cities, and a rich industrial and cultural legacy.",
  },
  INHR: {
    name: "Haryana",
    description:
      "A state with a strong agricultural base and rapidly developing industrial and IT sectors.",
  },
  INHP: {
    name: "Himachal Pradesh",
    description:
      'The "Abode of Snow" is famous for its breathtaking Himalayan landscapes and popular hill stations.',
  },
  INJH: {
    name: "Jharkhand",
    description:
      "Known for its rich mineral resources and tribal heritage. Its capital, Ranchi, is a major industrial city.",
  },
  INKA: {
    name: "Karnataka",
    description:
      "A hub for India's IT industry, famous for its historical sites and diverse landscapes, from mountains to beaches.",
  },
  INKL: {
    name: "Kerala",
    description:
      'The "God\'s Own Country" is known for its backwaters, lush greenery, and unique cultural traditions.',
  },
  INMP: {
    name: "Madhya Pradesh",
    description:
      "Located in central India, known for its rich history, forests, and temples like Khajuraho.",
  },
  INMH: {
    name: "Maharashtra",
    description:
      "The economic powerhouse of India, home to Mumbai and a diverse mix of culture and industry.",
  },
  INMN: {
    name: "Manipur",
    description:
      'The "Jewel of India," known for its lush green hills, serene lakes, and unique Manipuri dance form.',
  },
  INML: {
    name: "Meghalaya",
    description:
      'The "Abode of Clouds" is known for its rolling hills, high rainfall, and living root bridges.',
  },
  INMZ: {
    name: "Mizoram",
    description:
      "A state with a rich cultural heritage and lush, green hills. Known for its traditional dance forms.",
  },
  INNL: {
    name: "Nagaland",
    description:
      "A state with a unique tribal culture and a history of headhunting. Famous for its vibrant festivals.",
  },
  INOR: {
    name: "Orissa",
    description:
      "Known for its historical temples, especially in Bhubaneswar and Puri, and its beautiful coastline.",
  },
  INPY: {
    name: "Puducherry",
    description:
      "A former French colony, known for its unique culture, French architecture, and beautiful promenade.",
  },
  INPB: {
    name: "Punjab",
    description:
      'The "Land of Five Rivers," famous for its rich culture, vibrant festivals, and agricultural prowess.',
  },
  INRJ: {
    name: "Rajasthan",
    description:
      'The "Land of Kings" is famous for its historical forts, palaces, and deserts.',
  },
  INSK: {
    name: "Sikkim",
    description:
      "A small Himalayan state known for its breathtaking mountain views, monasteries, and rich biodiversity.",
  },
  INTN: {
    name: "Tamil Nadu",
    description:
      "Known for its classical Tamil language, Dravidian-style temples, and vibrant cultural traditions.",
  },
  INTR: {
    name: "Tripura",
    description:
      "A state with a rich history, known for its royal palaces and ancient temples.",
  },
  INUP: {
    name: "Uttar Pradesh",
    description:
      "A highly populous state with important historical and religious sites, including the Taj Mahal in Agra.",
  },
  INUT: {
    name: "Uttaranchal",
    description:
      "Known for its stunning Himalayan scenery, pilgrimage sites, and adventure sports.",
  },
  INWB: {
    name: "West Bengal",
    description:
      "Known for its rich literary and artistic heritage, festivals, and the Sundarbans mangrove forest.",
  },
  INLD: {
    name: "Lakshadweep",
    description:
      "A beautiful archipelago of islands in the Arabian Sea, known for its coral reefs and crystal-clear waters.",
  },
  INJK: {
    name: "Jammu and Kashmir",
    description:
      "A Union Territory known for its scenic beauty, majestic mountains, and diverse culture.",
  },
  INLA: {
    name: "Ladakh",
    description:
      "A high-altitude region known for its remote mountain beauty, unique culture, and Buddhist monasteries.",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    once: true,
    duration: 800,
  });

  document.getElementById("curr-year").textContent = new Date().getFullYear();

  const scrollDown = document.querySelector(".scroll-down");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      scrollDown.style.visibility = "hidden";
    } else {
      scrollDown.style.visibility = "visible";
    }
  });

  // Adjust AOS for smaller screens
  function updateAOSForMobile() {
    if (window.innerWidth <= 768) {
      document.querySelectorAll(".timeline-item").forEach((item) => {
        item.setAttribute("data-aos", "fade-left");
      });
    } else {
      document.querySelectorAll(".timeline-item").forEach((item, i) => {
        item.setAttribute("data-aos", i % 2 === 0 ? "fade-right" : "fade-left");
      });
    }
  }

  window.addEventListener("resize", updateAOSForMobile);
  window.addEventListener("load", updateAOSForMobile);

  const counters = document.querySelectorAll(".counter");
  const speed = 200;

  const animateCounters = () => {
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / speed;
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  };

  const section = document.querySelector(".india-numbers");
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    },
    { threshold: 0.4 }
  );

  observer.observe(section);

  const svgPaths = document.querySelectorAll("svg path");
  const infoCard = document.getElementById("info-card");
  const cardTitle = document.getElementById("card-title");
  const cardDescription = document.getElementById("card-description");
  const indiaMapContainer = document.querySelector(".ind");

  svgPaths.forEach((item) => {
    const showInfo = (event) => {
      event.stopPropagation(); // Prevent bubbling to document

      const stateId = item.id;
      const data = stateData[stateId];
      if (!data) return;

      cardTitle.textContent = data.name;
      cardDescription.textContent = data.description;

      if (window.innerWidth > 700) {
        const x = event.clientX + window.scrollX;
        const y = event.clientY + window.scrollY;
        infoCard.style.left = `${x + 15}px`;
        infoCard.style.top = `${y - infoCard.offsetHeight - 15}px`;
        infoCard.style.transform = "";
      } else {
        infoCard.style.left = `50%`;
        infoCard.style.top = `50%`;
        infoCard.style.transform = `translate(-50%, -50%)`;
        indiaMapContainer.style.position = "relative";
      }
      infoCard.style.position = "absolute";
      infoCard.style.display = "block";
    };

    const hideInfo = () => {
      infoCard.style.display = "none";
    };

    // Desktop hover
    item.addEventListener("mouseover", showInfo);
    item.addEventListener("mouseout", hideInfo);

    // Mobile / small screens → use pointerdown for taps
    item.addEventListener("pointerdown", showInfo);

    // Hide card when clicking anywhere else
    document.addEventListener("pointerdown", (e) => {
      if (!infoCard.contains(e.target) && !e.target.closest("svg path")) {
        infoCard.style.display = "none";
      }
    });

    const paths = document.querySelectorAll("svg path");
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const path = entry.target;
            path.style.animation = "draw 20s ease forwards";
            observer.unobserve(path);
          }
        });
      },
      { threshold: 0.4 }
    );
    paths.forEach((path) => observer.observe(path));
  });
});
