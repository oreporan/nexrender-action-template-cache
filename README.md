# nexrender-action-template-cache

## Install

`npm install nexrender-action-template-cache@latest`

## How to use

1. Add this module to `predownload` and `postdownload`
2. optionally configure a `cacheDir` name, make sure you set the same `cacheDir` for both steps


```json
{
    "template": {
            "src": "https://example.com/templates/ae-template-to-use.aep",
            "composition": "my_composition"
        },
    "assets": [],
    "actions": {
        "predownload": [
            {
                "module": "nexrender-action-template-cache",
                "cacheDir": "project_cache"
            }
        ],
        "postdownload": [
            {
                "module": "nexrender-action-template-cache",
                "cacheDir": "project_cache"
            }
        ]
    }
}
```
