# node-hl7

Monorepo for Node.js HL7 packages.

## Packages

| Package | Version | Description |
|---------|---------|-------------|
| [node-hl7-client](./packages/node-hl7-client) | [![npm](https://img.shields.io/npm/v/node-hl7-client)](https://www.npmjs.com/package/node-hl7-client) | HL7 client — build, send, and parse HL7 messages |
| [node-hl7-server](./packages/node-hl7-server) | [![npm](https://img.shields.io/npm/v/node-hl7-server)](https://www.npmjs.com/package/node-hl7-server) | HL7 server — accept and process incoming HL7 messages |

## Requirements

- Node.js `>=22.0.0`
- npm `>=10`

## Getting Started

```bash
# Install all dependencies
npm install

# Build all packages
npm run build

# Run all tests
npm test

# Lint all packages
npm run lint
```

## Development

```bash
# Run tests in watch mode (per package)
npm run test:watch -w packages/node-hl7-client
npm run test:watch -w packages/node-hl7-server

# Run tests with coverage (all packages)
npm run test:coverage

# Generate docs (all packages)
npm run typedoc
```

## License

MIT — see [LICENSE](./LICENSE)
