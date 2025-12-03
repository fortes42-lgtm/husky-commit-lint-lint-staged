// commitlint.config.js

module.exports = {
  // Extend the standard conventional config rules
  extends: ["@commitlint/config-conventional"],

  // Add custom rules
  rules: {
    // Enforce the 'type' to be one of the standard conventional types (e.g., feat, fix, chore)
    "type-enum": [
      2, // Error level
      "always", // Apply the rule always
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
      ], // Add 'api' for your specific example
    ],
    // The header (first line) is required
    "header-full-stop": [2, "never", "."], // Don't allow a period at the end of the first line
    "header-case": [2, "always", "lower-case"], // Enforce lowercase type (e.g., 'chore' not 'CHORE')

    // Custom Rule for the Korean Header
    // This is complex to do with a simple regex in commitlint.
    // A simpler way is to ensure a multi-line message and check the content.

    // For your specific case, you need a multi-line message.
    "body-min-length": [2, "always", 1], // Ensure there is a body (at least one character after the header)

    // Custom Rule to check for the required text "*** 내가 한일 정리 ***"
    // This rule uses a custom function to check the entire commit message.
    // NOTE: This part requires the ability to define custom commitlint rules,
    // which might be slightly involved. A simpler alternative is to rely
    // on a shell script in the `.husky/commit-msg` file.
    // For simplicity, let's proceed with the convention and a basic multi-line check.
  },
  // You can also add a parser preset to handle the (#7) part more strictly,
  // but the conventional config is usually lenient enough for it to be in the subject/description.
};
