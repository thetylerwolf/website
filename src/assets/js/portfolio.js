var portfolio = {
  entries: [
    {
      title: "25 Days of D3 - A free course",
      date: "12/2019",
      types: ["data visualization"],
      cover: {
        img: "25-days.jpg",
      },
      description: ["Data Visualization"],
      external: true,
      link: "https://observablehq.com/@thetylerwolf/25-days-of-d3",
      id: "25-days",
      style: {
        fontSize: 64,
      },
    },
    {
      title: "T-SNE UN Sustainable Development Goals",
      date: "06/2019",
      types: ["data visualization", "machine learning"],
      cover: {
        img: "dynamic-landscape.png",
      },
      description: ["Interactive Data Visualization"],
      external: false,
      link: "https://thetylerwolf.github.io/dynamiclandscape/",
      id: "dynamic-landscape",
      style: {
        fontSize: 64,
      },
    },
    {
      title: "Winner - A Challenge from Sweden - Mobility Observer",
      date: "03/2019",
      types: ["data visualization"],
      cover: {
        img: "mobility-observer.png",
      },
      description: ["Interactive Data Visualization"],
      external: true,
      lightText: true,
      link: "https://challengesgov.se/winner-mobility-observer/",
      id: "mobility-observer",
      style: {
        fontSize: 64,
      },
    },
    {
      title: "Morningstar",
      date: "12/2018",
      types: ["enterprise", "product design", "data visualization"],
      cover: {
        img: "dbrs.jpg",
      },
      description: [
        "Viewpoint Real Estate Research App",
        "Interactive Data Visualization",
      ],
      id: "dbrs",
    },
    {
      title: "The Brookings Institution",
      date: "10/2018",
      types: ["data visualization"],
      cover: {
        img: "voter-turnout.jpg",
      },
      description: ["Voter Turnout Graphics", "Data Visualization / Animation"],
      external: true,
      link:
        "https://www.brookings.edu/blog/up-front/2018/10/25/a-story-from-this-american-indian-reservation-has-important-lessons-for-americas-voter-turnout-problem/",
      id: "voter-turnout",
    },
    {
      title: "The Brookings Institution",
      date: "10/2018",
      types: ["data visualization"],
      cover: {
        img: "financial-crisis.jpg",
      },
      description: [
        "Financial Crisis Graphics with Dr. Ben Bernanke",
        "Data Visualization / Animation",
      ],
      external: true,
      link:
        "https://www.brookings.edu/blog/ben-bernanke/2018/09/13/financial-panic-and-credit-disruptions-in-the-2007-09-crisis/",
      id: "financial-crisis",
    },
    {
      title: "Odin Chart",
      date: "08/2018",
      types: ["data visualization"],
      cover: {
        img: "odin_banner.jpg",
      },
      description: [
        "Chart Design Tool",
        "Creator / Product Design / Data Visualization",
      ],
      external: true,
      link: "https://odinchart.com",
      id: "odin",
    },
    {
      title: "100 Years of VR - Experiments in WebGL",
      types: ["3D"],
      cover: {
        img: "100yvr.png",
      },
      description: ["Personal Experiments in 3D and VR"],
      external: true,
      link: "https://100yearsofvr.com/",
      id: "100yvr",
    },
    {
      title: "Spectrum News",
      date: "03/2019",
      types: ["data visualization"],
      cover: {
        img: "spectrum-diagnoses.jpg",
      },
      description: [
        "Autism Research Graphics",
        "Data Visualization / Animation",
      ],
      external: true,
      link:
        "https://www.spectrumnews.org/news/autism-diagnosis-often-followed-identification-conditions/",
      id: "spectrum-diagnoses",
    },
    // {
    //   'title': 'Basis from Sentinel Labs',
    //   'date': '06/2018',
    //   'types': [
    //     'enterprise',
    //     'product design',
    //     'data visualization'
    //   ],
    //   'cover': {
    //     'img': 'sentinel-labs.jpg'
    //   },
    //   'description': [
    //     'Commercial Real Estate Investment App',
    //     'Data Visualization / Product Design'
    //   ],
    //   'id': 'sentinel-labs',
    // },
    {
      title: "Sun Genomics",
      types: ["data visualization"],
      cover: {
        img: "Biome.jpg",
      },
      description: ["Gut Biome Graphics", "Interactive Data Visualization"],
      id: "biome",
    },
    {
      title: "Bitcoin Price Arbitrage",
      date: "11/2017",
      types: ["data visualization"],
      cover: {
        img: "BTC.jpg",
      },
      description: ["Data Visualization", "Personal Project"],
      external: true,
      link: "/btc/index.html",
      id: "btc",
    },
    {
      title: "UN Environment",
      types: ["data visualization"],
      cover: {
        img: "UNEP.jpg",
      },
      description: ["Interactive Data Visualization", "Data for a Cause"],
      external: true,
      link: "/UNEP/index.html",
      id: "UNEP",
    },
    {
      title: "Natural Meditation",
      date: "11/2017",
      types: ["design", "ux", "frontend"],
      cover: {
        img: "meditation_cover.jpg",
      },
      description: [
        "Meditation Timer App",
        "Market Research / Branding / Product Design / Data Visualization / Full Stack Development",
      ],
      id: "meditation",
    },
    {
      title: "SolidX / Vida",
      date: "10/2017",
      types: ["design", "ux", "frontend"],
      cover: {
        img: "vida_cover.jpg",
      },
      description: [
        "Personal Cybersecurity App",
        "UX Design / Product Management",
      ],
      lightText: true,
      id: "vida",
    },
    {
      title: "TVRN",
      types: ["design", "code", "vr"],
      cover: {
        img: "tvrn_cover.jpg",
      },
      description: [
        "Virtual Reality Art Exploration App",
        "UX Design / Virtual Reality Development",
      ],
      id: "tvrn",
      lightText: true,
    },
    {
      title: "Donors Choose",
      types: ["design", "graphics"],
      cover: {
        img: "donorschoose.jpg",
      },
      description: ["Interactive Data Visualization", "Data for a Cause"],
      external: true,
      link: "/donorschoose/index.html",
      id: "visualizations",
    },
    // {
    //   'title': 'Voxel Dreams',
    //   'types': [
    //     'design',
    //     'graphics'
    //   ],
    //   'cover': {
    //     'img': 'voxel_cover.jpg'
    //   },
    //   'description': [
    //     'Mobile Game',
    //     'Design / Graphics Programming'
    //   ],
    //   'lightText': true,
    //   'id': 'voxeldreams'
    // },
    {
      title: "Top UX Words of 2016",
      types: ["design", "graphics"],
      cover: {
        img: "uxwords.jpg",
      },
      description: [
        "Interactive Data Visualization",
        "Data Visualization / Animation",
      ],
      external: true,
      link: "/uxwords/index.html",
      id: "visualizations",
    },
    {
      title: "E*Trade Financial",
      types: ["design", "ux"],
      cover: {
        img: "etrade_cover.jpg",
      },
      description: ["Online Brokerage Firm", "UX Design / Product Management"],
      id: "etrade",
      fit: true,
    },
    // {
    //   'title': 'Swarm 2048',
    //   'types': [
    //     'design',
    //     'code'
    //   ],
    //   'cover': {
    //     'img': 'swarm2048_cover.jpg'
    //   },
    //   'description': [
    //     'Retro-Futuristic Browser Game',
    //     'Design / Front End Development'
    //   ],
    //   'lightText': true,
    //   'id': 'swarm2048'
    // },
    {
      title: "Interactive Dashboard",
      types: ["design", "graphics"],
      cover: {
        img: "CDDashboard.jpg",
      },
      description: [
        "Interactive Data Graphics",
        "Data Visualization / Animation",
      ],
      external: true,
      link: "/corrdisp/index.html",
      id: "visualizations",
    },
    {
      title: "NVD3",
      types: ["software", "dataviz"],
      lightText: true,
      cover: {
        img: "nvd3_cover.jpg",
      },
      description: [
        "Reusable charting library built on d3.js",
        "Data Visualization Design / Front End Development",
      ],
      id: "nvd3",
    },
    {
      title: "Novus Partners",
      types: ["ux", "frontend", "dataviz"],
      cover: {
        img: "novus_cover.jpg",
      },
      description: [
        "Financial Analytics App",
        "Data Visualization Design / UX Design / Front End Development",
      ],
      lightText: true,
      id: "novus",
    },
  ],
};

export default portfolio;
