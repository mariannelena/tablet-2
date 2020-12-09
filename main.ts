input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 20)
    basic.pause(5000)
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 20)
    basic.pause(2500)
    Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, 20)
    basic.pause(1000)
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 20)
    basic.pause(1000)
    Kitronik_Move_Motor.stop()
})
basic.forever(function () {
	
})
