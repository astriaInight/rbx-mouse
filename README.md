# rbx-mouse
Mouse module designed for roblox lua, cannot be run from game scripts due to limitations.

# Installation
## Prerequisites
- Node.js & npm
- Lua executor

## Setup local server
Run update.bat to automatically install any necessary packages. If any errors occur, try running it as administrator.
When it finishes, the window should close.
Now, you can run start.bat to start the local server.

## Use the lua module
Using the mouse module is relatively basic. As of writing this, it includes 3 main functions. `mouse:SetPosition([ Vector2: position ])`, `mouse:GetPosition()`, and `mouse:GetScreenSize()`.

### Example
```lua
local mouse = loadstring(game:HttpGet(""))()
``
