# Test Case for Next.js Issue #10183

This repo shows an example of the Next.js issue [Can't provide multiple meta tags with the same name (#10183)](https://github.com/vercel/next.js/issues/10183).

It was created by first initializing a new Next.js project based on the head-elements example:

```bash
$ yarn create next-app --example head-elements next-meta-tag-issue
```

Then modifing `pages/index.js` to render 2 meta tags with the same name but different keys inside the Head component.

## Expected behavior

The page `head` should contain 4 meta tags with the name "citation_author", one for each author listed in the `authorNames` array.
