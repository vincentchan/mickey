# Mickey

Mickey is a minimal one-column, responsive theme for [Jekyll](http://jekyllrb.com).

It's inspired by [Hyde](http://hyde.getpoole.com), [Medium](http://medium.com), and [Squarespace](http://squarespace.com).

![Mickey screenshots](/assets/images/demo.png)

See Mickey in action with [the demo site](http://vincentchan.github.io/mickey) or [my personal blog](http://aneverendingdream.com).

## Contents

- [Installation](#installation)
- [Options](#options)
  - [Post front matter](#post-front-matter)
  - [Identity](#identity)
  - [Typography](#typography)
  - [Images](#images)
- [Development](#development)
- [Author](#author)
- [License](#license)

## Installation

Mickey requires [Jekyll](http://jekyllrb.com/) 2.x. and [Gulp](http://gulpjs.com/) for workflow automation.

Make sure to run `gem update jekyll` if you aren’t on the latest version or `gem install jekyll` if this is your first time installing it.

If you want to use Mickey, please follow these steps:

1. Fork the [Mickey](https://github.com/vincentchan/mickey) repo.
2. Clone the repo you just forked and rename it.
3. Run `npm install` to install the dependencies for the theme contained in `package.json`
4. Update `_config.yml` with your own info and replace demo posts and pages with your own. Full details below.

## Options

Mickey includes some customizable options:

### Post front matter

By default, we use the following:

```
---
layout:           post
title:            "your post title"
date:             2015-02-11T13:04:19+05:45 # XML Schema Date/Time
last_modified_at: 2015-03-15T05:20:00+05:45 # last page modified date/time
excerpt:          "for meta description" # Optional for overwriting content excerpt
categories:       your post categories # ["category1"] - best is to have one category in a post
tags:             your post tags # ["tag1", "tag2", "tag3"] - you can have several post tags
image:
  feature: your post featured image file name # image.jpg, suggested size:  2000x700px
  topPosition: 0px # top position for featured image if needed
bgContrast: dark # Featured image contrast
bgGradientOpacity: darker # darker or lighter - control featured image opacity
---
```

### Identity

To replace logos with your own, simply update the following files in `assets/images/`:

- `logo-white.svg`
- `logo-black.svg`
- `logo-text-white.svg`
- `logo-text-black.svg`

### Typography

Vertical rhythm and spacing are mostly handled by [typebase.css](http://devinhunt.github.io/typebase.css/). If you want to change any settings related to typography (e.g. fonts, type scale...etc), please do it in `_scss/_typography.scss`

#### Blockquote

We have two types of blockquote design:

```html
// For large featured quote
<blockquote class="largeQuote">...</blockquote>

// For normal quote
// Use 'u--startsWithDoubleQuote' class only when the quote starts with a double quote
<blockquote class="u--startsWithDoubleQuote"></blockquote>
```

#### Hanging quotes

If a paragraph starts with a quotation market, please add the following to support [hanging quotes](https://en.wikipedia.org/wiki/Hanging_punctuation):

```html
<p class="u--startsWithDoubleQuote">
...
</p>
```

### Images

To maintain vertical rhythm and spacing, I suggest using the following CSS class (e.g. `img--5xLeading`...`img--16xLeading`) to control the image height:

```html
<div class="img img--fullContainer img--14xLeading" style="background-image: url();"></div>
```

You can reference `_scss/_images.scss` for details.

## Development

Mickey has two branches, but only one is used for active development.

- `master` for development.  **All pull requests should be submitted against `master`.**
- `gh-pages` for our hosted landing page. **Please avoid using this branch.**

During development, simply run `gulp` in terminal and it will compile the jekyll site, compile Sass, create post thumbnails, launch BrowserSync & watch files for changes and recompile.

Source Sass files are located in `_scss/`, included into `main.scss`, and compile to `assets/css/main.css`.

Post thumbnails are automatically resized via Gulp's image resize package, and moved to `assets/images/thumbnails`. Any featured images you put in `assets/images/hero` will be automatically created

## Author

**Vincent Chan**
- <https://github.com/vincentchan>
- <https://twitter.com/vincentchan>


## License

Open sourced under the [MIT license](LICENSE.md).

**Disclaimer: This Jekyll theme is not affiliated with Disney. Obviously :)**
