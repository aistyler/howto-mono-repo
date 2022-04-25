# HowTo Mono-repo

Mono-repo project examples using:

- [lerna](https://lerna.js.org/)
- [yarn](https://classic.yarnpkg.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Initialize project folder

```sh
yarn init --yes --private
curl https://www.toptal.com/developers/gitignore/api/node > .gitignore

yarn add -D lerna typescript ts-node tsconfig-paths @types/node
yarn add -D jest ts-jest @types/jest

yarn lerna init
yarn tsc --init

# create sub packages
mkdir packages/{app-server,app-client,lib-common,lib-server}
yarn init --yes --cwd packages/app-server
yarn init --yes --cwd packages/app-client
yarn init --yes --cwd packages/lib-server
yarn init --yes --cwd packages/lib-common
```
