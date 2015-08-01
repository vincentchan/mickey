##Foxy [![Build Status](https://travis-ci.org/shakyShane/foxy.svg?branch=master)](https://travis-ci.org/shakyShane/foxy)

Proxy with response moddin'

```js
var foxy = require("foxy");

var proxy = foxy("http://www.bbc.co.uk").listen(8000);

// Now access the site through http://localhost:8000
```

Built-in middleware will re-write html on the fly to update any urls & there'll also be the option
for additional rules for the re-writing.


