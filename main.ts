input.onButtonPressed(Button.A, function () {
    radio.sendString("beep boop this is micro bit: V1")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("")
})
radio.onReceivedString(function (receivedString) {
    OLED.writeStringNewLine(receivedString)
    basic.pause(5000)
    OLED.clear()
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("beep boop beep boop beep boop beep boop beep boop beep boop ")
})
OLED.init(128, 64)
radio.setGroup(1)
