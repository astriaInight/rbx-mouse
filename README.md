# rbx-mouse
Mouse module designed for roblox lua, cannot be run from game scripts due to limitations.

# Installation
## Prerequisites
- Node.js & npm
- Lua executor

## Setup local server
You can download the local server in [releases](https://github.com/astriaInight/rbx-mouse/releases).

Run `update.bat` to automatically install any necessary packages. If any errors occur, try running it as administrator.
When it finishes, the window should close.
Now, you can run `start.bat` to start the local server.

## Using the lua module
Using the mouse module is relatively basic. As of writing this, it includes 3 main functions.
`mouse:SetPosition([ Vector2: position ])`, `mouse:GetPosition()`, and `mouse:GetScreenSize()`.

### Example
```lua
-- This will automatically get the newest version of the mouse lib
local mouse = loadstring(game:HttpGet("https://raw.githubusercontent.com/astriaInight/rbx-mouse/main/lua-lib/mouse.lua"))()

mouse:SetPosition(Vector2.new(0, 0))
```

## Things to know
The lua module requires the local server to be running while in use.
This is due to the fact that because of limitations with most executors, you cannot access the actual mouse without using another program.
