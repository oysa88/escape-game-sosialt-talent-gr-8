radio.onReceivedString(function (receivedString) {
    if (nivå == 1 && receivedString == "TALENT") {
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S1, 90)
        radio.setGroup(radioNivå2)
        nivå = 2
    }
    if (nivå == 2 && receivedString == "FINLAND") {
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S2, 90)
        radio.setGroup(radioNivå3)
        nivå = 3
    }
    if (nivå == 3 && receivedString == "ELEMENTÆRPARTIKKEL") {
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S3, 90)
        radio.setGroup(radioNivå4)
        nivå = 4
    }
    if (nivå == 4 && receivedString == "VITENSENTER") {
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S4, 90)
        radio.setGroup(radioNivå5)
        nivå = 5
    }
    if (nivå == 5 && receivedString == "MASKINIST") {
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S5, 90)
    }
})
let radioNivå5 = 0
let radioNivå4 = 0
let radioNivå3 = 0
let radioNivå2 = 0
let nivå = 0
nivå = 1
let radioNivå1 = 119
radioNivå2 = 124
radioNivå3 = 135
radioNivå4 = 141
radioNivå5 = 158
radio.setGroup(radioNivå1)
wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S1, 0)
wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S2, 0)
wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S3, 0)
wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S4, 0)
wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S5, 0)
