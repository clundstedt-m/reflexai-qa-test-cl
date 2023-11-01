import { check, sleep } from 'k6';
import http from 'k6/http';

export const options = {
  stages: [
    { duration: '30s', target: 10 }, // Ramp up to 10 virtual users over 30 secs
    { duration: '45s', target: 10 }, // Maintain 10 virtual users for 45 secs
    { duration: '10s', target: 0 },  // Ramp down to 0 virtual users over 10 secs
  ],
};

export default function () {
  const pages = ['/', '/finance', '/crypto', '/analytics'];
  const randomPage = pages[Math.floor(Math.random() * pages.length)];
  const response = http.get(`http://localhost:3000${randomPage}`);
  check(response, {
    'is status 200': (r) => r.status === 200,
  });
  sleep(1);
}
