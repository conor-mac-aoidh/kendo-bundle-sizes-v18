# KendoBundleSize

This project demos bundle size increases with the kendo for angular components between versions 16.3 and 17.0.

## 16.3

The `main` branch uses `16.3`:

```
Initial Chunk Files   | Names         |  Raw Size | Estimated Transfer Size
main.RIJTRRH7.js      | main          |   1.69 MB |               336.38 kB
styles.T5MD566R.css   | styles        | 671.79 kB |                74.23 kB
polyfills.TWGW6P2R.js | polyfills     |  33.27 kB |                10.88 kB
chunk-YGFNLDZQ.js     | -             | 661 bytes |               661 bytes

                      | Initial Total |   2.38 MB |               422.14 kB
```

`stats.json` is attached here: https://github.com/conor-mac-aoidh/kendo-bundle-sizes-v18/actions/runs/14199846786

## 17.2

The [`kendo-17.x`](https://github.com/conor-mac-aoidh/kendo-bundle-sizes-v18/tree/kendo-17.x) branch used `17.2`:

```
Initial Chunk Files   | Names         |  Raw Size | Estimated Transfer Size
main.BDPEPMKS.js      | main          |   2.59 MB |               511.80 kB
styles.T5MD566R.css   | styles        | 671.79 kB |                74.23 kB
polyfills.NBW4H6SF.js | polyfills     |  33.27 kB |                10.83 kB
chunk-MRJ2UCUH.js     | -             | 730 bytes |               730 bytes

                      | Initial Total |   3.28 MB |               597.58 kB
```

`stats.json` is attached here: https://github.com/conor-mac-aoidh/kendo-bundle-sizes-v18/actions/runs/14199973161

## 18.3

The [`kendo-18.x`](https://github.com/conor-mac-aoidh/kendo-bundle-sizes-v18/tree/kendo-18.x) branch used `18.3` (current latest version):

```
Initial Chunk Files   | Names         |  Raw Size | Estimated Transfer Size
main.IBNJC6RS.js      | main          |   2.66 MB |               521.84 kB
styles.T5MD566R.css   | styles        | 671.79 kB |                74.23 kB
polyfills.NBW4H6SF.js | polyfills     |  33.27 kB |                10.83 kB
chunk-MRJ2UCUH.js     | -             | 730 bytes |               730 bytes

                      | Initial Total |   3.35 MB |               607.61 kB
```
