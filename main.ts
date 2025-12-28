let id_card = 0
I2C_LCD1602.LcdInit(39)
MFRC522.Init()
I2C_LCD1602.ShowString("Scan tu card", 0, 0)
basic.forever(function () {
    id_card = MFRC522.getID()
    if (true) {
        I2C_LCD1602.clear()
        I2C_LCD1602.ShowString("Pasa tu tarjeta", 0, 0)
        I2C_LCD1602.ShowNumber(MFRC522.getID(), 0, 1)
        basic.pause(3000)
        I2C_LCD1602.clear()
        I2C_LCD1602.ShowString("Pon la tarjeta", 0, 0)
    }
})
