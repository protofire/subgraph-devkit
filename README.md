![example workflow](https://github.com/github/docs/actions/workflows/push.yaml/badge.svg)

# Subgraph Devkit

Happiness kit for subgraph developers

### Tech Stack:

- AssemblyScript

### Installation:

```shell
yarn add https://github.com/protofire/subgraph-devkit
```

### Use:

```typescript
import { decimals } from "protofire/subgraph-devkit";
```

### Contributing:

- **Fork** the repo on GitHub
- **Clone** the project to your own machine
- **Commit** changes to your own branch
- **Push** your work back up to your fork
- Submit a **Pull request** so that we can review your changes

#### Testing

In order to be able to take advantage of matchstick testing library, we have added a dummy subgraph inside tests folder.
Tests will live inside that dummy subgraph and you can run them as follows:

```shell
yarn test
```
