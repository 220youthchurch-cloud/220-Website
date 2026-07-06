export const roles = [
  {
    id: 1,
    title: 'Home Group Leader',
    description: 'Hosts and shepherds a weekly small group. Facilitates Bible discussion, fosters community, follows up with members, and walks with people through life.',
    imagesPath: '/teams/home-group',
    gallery: ['header.jpg', 'img1.jpg'],
    active: true
  },
  {
    id: 2,
    title: 'Worship',
    description: 'Leads the congregation into the presence of God through music. Includes vocalists, instrumentalists, and worship leaders who serve at gatherings, services, and events.',
    imagesPath: '/teams/worship',
    gallery: ['header.jpg', 'img1.jpg', 'img2.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg', 'img7.jpg', 'img8.jpg', 'img9.jpg'],
    active: true
  },
  {
    id: 3,
    title: 'AV',
    description: 'Operates sound, projection, and lighting systems. Ensures that what is happening on stage reaches the room with clarity. The unseen team that makes everything seen and heard.',
    imagesPath: '/teams/av',
    gallery: ['header.jpg'],
    active: true
  },
  {
    id: 4,
    title: 'Media',
    description: 'Captures and creates content — photo, video, design, and storytelling. Runs the ministry’s social presence and produces media that points people to Christ.',
    imagesPath: '/teams/media',
    gallery: ['header.jpg'],
    active: true
  },
  {
    id: 5,
    title: 'Hospitality',
    description: 'First impressions and last impressions. Greets at the door, sets up spaces, prepares food and drinks, and ensures that every person who walks in feels welcomed and known.',
    imagesPath: '/teams/hospitality',
    gallery: ['header.jpg', 'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg'],
    active: true
  },
  {
    id: 6,
    title: 'Prayer',
    description: 'The engine room. Intercedes for the ministry, the leaders, and the people. Prays before, during, and after gatherings. Maintains a prayer rhythm that fuels everything else',
    imagesPath: '/teams/prayer',
    gallery: ['header.jpg', 'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img6.jpg', 'img7.jpg'],
    active: true
  },
  {
    id: 7,
    title: 'Events',
    description: 'Plans and executes 220 events — retreats, conferences, outreach nights, social gatherings, and special services. Logistics, coordination, and creative environment design.',
    imagesPath: '/teams/events',
    gallery: ['header.jpg', 'img1.jpg'],
    active: true
  },
  {
    id: 8,
    title: 'Evangelism',
    description: 'Leads the ministry in reaching the lost. Trains volunteers in sharing their faith, organizes outreach, and keeps the gospel mission front-and-center in everything 220 does.',
    imagesPath: '/teams/evangelism',
    gallery: ['header.jpg', 'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg', 'img7.jpg'],
    active: true
  },
  {
    id: 9,
    title: 'Discipleship',
    description: 'One-on-one and group mentoring. Walks with newer believers through the basics of following Christ. Develops younger leaders. Multiplies disciples who multiply disciples.',
    imagesPath: '/teams/discipleship',
    gallery: [],
    active: false
  }
]

export const getActiveRoles = () => {
  return roles.filter(role => role.active);
}