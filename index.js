var one = require("onecolor")
var osascript = require("osascript").eval

var iterm = function(red, green, blue){
  args = [red * 65535, green * 65535, blue * 65535]
  var color = JSON.stringify(args)
  var itermOsa = "Application('iTerm').currentTerminal.currentSession.backgroundColor=" + color
  osascript(itermOsa) //.pipe(process.stdout)
}
var hue = Math.random()
var color = new one.HSL(
  hue,
  0.8,
  0.25
)
console.log(hue)
iterm(color.red(), color.green(), color.blue())
