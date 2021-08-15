local httpService = game:GetService("HttpService")

local mouse = {
    SetPosition = function(self, vector2)
        local data = {
            ["x"] = vector2.X,
            ["y"] = vector2.Y
        }
        task.spawn(function()
            game:HttpPost(
                "http://localhost:2828/set-mouse-pos",
                data
            )
        end)

        return
    end,
    GetPosition = function(self)
        local rawData = game:HttpGet("http://localhost:2828/get-mouse-pos")
        local jsonData = httpService:JSONDecode(rawData)
        local vector2 = Vector2.new(jsonData.x, jsonData.y)

        return vector2
    end,
    GetScreenSize = function(self)
        local rawData = game:HttpGet("http://localhost:2828/get-screen-size")
        local jsonData = httpService:JSONDecode(rawData)
        local vector2 = Vector2.new(jsonData.x, jsonData.y)

        return vector2
    end
}

return mouse
