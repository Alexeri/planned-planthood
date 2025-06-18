document.addEventListener("DOMContentLoaded", () => {
  const cardData = [
    {
      image: "Assets/images/cards/cucumber.jpg",
      badges: [
        { name: "Blommor", class: "badge--flower" },
        { name: "Ätbart", class: "badge--edible" },
        { name: "Grönska", class: "badge--green" },
      ],
      title: "Gurka",
      description:
        "Gurka växer snabbt, är enkel att odla och ger mängder med gurkor, bara man är noga med vattning, omplantering, duschning och gödsling.",
      author: [
        {
          name: "Coolio",
          image: "https://avatar.iran.liara.run/public/2",
          date: "2024-04-01",
        },
      ],
    },
    {
      image: "Assets/images/cards/tomato.jpg",
      badges: [
        { name: "Solälskande", class: "badge--sunloving" },
        { name: "Lättodlat", class: "badge--easy" },
        { name: "Ätbart", class: "badge--edible" },
      ],
      title: "Tomat",
      description:
        "En perfekt grönsak att odla på balkongen eller i trädgården. Ger riklig skörd under sommaren.",
      author: [
        {
          name: "Anna Odlare",
          image: "https://avatar.iran.liara.run/public/82",
          date: "2024-12-05",
        },
      ],
    },
    {
      image: "Assets/images/cards/Pelargonium.jpg",
      badges: [
        { name: "Dekorativ", class: "badge--decorative" },
        { name: "Färgstark", class: "badge--colorful" },
        { name: "Tålig", class: "badge--robust" },
        { name: "Blommor", class: "badge--flower" },
      ],
      title: "Pelargon",
      description:
        "En vacker och lättskött blomma som trivs både inne och ute under sommaren.",
      author: [
        {
          name: "Blomsterkalle",
          image: "https://avatar.iran.liara.run/public/20",
          date: "2024-12-03",
        },
      ],
    },
    {
      image: "Assets/images/cards/basil.jpg",
      badges: [
        { name: "Kryddor", class: "" },
        { name: "Doftande", class: "badge--fragrant" },
        { name: "Solälskande", class: "badge--sunloving" },
      ],
      title: "Basilika",
      description:
        "En fantastisk krydda för pastarätter och sallader. Trivs bäst i ett soligt fönster.",
      author: [
        {
          name: "Krydd-Malin",
          image: "https://avatar.iran.liara.run/public/52",
          date: "2024-12-07",
        },
      ],
    },
    {
      image: "Assets/images/cards/salad.jpg",
      badges: [
        { name: "Snabbväxande", class: "badge--fast" },
        { name: "Ätbart", class: "badge--edible" },
        { name: "Grönska", class: "badge--green" },
      ],
      title: "Sallad",
      description:
        "Sallad är en av de enklaste grönsakerna att odla och ger snabba resultat för färska måltider.",
      author: [
        {
          name: "Grönis",
          image: "https://avatar.iran.liara.run/public/11",
          date: "2024-12-06",
        },
      ],
    },
    {
      image: "Assets/images/cards/fern.jpg",
      badges: [
        { name: "Luftfuktande", class: "badge--air" },
        { name: "Grönska", class: "badge--green" },
        { name: "Dekorativ", class: "badge--decorative" },
      ],
      title: "Ormbunke",
      description:
        "En klassisk växt som passar perfekt i badrummet eller på skuggiga platser.",
      author: [
        {
          name: "Naturvännen",
          image: "https://avatar.iran.liara.run/public/45",
          date: "2024-12-08",
        },
      ],
    },
  ];

  const doubleCardData = cardData.concat(cardData); // just for demonstration
  renderCards(doubleCardData);
});

function renderCards(cards) {
  const parentSection = document.getElementById("cards");
  parentSection.innerHTML = "";

  const cardList = document.createElement("ul");
  cardList.classList.add("cards__list");
  cardList.setAttribute("role", "list");

  cards.forEach((card) => {
    const liElement = document.createElement("li");

    const articleElement = document.createElement("article");
    articleElement.classList.add("card", "bg-primary-light");

    articleElement.innerHTML = `
      <figure class="card__image">
        <img src="${card.image}" alt="${card.title}" />
        <svg
        viewBox="0 0 71 93"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="card__watermark"
        aria-hidden="true"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 39.2725C6.13401 39.2725 3 42.4065 3 46.2725V49.079C3 52.1558 4.98508 54.769 7.74438 55.7076V64.6762C7.74438 80.162 20.2981 92.7157 35.7839 92.7157C51.2697 92.7157 63.8234 80.162 63.8234 64.6762V55.612C66.4446 54.6005 68.3041 52.0569 68.3041 49.079V46.2725C68.3041 42.4065 65.1701 39.2725 61.3041 39.2725H10ZM27.8766 56.079H22.2052L22.1124 50.079H27.8766V56.079ZM32.6209 56.079H57.8234V64.6762C57.8234 76.8483 47.956 86.7157 35.7839 86.7157C23.6118 86.7157 13.7444 76.8483 13.7444 64.6762V56.079H16.4059L16.3131 50.079H10C9.44772 50.079 9 49.6313 9 49.079V46.2725C9 45.7202 9.44772 45.2725 10 45.2725H61.3041C61.8564 45.2725 62.3041 45.7202 62.3041 46.2725V49.079C62.3041 49.6313 61.8564 50.079 61.3041 50.079H32.6209V56.079Z"
                fill="white"
            />
            <path
                d="M38.7837 17.233C38.7837 15.5761 37.4405 14.233 35.7837 14.233C34.1268 14.233 32.7837 15.5761 32.7837 17.233H38.7837ZM38.7837 41.4818V17.233H32.7837V41.4818H38.7837Z"
                fill="white"
            />
            <path
                d="M3.89136 3H21.5508C29.4114 3 35.7838 9.37232 35.7838 17.233V17.233H18.1243C10.2637 17.233 3.89136 10.8607 3.89136 3V3Z"
                stroke="white"
                stroke-width="6"
                stroke-linejoin="round"
            />
            <path
                d="M67.6763 10.1165H50.0168C42.1562 10.1165 35.7839 16.4888 35.7839 24.3495V24.3495H53.4433C61.3039 24.3495 67.6763 17.9771 67.6763 10.1165V10.1165Z"
                stroke="white"
                stroke-width="6"
                stroke-linejoin="round"
            />
        </svg>
      </figure>
      <ul class="card__badges" role="list">
        ${card.badges
          .map(
            (badge) => `<li class="badge ${badge.class}">${badge.name}</li>`
          )
          .join("")}
      </ul>
      <header class="card__header">
        <h3>${card.title}</h3>
        <p>${card.description}</p>
      </header>
      <footer class="card__author">
        <img src="${card.author[0].image}" alt="${
      card.author[0].name
    }s profilbild" />
        <div>
          <p>${card.author[0].name}</p>
          <time datetime="${card.author[0].date}" aria-label="Publicerad ${
      card.author[0].date
    }">${card.author[0].date}</time>
        </div>
      </footer>
    `;

    liElement.appendChild(articleElement);
    cardList.appendChild(liElement);
  });

  parentSection.appendChild(cardList);
}
