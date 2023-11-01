import { check, sleep } from 'k6';
import http from 'k6/http';

export const options = {
  stages: [
    { duration: '30s', target: 10 },    // Steady load of 10 virtual users for 1 minute
    { duration: '1m', target: 150 },   // Spike to 100 virtual users for 1 minute
    { duration: '20s', target: 10 },    // Back to 10 virtual users for 1 minute
  ],
};

export default function () {
  const response = http.get('http://localhost:3000/');
  check(response, {
    'is status 200': (r) => r.status === 200,
  });
  sleep(1);
}
