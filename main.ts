basic.showIcon(IconNames.Heart)
DFRobotWiFiIoTUART.WIFISetup(
SerialPin.P2,
SerialPin.P1,
"DFRobot-guest",
"dfrobot@2017"
)
basic.pause(5000)
basic.showIcon(IconNames.Happy)
DFRobotWiFiIoTUART.mqttSetup(
"YKsDl-YGg",
"YKyvlaYGgz",
"Ib8v_aLMg",
DFRobotWiFiIoTUART.SERVERS.English
)
basic.showIcon(IconNames.Asleep)
basic.pause(2000)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(2000)
    DFRobotWiFiIoTUART.mqttSendMessageMore("123", TOPIC.topic_0)
    basic.clearScreen()
    basic.pause(2000)
})
