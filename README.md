## Blog

Powered by jekyll

### Installation

- Clone the repo
- Run `make` in the terminal

### Notes

- First time installation
  - Set the a remote url on the root dir `git remote add origin http://github.com/maurizzzio/blog`
  - Create a `_site` folder (the site will be generated here)
  - Make `_site` a git submodule i.e. run `git init` inside the folder
  - Set the same remote url as the root dir `git remote add origin http://github.com/maurizzzio/blog`

- Every time you need to deploy the site run `make deploy`, see the script `deploy.sh` for additional details
