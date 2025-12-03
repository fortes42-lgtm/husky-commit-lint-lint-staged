module.exports = {
  extends: ["@commitlint/config-conventional"],

  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "build",
        "ci",
        "chore",
        "revert",
        "api",
      ],
    ],
    "header-full-stop": [2, "never", "."],
    "header-case": [2, "always", "lower-case"],

    "body-min-length": [2, "always", 1],
  },
};
