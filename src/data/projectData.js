export const projects = [
  {
    id: 1,
    title: "Venturi Dryer",
    description: "A CFD simulation model of a drying unit.",
    type: "academic",
    useGlb: true,
    modelPath: "/models/venturi.glb",
    hoverModelPath: "/models/venturi.glb",
    image: "/images/project-2.webp",
    sections: [
      {
        heading: "Overview",
        text: "The project focuses on simulating a venturi dryer with a primary air inlet at 80°C and two additional inlets located at the bottom. The objective is to analyze fluid flow behavior, temperature variation, and the distribution of flow through the bottom inlets, as well as to determine the total outflow at the outlet. Twenty different design variations will be simulated under consistent boundary conditions to evaluate the dryer's performance across configurations. For each design variation, comprehensive reports will be generated to document key results and observations. These reports will then be analyzed to assess performance metrics and optimize the venturi dryer design."
      },
      {
        heading: "Design",
        text: "Design Variation Parameters:",
        points: ["Fluid Volume", "Adjustable wall distance", "Metal Foam Thickness"],
        image: "/images/project-1.webp"
      }
    ],
    gallery: [
      { src: "/images/project-1.webp", caption: "Velocity profile inside the venturi dryer" },
      { src: "/images/project-2.webp", caption: "Temperature distribution view" },
      { src: "/images/project-3.webp", caption: "Pressure drop visualization" },
      { src: "/images/project-4.webp", caption: "Mesh convergence study output" },
      { src: "/images/project-1.webp", caption: "Final design rendering" }
    ]
  },
  {
    id: 2,
    title: "Duct Optimization",
    description: "Design and analysis of optimized ducting systems for airflow improvement.",
    modelPath: "/models/duct.glb",
    type: "academic",
    image: "/images/project-1.webp",
    sections: [
      {
        heading: "Purpose",
        text: "This project investigates duct shapes that minimize flow resistance and pressure drops in HVAC and industrial applications. Simulations were run using various inlet velocities and curvature ratios."
      },
      {
        heading: "Methodology",
        text: "Optimization was performed using parametric sweep over design constraints.",
        points: ["Inlet velocity range: 2-10 m/s", "Curvature ratio: 0.5 - 2.0"],
        image: "/images/project-1.webp"
      }
    ],
    gallery: [
      { src: "/images/project-1.webp", caption: "Duct configuration 1 - baseline" },
      { src: "/images/project-2.webp", caption: "Streamline pattern in optimized duct" },
      { src: "/images/project-3.webp", caption: "Pressure contour mapping" }
    ]
  },
  {
    id: 3,
    title: "Hemp Cooling Chamber",
    description: "Thermal simulation of cooling chambers for hemp preservation.",
    modelPath: "/models/duct.glb",
    type: "freelance",
    image: "/images/project-3.webp",
    sections: [
      {
        heading: "Objective",
        text: "Design a chamber that maintains consistent internal humidity and temperature while minimizing energy consumption. CFD analysis was done for 5 cooling configurations."
      },
      {
        heading: "Simulation Parameters",
        points: ["Relative humidity: 65%", "Cooling fluid: R-134a", "Wall insulation: 50mm foam"],
        image: "/images/chamber-config.webp"
      }
    ],
    gallery: [
      { src: "/images/project-1.webp", caption: "Chamber configuration layout" },
      { src: "/images/project-2.webp", caption: "Internal temperature distribution" },
      { src: "/images/project-3.webp", caption: "CFD mesh structure" },
      { src: "/images/project-4.webp", caption: "Energy efficiency comparison chart" }
    ]
  },
  {
    id: 4,
    title: "Venturi Dryer",
    description: "A CFD simulation model of a drying unit.",
    type: "freelance",
    modelPath: "/models/venturi.glb",
    image: "/images/project-2.webp",
    sections: [
      {
        heading: "Overview",
        text: "The project focuses on simulating a venturi dryer with a primary air inlet at 80°C and two additional inlets located at the bottom. The objective is to analyze fluid flow behavior, temperature variation, and the distribution of flow through the bottom inlets, as well as to determine the total outflow at the outlet. Twenty different design variations will be simulated under consistent boundary conditions to evaluate the dryer's performance across configurations. For each design variation, comprehensive reports will be generated to document key results and observations. These reports will then be analyzed to assess performance metrics and optimize the venturi dryer design."
      },
      {
        heading: "Design",
        text: "Design Variation Parameters:",
        points: ["Fluid Volume", "Adjustable wall distance", "Metal Foam Thickness"],
        image: "/images/project-1.webp"
      }
    ],
    gallery: [
      { src: "/images/project-1.webp", caption: "Velocity profile inside the venturi dryer" },
      { src: "/images/project-2.webp", caption: "Temperature distribution view" },
      { src: "/images/project-3.webp", caption: "Pressure drop visualization" },
      { src: "/images/project-4.webp", caption: "Mesh convergence study output" },
      { src: "/images/project-1.webp", caption: "Final design rendering" }
    ]
  },
  {
    id: 5,
    title: "Duct Optimization",
    description: "Design and analysis of optimized ducting systems for airflow improvement.",
    modelPath: "/models/duct.glb",
    type: "academic",
    image: "/images/project-1.webp",
    sections: [
      {
        heading: "Purpose",
        text: "This project investigates duct shapes that minimize flow resistance and pressure drops in HVAC and industrial applications. Simulations were run using various inlet velocities and curvature ratios."
      },
      {
        heading: "Methodology",
        text: "Optimization was performed using parametric sweep over design constraints.",
        points: ["Inlet velocity range: 2-10 m/s", "Curvature ratio: 0.5 - 2.0"],
        image: "/images/project-1.webp"
      }
    ],
    gallery: [
      { src: "/images/project-1.webp", caption: "Duct configuration 1 - baseline" },
      { src: "/images/project-2.webp", caption: "Streamline pattern in optimized duct" },
      { src: "/images/project-3.webp", caption: "Pressure contour mapping" }
    ]
  },
  {
    id: 6,
    title: "Hemp Cooling Chamber",
    description: "Thermal simulation of cooling chambers for hemp preservation.",
    modelPath: "/models/duct.glb",
    type: "freelance",
    image: "/images/project-3.webp",
    sections: [
      {
        heading: "Objective",
        text: "Design a chamber that maintains consistent internal humidity and temperature while minimizing energy consumption. CFD analysis was done for 5 cooling configurations."
      },
      {
        heading: "Simulation Parameters",
        points: ["Relative humidity: 65%", "Cooling fluid: R-134a", "Wall insulation: 50mm foam"],
        image: "/images/chamber-config.webp"
      }
    ],
    gallery: [
      { src: "/images/project-1.webp", caption: "Chamber configuration layout" },
      { src: "/images/project-2.webp", caption: "Internal temperature distribution" },
      { src: "/images/project-3.webp", caption: "CFD mesh structure" },
      { src: "/images/project-4.webp", caption: "Energy efficiency comparison chart" }
    ]
  }
];