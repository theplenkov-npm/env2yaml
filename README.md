Command line to store environment variables in yaml file

### Install
```
npm i -g env2yaml
```

### Usage

```
$ env2yaml [VARIABLES]
```

### Arguments

```
VARIABLES Comma-separated list of variables to output
```

### Options

```
-h, --help show CLI help
-o, --output=output [default: env.yaml] Output file
-v, --version show CLI version
```

### generation of yaml files with values from package.json
another way of calling it is via npx. THe difference here - you can have here values from package.json. Just for example, command like
```shell
$ npx env2yaml npm_package_name,npm_package_version
```

creates me a file like this:
```yaml
npm_package_name: env2yaml
npm_package_version: 0.0.8
```

then later on I can use it for example to generate other yaml files:

```
image:
        repository: docker.com/projects/{{.Values.npm_package_name}}
        tag: v{{.Values.npm_package_version}}
```

```
helm template ./chart -f env.yaml > application.yaml
```
