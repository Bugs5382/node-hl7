# Minimal example image for running node-hl7-server in Kubernetes.
# Build from the repo root:
#   npm install && npm run build --workspaces
#   docker build -t docker-node-hl7-server:latest -f docker/Dockerfile .
#
# docker/package.json pulls both workspace packages via `file:` refs so
# the image builds against the local source — no npm publish required.
FROM node:22-alpine

WORKDIR /app

# Mirror the on-disk layout so docker/package.json's `file:../packages/...`
# refs resolve. /app/package.json + /packages/{client,server}/ matches the
# repo's `docker/` + `packages/` siblings.
#
# Only the published-shape pieces (lib/, README, LICENSE, package.json)
# are copied — `npm install` honors the workspace's `files:` allowlist
# regardless, so anything else would be wasted bytes.
COPY packages/node-hl7-client/package.json /packages/node-hl7-client/
COPY packages/node-hl7-client/lib /packages/node-hl7-client/lib
COPY packages/node-hl7-client/README.md /packages/node-hl7-client/
COPY packages/node-hl7-client/LICENSE /packages/node-hl7-client/
COPY packages/node-hl7-server/package.json /packages/node-hl7-server/
COPY packages/node-hl7-server/lib /packages/node-hl7-server/lib
COPY packages/node-hl7-server/README.md /packages/node-hl7-server/
COPY packages/node-hl7-server/LICENSE /packages/node-hl7-server/

COPY docker/package.json ./
RUN npm install --omit=dev --no-package-lock

COPY docker/server.js ./
COPY docker/tls.server.js ./

USER node

ENV NODE_ENV=production \
    HL7_PORT=3000

EXPOSE 3000

# Plain MLLP listener by default. The TLS variant lives at /app/tls.server.js
# — point a Kubernetes Deployment's `command:` at it when you need TLS.
CMD ["node", "server.js"]
