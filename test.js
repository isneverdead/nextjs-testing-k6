// ./test.js

import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  duration: '10s',
  vus: 50,
  thresholds: {
    http_req_duration: ['p(95)<1'], // 95% of requests should be below 500ms
    http_req_failed: ['rate<0.01'], // During the whole test execution, the error rate must be lower than 1%.
  },
};

export default function () {
  const res = http.get('https://thirsty-poincare-29dd81.netlify.app');
  sleep(1);
}
