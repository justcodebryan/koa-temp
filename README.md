# Git hooks are not set as executable warning

if terminal console prints message: `hint: The '.husky/commit-msg' hook was ignored because it's not set as executable.`, pls run the following command in terminal.

```bash
chmod ug+x .husky/*
chmod ug+x .git/hooks/*
```
