/**
 * id llave azul 39974732264
 */
/**
 * id tarjeta blanca
 * 
 * 455378732505
 */
I2C_LCD1602.LcdInit(39)
MFRC522.Init()
I2C_LCD1602.ShowString("Scan tu card", 0, 0)
basic.forever(function () {
    I2C_LCD1602.ShowString("Scan tu card", 0, 0)
    if (MFRC522.getID() == 39974732264) {
        I2C_LCD1602.clear()
        I2C_LCD1602.ShowString("pasa", 0, 0)
        basic.showIcon(IconNames.Yes)
        basic.pause(2000)
    } else {
        I2C_LCD1602.clear()
        I2C_LCD1602.ShowString("stop", 0, 0)
        basic.showIcon(IconNames.No)
        basic.pause(2000)
    }
})
