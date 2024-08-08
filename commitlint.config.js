module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', ['ci', 'feat', 'fix', 'refactor', 'revert', 'style', 'test']],
  },
};
