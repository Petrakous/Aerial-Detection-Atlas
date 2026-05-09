#!/bin/zsh

set -euo pipefail

repo_root="${0:A:h:h}"
cd "$repo_root"

if [[ $# -lt 1 ]]; then
  echo "Usage: ./github/push.sh \"commit message\""
  exit 1
fi

message="$1"
branch="$(git branch --show-current)"

if [[ -z "$branch" ]]; then
  echo "Could not determine the current git branch."
  exit 1
fi

git add -A

if git diff --cached --quiet; then
  echo "No staged changes to commit."
  exit 0
fi

git commit -m "$message"
git push origin "$branch"

echo "Pushed to origin/$branch"
