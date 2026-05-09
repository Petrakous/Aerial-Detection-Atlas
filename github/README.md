This project already uses git at the repository root.

Remote:

`origin = https://github.com/Petrakous/Aerial-Detection-Atlas.git`

Use the helper below to commit and push the current work:

```bash
./github/push.sh "your commit message"
```

What it does:

- stages all current changes in this repo
- creates a commit with your message
- pushes the current branch to `origin`

Useful checks:

```bash
git status --short
git remote -v
git branch --show-current
```
