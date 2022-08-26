/**
 * JS1K Tamagochi
 *
 * Demo authors: monsieurluge, DylanGauthier
 * Demo name: Tamagochi
 **/

// misc
M = Math
R = M.round

// color theme
w = '#FFF'
r = '#F00'
p = '#F6F'

// init
L = 99 // life points
W = 300 // room size (width & height)
T = new Image // tilemap
T.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAAuUlEQVQoU42SwRGDMAwE7TpCAWmAClIBTVBUmoBPnqkACsgnP6jDyXlynossM+hjyWaOPUkxjSmFX8R7zNn3jlflXN9r6J99qZfbErbXVn0XKQgxCmluf6YK02Uq5bAPAXUWtAKeIAhtgJBCeEPuCuLR2mdtRUnpErasohWtHiphBmlZJgn7Oj/mbIkBsu7aVYM6tKzTBr3aqxrKTfEI2cMzglgfrBPPP0IdhDd5tav2lfb0Hh71UCk/duCsl0Gvs7MAAAAASUVORK5CYIIA'

// game over
function G () {
    clearInterval(I)
    c.fillStyle = r
    c.fillRect(0, 0, W, W)
    c.fillStyle = w
    c.fillText('DED', 130, 150)
}

I = setInterval(function () {
    // clear the scene
    a.width += 0
    c.fillStyle = p
    c.fillRect(0, 0, W, W)

    // draw the Tamagochi
    c.drawImage(T, 0, 0, 10, 10, 20, 50, 70, 70)

    // draw the UI
    c.fillStyle = w
    c.fillText(R(L), 10, 290)

    // let it die
    L -= 0.1
    if (L <= 0) G()
}, 33)
