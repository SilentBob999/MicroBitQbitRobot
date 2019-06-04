let MaxSpeedR = 0
let MaxSpeed = 0
let M2Target = 0
let Motor2Speed = 0
let M1Target = 0
let Motor1Speed = 0
let UltrasonicVar = 0
let SpeedFromDist = 0
let RGB = [QbitRGBColors.Red, QbitRGBColors.Blue, QbitRGBColors.Green, QbitRGBColors.Purple, QbitRGBColors.White]
let RGBIndex = 0
let LightsMode = 1 // 1 = auto 2 = Cops

input.onGesture(Gesture.ThreeG, function () {

})
input.onGesture(Gesture.SixG, function () {
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Eighth))
    music.playTone(262, music.beat(BeatFraction.Half))
    M1Target = Math.constrain(M1Target, -10, 10)
    M2Target = Math.constrain(M2Target, -10, 10)
    Move22()
    basic.pause(200)
})
input.onButtonPressed(Button.A, function () {
    SetColorsL()
    RGB.length
})
input.onButtonPressed(Button.B, function () {
    LightsMode
    if (LightsMode == 1) {
        LightsMode = 2
    } else {
        LightsMode = 1
    }
})
function SetColorsL() {
    RGBIndex += 1
    if (RGBIndex >= RGB.length) {
        RGBIndex = 0
    }
}
function CheckLights() {
    if (LightsMode == 1) {
        if (qbit.getSensorLightLevel() == 0) {
            qbit.setPixelRGB(Lights.Light1, RGB[RGBIndex])
            qbit.setPixelRGB(Lights.Light2, RGB[RGBIndex])
            qbit.setPixelRGB(Lights.Light3, RGB[RGBIndex])
            qbit.setPixelRGB(Lights.Light4, RGB[RGBIndex])
            qbit.showLight()
        } else {
            qbit.clearLight()
        }
    } else {
        qbit.setPixelRGB(Lights.Light1, QbitRGBColors.Blue)
        qbit.setPixelRGB(Lights.Light2, QbitRGBColors.Red)
        qbit.setPixelRGB(Lights.Light3, QbitRGBColors.Blue)
        qbit.setPixelRGB(Lights.Light4, QbitRGBColors.Red)
        qbit.showLight()
    }
}


function Move22() {
    if (M1Target < 30 || M2Target < 30) {
        if (M1Target > M2Target) {
            M1Target = M1Target + 40
            M2Target = M2Target - 40
        } else {
            M1Target = M1Target - 40
            M2Target = M2Target + 40
        }
    }
    Motor1Speed = Math.constrain(M1Target, MaxSpeedR, MaxSpeed)
    Motor2Speed = Math.constrain(M2Target, MaxSpeedR, MaxSpeed)
    qbit.setMotorSpeed(Motor1Speed, Motor2Speed)
}
function ReadSensor22() {
    UltrasonicVar = qbit.Ultrasonic()
    SpeedFromDist = Math.constrain(Math.map(UltrasonicVar, 40, 120, 30, 100), -100, 100)
    if (UltrasonicVar < 40) {
        SpeedFromDist = Math.constrain(Math.map(UltrasonicVar, 0, 40, -100, -30), -100, 100)
    }
    M1Target = SpeedFromDist
    M2Target = SpeedFromDist
    while (qbit.obstacleSensor(qbit.ObstacleSensor.SENSOR1_OBSTACLE)) {
        M1Target = M1Target + 20
        M2Target = M2Target - 80
        Move22()
    }
    while (qbit.obstacleSensor(qbit.ObstacleSensor.SENSOR2_OBSTACLE)) {
        M1Target = M1Target - 80
        M2Target = M2Target + 20
        Move22()
    }
}
qbit.qbitInit()
qbit.setQbitRun(qbit.QbitRunType.RUN)
qbit.setBrightness(10)
music.playTone(262, music.beat(BeatFraction.Eighth))
MaxSpeed = 70
MaxSpeedR = -70
M1Target = 0
M2Target = 0
Motor1Speed = 0
Motor2Speed = 0
basic.forever(function () {
    ReadSensor22()
    Move22()
    CheckLights()
})
