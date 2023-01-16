# Minimal SvelteKit+Pocketbase Auth Integration
As this repository title suggests, this is a quickstart template for integrating SvelteKit with PocketBase. It exclusively handles the signup-login-logout flow, and is unopinionated about the rest of your application.

## Setup
```bash
# Clone the repository
git clone ...
# Download Pocketbase
# https://pocketbase.io/docs/
wget https://github.com/pocketbase/.../.zip -O pocketbase
unzip pocketbase
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
# Run the sveltekit app
npm run dev
# Run the pocketbase server
./pocketbase serve
```