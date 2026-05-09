// a la dirección 0, también iba..
let cardID = 0
I2C_LCD1602.LcdInit(39)
basic.pause(500)
MFRC522.Init()
// 5 segundos
let TIEMPO_ABIERTO = 5000
// 5 segundos
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    I2C_LCD1602.ShowString("Scan your card", 0, 0)
    cardID = MFRC522.getID()
    if (cardID != 0) {
        I2C_LCD1602.clear()
        I2C_LCD1602.ShowNumber(cardID, 0, 1)
        basic.pause(1000)
        if (cardID == 39974732264) {
            // ABRIR
            servos.P1.setAngle(0)
            I2C_LCD1602.clear()
            I2C_LCD1602.ShowString("Acceso OK", 0, 0)
            I2C_LCD1602.ShowString("Antonio", 0, 1)
            basic.showIcon(IconNames.Yes)
            music.play(music.stringPlayable("C5 B - - - - - - ", 200), music.PlaybackMode.UntilDone)
            // ESPERA CON PUERTA ABIERTA
            basic.pause(TIEMPO_ABIERTO)
            // CERRAR AUTOMÁTICAMENTE
            servos.P1.setAngle(180)
            I2C_LCD1602.clear()
            I2C_LCD1602.ShowString("Cerrando...", 0, 0)
            basic.pause(1000)
            I2C_LCD1602.clear()
        } else {
            // TARJETA INCORRECTA
            servos.P1.setAngle(180)
            I2C_LCD1602.clear()
            I2C_LCD1602.ShowString("Acceso DENEGADO", 0, 0)
            basic.showIcon(IconNames.No)
            music.play(music.stringPlayable("C5 C5 - - - - - - ", 120), music.PlaybackMode.UntilDone)
            basic.pause(2000)
            I2C_LCD1602.clear()
        }
    }
})
