export const anGradientTitle = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export const anHero = {
  hidden: {
    opacity: 0,
    y: 100,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
    },
  },
}

export const anBrandList = {
  hidden: {
    scale: 0,
  },

  visible: (i) => ({
    scale: 1,
    transition: {
      delay: i * 0.15,
    },
  }),
}

export const anChooseList = {
  hidden: {
    y: 200,
    opacity: 0,
  },

  visible: (i) => ({
    y: 0,

    opacity: 1,
    transition: {
      delay: i * 0.15,
    },
  }),
}

export const anFactList = {
  hidden: {
    scale: 0,
  },

  visible: (i) => ({
    scale: 1,
    transition: {
      delay: i * 0.1,
    },
  }),
}


export const anAboutList = {
  hidden: (i) => ({
    x: i % 2 === 0 ? -100 : 100,
    opacity: 0,
  }),

  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i % 2 === 0 ? 0.2 : 0.3,
    },
  }),
}

export const anRoadmapList = {
  hidden: {
    y: 200,
    opacity: 0,
  },

  visible: (i) => ({
    y: 0,

    opacity: 1,
    transition: {
      delay: i * 0.15,
    },
  }),
}