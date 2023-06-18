import Buttons from "../components/Header/Buttons";
import FormHeader from "../components/Header/Form";

export const list = [
  {
    id: 1,
    style: { bgImage: "bg-img-1", containerClass: "ml-auto text-right" },
    title: "History of surfing",
    description: `The riding of waves has likely existed since humans began swimming
  in the ocean. In this sense, bodysurfing is the oldest type of
  wave-catching. Standing up on what is now called a surfboard is a
  relatively recent innovation developed by the Polynesians.`,
    tabs: ["Home", "About Us", "Contact Us"],
    component: <Buttons/>
  },
  {
    id: 2,
    style: {
      bgImage: "bg-img-2",
      containerClass: "ml-auto mr-auto text-center",
    },
    title: "You should be here!",
    description: `5,000 capacity venue, holding some of the latest technology lighting with a 24 colour
  laser system Amnesia is one of the islands most legendary clubs.`,
    tabs: ["Home", "About Us", "Products", "Contact Us"],
    component: <FormHeader />
  },
  {
    id: 3,
    isCarousel: true,
    carousels: [
      {
        id: 1,
        style: {
          bgImage: "bg-img-3",
          containerClass: "ml-auto text-right",
        },
        title: "On the run tour.",
        description: `On the Run Tour: Beyoncé and Jay Z is a 2014 concert special which documents the September 12 and 13, 2014, shows of American singers`,
        tabs: ["Home", "About Us", "Contact Us"],
        notIcon: true,
        component: <div>1</div>
      },
      {
        id: 2,
        style: {
          bgImage: "bg-img-3-2",
          containerClass: "ml-auto mr-auto text-center",
        },
        title: "Island of legends.",
        description: `The islands of Malta and Gozo are brilliant for a family holiday, packed with fun places to visit whatever your children’s ages. The islands’ small size means everywhere is within easy reach.`,
        tabs: ["Home", "About Us", "Contact Us"],
        notIcon: true,
        component: <div>2</div>
      },
      {
        id: 3,
        style: {
          bgImage: "bg-img-3-3",
          containerClass: "mr-auto text-left",
        },
        title: "Arctic Sea ice.",
        description: `According to the National Oceanic and Atmospheric Administration, Ted Scambos, NSIDC lead scientist, puts the potentially record low maximum sea ice extent this year down to low ice extent in the Pacific and a late drop in ice extent in the Barents Sea.`,
        tabs: ["Home", "About Us", "Contact Us"],
        notIcon: true,
        component: <div>3</div>
      },
    ],
  },
];
