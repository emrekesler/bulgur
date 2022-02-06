function getHeadlines() {
  let headlines = [
    {
      title: "Ten tell-tale signs you need to get a new startup.",
      subtitle: "No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case.",
      image: "https://blogzine.webestica.com/assets/images/blog/1by1/01.jpg",
      user: {
        name: "Kesler",
        avatar: "https://blogzine.webestica.com/assets/images/avatar/03.jpg",
      },
      date: "Nov 15, 2021",
      readTime: "5 min read",
      category: { name: "Technology", color: "purple" },
      featured: true,
    },
    {
      title: "Double delight for Red Bull Racing Honda at damp Turkish Grand Prix",
      subtitle: "",
      image: "https://img.redbull.com/images/w_2929/q_auto,f_auto/redbullcom/2021/10/10/pu9vpczmlgzwilqrlufm/red-bull-racing",
      user: {
        name: "Kesler",
        avatar: "https://blogzine.webestica.com/assets/images/avatar/03.jpg",
      },
      date: "Aug 18, 2021",
      readTime: "5 min read",
      category: { name: "F1", color: "green" },
      featured: false,
    },
    {
      title: "Bi çıkıyo bi düşüyo",
      subtitle: "",
      image: "https://images.unsplash.com/photo-1643488056768-fe017dc164b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      user: {
        name: "Kesler",
        avatar: "https://blogzine.webestica.com/assets/images/avatar/03.jpg",
      },
      date: "Oct 15, 2022",
      readTime: "5 min read",
      category: { name: "Coin", color: "yellow" },

      featured: false,
    },
    {
      title: "Sıklıkla az az acıkıyorum.",
      subtitle: "No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case.",
      image: "https://images.unsplash.com/photo-1632158930341-46604b637a0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      user: {
        name: "Kesler",
        avatar: "https://blogzine.webestica.com/assets/images/avatar/03.jpg",
      },
      date: "Nov 15, 2021",
      readTime: "5 min read",
      category: { name: "Food", color: "blue" },
      featured: false,
    },
  ];

  return headlines;
}

function getBlogs() {
  let blogs = [
    {
      image: "https://blogzine.webestica.com/assets/images/blog/4by3/01.jpg",
      category: {
        name: "Travel",
        color: "purple",
      },
      title: "The Best Places to Visit in 2020",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      user: {
        name: "John Doe",
        avatar: "https://blogzine.webestica.com/assets/images/avatar/03.jpg",
      },
      date: "2020-01-01",
      readTime: "5 min read",
    },
    {
      image: "https://blogzine.webestica.com/assets/images/blog/4by3/02.jpg",
      category: {
        name: "F1",
        color: "green",
      },
      title: "Dirty little secrets about the business industry",
      subtitle: "Place voice no arises along to. Parlors waiting so against me no. Wishing calling is warrant settled was lucky. Express besides it present if at an opinion visitor.",
      user: {
        name: "John Doe",
        avatar: "https://blogzine.webestica.com/assets/images/avatar/03.jpg",
      },
      date: "2020-01-01",
      readTime: "5 min read",
    },
    {
      image: "https://blogzine.webestica.com/assets/images/blog/4by3/03.jpg",
      category: {
        name: "Gadgets",
        color: "green",
      },
      title: "Bad habits that people in the industry need to quit",
      subtitle: "For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do. Particular way thoroughly unaffected",
      user: {
        name: "John Doe",
        avatar: "https://blogzine.webestica.com/assets/images/avatar/03.jpg",
      },
      date: "2020-01-01",
      readTime: "5 min read",
    },
    {
      image: "https://blogzine.webestica.com/assets/images/blog/4by3/04.jpg",
      category: {
        name: "Sports",
        color: "blue",
      },
      title: "Around the web: 20 fabulous infographics about business",
      subtitle: "Projection favorable Mrs can be projecting own. Thirty it matter enable become admire in giving. See resolved goodness felicity shy civility domestic had but.",
      user: {
        name: "John Doe",
        avatar: "https://blogzine.webestica.com/assets/images/avatar/03.jpg",
      },
      date: "2020-01-01",
      readTime: "5 min read",
    },
    ,
    {
      image: "https://blogzine.webestica.com/assets/images/blog/4by3/05.jpg",
      category: {
        name: "Sports",
        color: "blue",
      },
      title: "7 common mistakes everyone makes while traveling",
      subtitle: "Drawings offended yet answered Jennings perceive laughing six did far. Rooms oh fully taken by worse do. Points afraid but may end law lasted.",
      user: {
        name: "Jacqueline",
        avatar: "https://blogzine.webestica.com/assets/images/avatar/04.jpg",
      },
      date: "2020-01-01",
      readTime: "5 min read",
    },
  ];

  return blogs;
}

module.exports = {
  getHeadlines,
  getBlogs,
};
