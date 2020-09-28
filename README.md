# date-fns-tz (patched)

This repository is a patched version of the last working copy of `date-fns-tz` from NPMJS, at version `v1.0.10`.
It contains only the packaged code. Source code can be found [here](https://github.com/marnusw/date-fns-tz).

The patch was taken from this [fork](https://github.com/constgen/date-fns-tz/tree/dst-hours-fix), and is discussed [here](https://github.com/marnusw/date-fns-tz/pull/51).

Steps to build the package (in case of new changes):
- fetch the last version of the source code
- implement the changes
- run `./scripts/build/package.sh`
- commit the packaged code from `date-fns-tz/tmp/package/`

Read more [about the original date-fns-tz package here](https://www.npmjs.com/package/date-fns-tz).
