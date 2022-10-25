function songs(input) {
    class Song {
        constructor (typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let numberOfSongs = input.shift();
    let lastParameter = input.pop();
    let playlist = [];

    for (let song of input) {
        let infoHolder = song.split("_");
        let typeList = infoHolder[0];
        let name = infoHolder[1];
        let time = infoHolder[2];

        let newSong = new Song(typeList, name, time);
        playlist.push(newSong);
    }

    if (lastParameter == "all") {
        for (let song of playlist) {
            console.log(song.name);
        }
    } else {
        for (let song of playlist) {
            if (lastParameter == song.typeList) {
                console.log(song.name);
            }
        }
    }
}

/*
Define a class Song, which holds the following information about songs: typeList, name, and time.
You will receive the input as an array.
The first element n will be the number of songs. Next n elements will be the songs data in the following format:
 "{typeList}_{name}_{time}", and the last element will be typeList / "all".
Print only the names of the songs, which have the same typeList (obtained as the last parameter). 
If the value of the last element is "all", print the names of all the songs.
*/

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);
/*
DownTown
Kiss
Smooth Criminal
*/

songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);
/*
Andalouse
*/

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);
/*
Replay
Photoshop
*/