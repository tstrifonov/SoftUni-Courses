function gramophone(bandName, album, song) {
    let songDuration = (album.length * bandName.length) * song.length / 2;
    console.log(`The plate was rotated ${Math.ceil(songDuration / 2.5)} times.`)
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');