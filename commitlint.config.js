module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "refactor", "style", "docs", "chore"], // allowed types
    ],
    "subject-pattern": [2, "always", /^.+\(#\d+\)$/],
    "subject-case": [0],
  },
};
