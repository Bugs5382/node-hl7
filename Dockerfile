# Minimal example image for running node-hl7-server in Kubernetes.
# This is intentionally simple — production deployments should pin the
# package version and consider a multi-stage build.
FROM node:22-alpine

WORKDIR /app

# Install only the runtime dependencies. `npm install --omit=dev` keeps
# the image small.
COPY docker/package.json docker/package-lock.json* ./
RUN npm install --omit=dev

# Copy the example servers.
COPY docker/server.js ./
COPY docker/tls.server.js ./

# Run as the unprivileged `node` user that ships with the official image.
USER node

# Defaults; override at runtime.
ENV NODE_ENV=production \
    HL7_PORT=3000

# Plain MLLP listener by default. The TLS variant lives at /app/tls.server.js
# — point a Kubernetes Deployment's `command:` at it when you need TLS.
EXPOSE 3000
CMD ["node", "server.js"]
