import { check, sleep } from 'k6';
import http from 'k6/http';

export const options = {
  stages: [
    { duration: '1m', target: 50 },  // Ramp up to 50 virtual users over 1 minute
    { duration: '3m', target: 50 },  // Stay at 50 virtual users for 3 minutes
    { duration: '1m', target: 0 },   // Ramp down to 0 virtual users over 1 minute
  ],
};

export default function () {
  const response = http.get('http://localhost:3000/');
  check(response, {
    'is status 200': (r) => r.status === 200,
  });
  sleep(1); // Add a small delay between requests just to make sure nothing breaks
}
