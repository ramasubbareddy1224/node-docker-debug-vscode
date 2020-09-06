# Add following configuration in .vscode/launch.json file
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Node.Js with Docker Attach",
            "type": "node",
            "request": "attach",
            "port": 9229,
            "address": "localhost",
            "localRoot": "${workspaceFolder}",
            "remoteRoot": "/usr/app",
            "protocol": "inspector",
            "restart": true,
            "skipFiles": [
                "<node_internals>/**/*.js",
                "${workspaceFolder}/node_modules/**/*.js"
              ]
        }
    ]
}
```