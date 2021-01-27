const Settings = () => import('../routes/Settings');
const About = () => import('../routes/About');
const Authenticate = () => import('../routes/Authenticate');

export const prefetchMap = [
  {
    path: '/',
    prefetchComponents: [Authenticate],
  },
  {
    path: '/contact',
    prefetchComponents: [About],
  },
];
