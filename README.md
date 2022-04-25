# HowTo Mono-repo

Mono-repo project examples using:

- [lerna](https://lerna.js.org/)
- [yarn](https://classic.yarnpkg.com/)
- [TypeScript](https://www.typescriptlang.org/)

`packages-client`와 `packages-server`는 각각의 `lerna.json`을 가진 mono-repo project이다.</br>
각각의 디렉토리 아래 있는 `packages-common`은 git의 submodule로 관리될 수 있다.

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
