# minimal-jco-server

## Setup

- Environment: linux, github codespaces, or wsl
- Dependencies: node v22+
- Run `npm run setup-linux`:
    - Installs npm deps, minimal rust, rust cargo binstall, wasm cli tools via binstall
    - Make sure to close terminal / open a new terminal so tools available in path before running build
- Run `npm run build`
- In separate terminals:
    - `npm start`
        - First run compiles and takes a second, wait for message like `Serving HTTP on http://127.0.0.1:8000/`
    - `npm test`
        - Runs `curl` on the server