export const anMobileMenu = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 30px 30px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(0px at 100% 0px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

export const anNavList = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const anNavItem = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export const anSocialItem = {
  open: {
    scale: 1,
    transition: {
      scale: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    scale: 0,
    transition: {
      scale: { stiffness: 1000 },
    },
  },
}

export const anBtnClose = {
  open: {
    rotate: 0,
    transition: {
      rotate: { stiffness: 10, velocity: -10 },
    },
  },
  closed: {
    rotate: 180,
    transition: {
      rotate: { stiffness: 10 },
    },
  },
}

export const anSubnavList = {
  hidden: { opacity: 1, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
}

export const anSubnavItem = {
  hidden: { x: -100, opacity: 0 },

  visible: {
    x: 0,
    opacity: 1,
  },
}