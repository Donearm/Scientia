---
title: Hugo 
bookCollapseSection: true
weight: 825
---

## Syntax Highlighting

Hugo makes use of [Chroma](https://github.com/alecthomas/chroma) as its syntax highlighter. It is possible to select the style from these [here](https://xyproto.github.io/splash/docs/all.html) by adding in Hugo config:

```toml
pygmentsStyle = "dracula"
```

## Multiline in frontmatter

It may be necessary to have content going over a single line in an Hugo frontmatter, in YAML. To have one, an escape character is needed, `|2-`. It may be used so:

```yaml
key: |2-
  Some content on line 1
  other content on line 2
  Further content on line 3
```

The spacing should be kept as inserted.
