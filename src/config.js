module.exports = {
  email: 'nipuna.upeksha@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/nipunaupeksha',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/nipuna_upeksha',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/NipunaUpeksha',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nipuna-upeksha',
    },
    {
      name: 'StackOverflow',
      url: 'https://stackoverflow.com/users/5941309/nipuna-upeksha',
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@nipunaupeksha',
    },
  ],

  colors: {
    first_color: '#579CE0',
    first_color_light: '#B6D9FC',
    accent_color: '#FFC300',
    text_color: '#232629',
    body_color: '#FBFCFE',
  },

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Certifications',
      url: '/#certifications',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
    {
      name: 'Pensieve',
      url: '/pensieve',
    },
  ],

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
