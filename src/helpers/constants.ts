export const SPACING: number = 10;

export const COLORS = {
  white: "#FFFFFF",
  light: "#F5F8FE",
  primary: "#487DD2",
  dark: "#04031D",
  transparent: "rgba(0, 0, 0, 0.3)",
};

export const TOURS = [
  {
    id: 1,
    title: "Reprehenderit magna",
    image: require("../assets/images/dubai.jpg"),
    images: [
      {
        id: 1,
        image: require("../assets/images/bali2.jpg"),
      },
      {
        id: 2,
        image: require("../assets/images/dubai.jpg"),
      },
      {
        id: 3,
        image: require("../assets/images/anthony-delanoix-Q0-fOL2nqZc-unsplash.jpg"),
      },
    ],
    price: "$ 83",
    duration: "3 hours",
    rating: 3.5,
    description:
      "Qui sint commodo pariatur laborum excepteur cillum ex. Sit quis do velit veniam commodo id. Eiusmod sit nostrud irure eiusmod pariatur officia.",
  },
  {
    id: 2,
    title: "Voluptate laborum",
    image: require("../assets/images/anthony-delanoix-Q0-fOL2nqZc-unsplash.jpg"),
    images: [
      {
        id: 2,
        image: require("../assets/images/jezael-melgoza-7H77FWkK_x4-unsplash.jpg"),
      },
      {
        id: 1,
        image: require("../assets/images/bali.jpg"),
      },
      {
        id: 3,
        image: require("../assets/images/anthony-delanoix-Q0-fOL2nqZc-unsplash.jpg"),
      },
    ],
    price: "$ 982",
    duration: "3 hours",
    rating: 3.5,
    description:
      "Aute exercitation amet aliqua minim. Duis elit aliqua nisi in id anim velit aliquip. Reprehenderit eiusmod nulla pariatur aliquip eu aliquip sit sit minim consequat non elit.",
  },
  {
    id: 3,
    title: "Eiusmod labore",
    image: require("../assets/images/bali.jpg"),
    images: [
      {
        id: 1,
        image: require("../assets/images/bali2.jpg"),
      },
      {
        id: 2,
        image: require("../assets/images/bali.jpg"),
      },
      {
        id: 3,
        image: require("../assets/images/anthony-delanoix-Q0-fOL2nqZc-unsplash.jpg"),
      },
    ],
    price: "$ 214",
    duration: "3 hours",
    rating: 3.5,
    description:
      "Adipisicing nulla cupidatat dolore commodo dolore dolor consequat. Ipsum aliquip incididunt aliquip adipisicing minim amet aliquip. Reprehenderit duis ea minim esse laborum dolore consequat anim et voluptate elit est nisi velit. Ullamco elit commodo aliquip Lorem voluptate cupidatat dolore nulla ut laborum in. Lorem ipsum nostrud enim Lorem. Cupidatat non et eu ea ipsum sit fugiat pariatur tempor labore officia ullamco et. Cillum aute magna minim cillum nostrud laborum culpa quis veniam ullamco et excepteur.",
  },
  {
    id: 4,
    title: "Dolore proident",
    image: require("../assets/images/jezael-melgoza-7H77FWkK_x4-unsplash.jpg"),
    images: [
      {
        id: 3,
        image: require("../assets/images/anthony-delanoix-Q0-fOL2nqZc-unsplash.jpg"),
      },
      {
        id: 1,
        image: require("../assets/images/bali2.jpg"),
      },
      {
        id: 2,
        image: require("../assets/images/bali.jpg"),
      },
    ],
    price: "$ 98",
    duration: "3 hours",
    rating: 3.5,
    description:
      "Fugiat anim excepteur reprehenderit velit ullamco officia. Non aliquip aliquip sunt magna laboris Lorem laboris ut ea. Tempor ad aliqua magna duis Lorem sunt anim cillum enim in.",
  },
];

export const CATEGORIES = [
  {
    id: 1,
    title: "Sights",
    tours: [...TOURS, ...TOURS],
  },
  {
    id: 2,
    title: "Tours",
    tours: [...TOURS, ...TOURS, ...TOURS],
  },
  {
    id: 3,
    title: "Advantures",
    tours: [...TOURS, ...TOURS, ...TOURS, ...TOURS],
  },
];

export const ADVANTURES =  [
  {
    id: 1,
    title: "Kayaking",
    image: require("../assets/images/advantures/kayaking-con.png"),
  },
  {
    id: 2,
    title: "Ballooning",
    image: require("../assets/images/advantures/ballooning-icon.png"),
  },
  {
    id: 3,
    title: "Hiking",
    image: require("../assets/images/advantures/hiking-icon.png"),
  },
  {
    id: 4,
    title: "Snorkeling",
    image: require("../assets/images/advantures/snorkeling-icon.png"),
  },
];
