


### Adding auto import sort for eslint

1. Install the plugin

```
    npm i eslint-plugin-simple-import-sort
```

2. Add rule in '.eslintrc.cjs'

```
    'simple-import-sort/imports': 'error'
```

3. Add simple-import-sort in the plugin array of '.eslintrc.cjs' file

```
    plugins: [..., 'simple-import-sort']
```

4. Open settings.json in vscode configuration settings

5. Add the following line

```
    "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
    } 
```