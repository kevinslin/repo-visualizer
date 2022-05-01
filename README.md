# Dendron Repo Visualizer

Note: this is a fork of [repo-visualizer](https://github.com/githubocto/repo-visualizer) with a few adjustments to make it work for Dendron and the CLI. 

## Quickstart

Install dependencies

```sh
# install and build dependencies
yarn
node build.js
```

Generate your own

```sh
node dendron.js -r {relative-path-to-repo}
```
## Inputs

- -r | --wsRoot : root of your dendron workspace

## Outputs

### `svg`

The contents of the diagram as text. This can be used if you don't want to handle new files.

### diagram-${vaultName}.svg

output of the svg 

<!-- A GitHub Action that creates an SVG diagram of your repo. Read more [in the writeup](https://octo.github.com/projects/repo-visualization).

## Inputs

### `output_file`

A path (relative to the root of your repo) to where you would like the diagram to live.

For example: images/diagram.svg

Default: diagram.svg

### `excluded_paths`

A list of paths to folders to exclude from the diagram, separated by commas.

For example: dist,node_modules

Default: node_modules,bower_components,dist,out,build,eject,.next,.netlify,.yarn,.vscode,package-lock.json,yarn.lock

### `excluded_globs`

A semicolon-delimited array of file [globs](https://globster.xyz/) to exclude from the diagram, using [micromatch](https://github.com/micromatch/micromatch) syntax. Provided as an array.

For example:

```yaml
excluded_globs: "frontend/*.spec.js;**/*.{png,jpg};**/!(*.module).ts"
# Guide:
# - 'frontend/*.spec.js' # exclude frontend tests
# - '**/*.{png,ico,md}'  # all png, ico, md files in any directory
# - '**/!(*.module).ts'  # all TS files except module files
```

### `root_path`

The directory (and its children) that you want to visualize in the diagram, relative to the repository root.

For example: `src/`

Default: `''` (current directory)

### `max_depth`

The maximum number of nested folders to show files within. A higher number will take longer to render.

Default: 9

### `should_push`

Whether to make a new commit with the diagram and push it to the original repository.

Should be a boolean value, i.e. `true` or `false`. See `commit_message` and `branch` for how to customise the commit.

Default: `true`

### `commit_message`

The commit message to use when updating the diagram. Useful for skipping CI. For example: `Updating diagram [skip ci]`

Default: `Repo visualizer: updated diagram`

### `branch`

The branch name to push the diagram to (branch will be created if it does not yet exist).

For example: `diagram`

### `artifact_name`

The name of an [artifact](https://docs.github.com/en/actions/guides/storing-workflow-data-as-artifacts) to create containing the diagram.

If unspecified, no artifact will be created.

Default: `''` (no artifact)

### `file_colors`

You can customize the colors for specific file extensions. Key/value pairs will extend the [default colors](https://github.com/githubocto/repo-visualizer/pull/src/language-colors.json).

For example: '{"js": "red","ts": "green"}'
default: '{}'

