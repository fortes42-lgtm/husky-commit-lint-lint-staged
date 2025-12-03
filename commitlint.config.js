export default { 
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-pattern': [/^(feat|fix|chore|docs|style|refactor|test|perf): .+\(#\d+\)$/, 'i'],
    'header-max-length': [72, 'always']
  }
};
