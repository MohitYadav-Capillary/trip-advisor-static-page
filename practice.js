function getElement(id) {
  return document.getElementById(id);
}

function createElement(tag) {
  return document.createElement(tag);
}

const url = "https://jsonplaceholder.typicode.com/users";

let flag = false;

const getUsers = () => {
  if (flag) return;
  flag = true;
  axios
    .get(url)
    .then((res) => {
      res.data.forEach((user) => addToLayout(user));
    })
    .catch((error) => {
      console.log(error);
    });
};

const addToLayout = (user) => {
  const tagList = [
    getElement("name__ul"),
    getElement("address__ul"),
    getElement("company__ul"),
  ];
  const tagNames = [user.name, user.address.city, user.company.name];

  for (let i = 0; i < 3; i++) {
    const ele = createElement("li");
    ele.innerText = tagNames[i];
    tagList[i].appendChild(ele);
  }
};

const cards = [
  {
    image_url:
      "https://www.xbhp.com/machines/wp-content/uploads/2021/02/Mahindra-Thar-to-Thar-Desert-Online-1.jpg",
    p_text: "Top Destinations",
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1703514881823-eda837e5fbbd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D",
    p_text: "Trending Destinations",
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1700223173743-08aec265b213?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D",
    p_text: "Food Destinations",
  },
  {
    image_url:
      "https://images.unsplash.com/photo-1509080536688-5fad9e647633?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D",
    p_text: "Nature Destinations",
  },
  {
    image_url:
      "https://www.xbhp.com/machines/wp-content/uploads/2021/02/Mahindra-Thar-to-Thar-Desert-Online-1.jpg",
    p_text: "Top Destinations",
  },
];

const createCard = (card) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  const img = document.createElement("img");
  img.src = card.image_url;
  const p = document.createElement("p");
  p.classList.add("p-text");
  p.innerText = card.p_text;
  cardDiv.appendChild(img);
  cardDiv.appendChild(p);
  return cardDiv;
};

const cardContainer = document.getElementById("cards-section");

cards.forEach((card) => {
  cardContainer.appendChild(createCard(card));
});
