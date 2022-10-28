module.exports = {
  '{src,test}/**/*.{ts,tsx}': ['eslint --max-warnings 0', 'prettier --write', 'git add'],
  '{src,test}/**/*.{yaml,yml}': ['prettier --write', 'git add']
}
