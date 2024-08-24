const data = {
  professionalName: 'Robert Hypax Ndiramiye',
  nameLink: {
    firstName: 'Robert',
    url: 'https://codepen.io/thunderandlightnings/full/oNpGVwq',
  },
  base64Image:
  firstName: 'Robert',
  primaryDescription: ' is a student at BYU-Idaho through BYU pathway-connect',
  workDescription1:
    'He loves his friends, his family, programming, and his dogs Bobby and Jimmy.',
  workDescription2:
    "He's a marathon runner and can run miles and miles.",
  linkTitleText: 'Check out his work below',
  linkedInLink: {
    link: 'https://www.linkedin.com/in/rhnd/',
    text: 'LinkedIn',
  },
  githubLink: {
    link: 'https://github.com/roberthypaxn',
    text: 'GitHub',
  },
  contactText:
    "Feel free to contact him at robert.hypax@gmail.com if you'd like for him to work for you!",
};
exports.getData = (req, res, next) => {
  // await mongodb call (for later)
  res.status(200).json(data);
};