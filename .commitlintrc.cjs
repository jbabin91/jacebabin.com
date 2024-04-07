/** @type {import("cz-git").UserConfig} */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-min-length': [2, 'always', 2],
    'subject-empty': [2, 'never'],
  },
  prompt: {
    alias: {
      b: 'chore: :hammer: bump dependencies',
    },
    maxSubjectLength: 100,
    allowCustomIssuePrefix: false,
    allowEmptyIssuePrefix: false,
    skipQuestions: ['footer', 'scope'],
    useEmoji: true,
  },
};
