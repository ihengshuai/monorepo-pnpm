// https://stylelint.io/

module.exports = {
  extends: ["stylelint-config-standard", 'stylelint-config-recess-order', "stylelint-config-recommended-scss"],
  plugins: ["stylelint-scss"],
  rules: {
    "string-quotes": "single",
    "property-no-unknown": true,
    "selector-pseudo-class-no-unknown": true,
    "at-rule-empty-line-before": [
      "always",
      {
        except: ["blockless-after-same-name-blockless", "first-nested", "inside-block"],
        ignore: ["after-comment", "first-nested"],
      },
    ],
    "rule-empty-line-before": [
      "always",
      {
        except: ["after-single-line-comment", "first-nested"],
      },
    ],
    "block-no-empty": true,
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["ng-deep"],
      },
    ],
    "selector-type-no-unknown": [
      true,
      {
        ignoreTypes: ["/^d-/"],
      },
    ],
    "color-hex-length": "long",
    "import-notation": "string",
    "no-descending-specificity": null,
    "font-family-no-missing-generic-family-keyword": null,
    "no-duplicate-selectors": null,
    "declaration-block-no-duplicate-properties": [
      true,
      {
        ignore: ["consecutive-duplicates"],
      },
    ],
  },
};
