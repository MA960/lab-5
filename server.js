const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { URL } = require('node:url');

const root = __dirname;
const port = Number(process.env.PORT) || 3000;
const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.pdf': 'application/pdf',
  '.ico': 'image/x-icon'
};

const profile = {
  name: 'Mubeen Amir',
  title: 'Java & Spring Boot Backend Developer',
  location: 'Lahore, Pakistan',
  education: 'BS Computer Science undergraduate · Qarshi University, Lahore',
  rate: '$9.00/hr',
  availability: 'available for work',
  stack: ['Java', 'Spring Boot', 'Spring MVC', 'PostgreSQL', 'JPA', 'JWT / Sessions', 'DTOs', 'Git'],
  focus: ['REST APIs', 'authentication', 'validation', 'layered architecture']
};

function sendJson(response, payload) {
  response.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
  response.end(JSON.stringify(payload));
}

function safePath(urlPath) {
  const decoded = decodeURIComponent(urlPath);
  const requested = decoded === '/' ? '/index.html' : decoded.endsWith('/') ? `${decoded}index.html` : decoded;
  const filePath = path.resolve(root, `.${requested}`);
  return filePath.startsWith(root) ? filePath : null;
}

const server = http.createServer((request, response) => {
  const requestUrl = new URL(request.url, `http://${request.headers.host || 'localhost'}`);
  if (requestUrl.pathname === '/manus-routes.json') {
    const manifest = path.join(root, 'public', 'manus-routes.json');
    response.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
    return fs.createReadStream(manifest).pipe(response);
  }
  if (requestUrl.pathname === '/api/status') {
    return sendJson(response, { status: 'operational', statusCode: '200 OK', availability: profile.availability, checkedAt: new Date().toISOString() });
  }
  if (requestUrl.pathname === '/api/profile') {
    return sendJson(response, profile);
  }
  const filePath = safePath(requestUrl.pathname);
  if (!filePath) {
    response.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    return response.end('Forbidden');
  }
  fs.stat(filePath, (error, stats) => {
    if (error || !stats.isFile()) {
      response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      return response.end('Not found');
    }
    const ext = path.extname(filePath).toLowerCase();
    response.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(response);
  });
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Mubeen backend hub listening on http://0.0.0.0:${port}`);
});
