let playlist = [{
    id: 0,
    artist: "dsa",
    song: "dsa",
},
{
    id: 1,
    artist: "dsad",
    song: "dsad"
}
];
let plists = [];
let id = 2;

module.exports = {
    plistAdder: (req, res) => {
        req.body.plistName
        plists.push({ id: id, plistName: req.body.plistName })
        id++
        res.status(200).send(plists)
    },
    plistEditor: (req, res) => {


    },
    plistDeleter: (req, res) => {
        for (let i = 0; i < plists.length; i++) {
            if (plists[i].id == +req.params.id) {
                plists.splice(i, 1)
            }
        }
        res.status(200).send(plists)
    },
    songGetter: (req, res) => {
        res.status(200).send(playlist)
    },
    songEditor: (req, res) => {
        req.params.id
        req.body.artist
        req.body.song
        for (let i = 0; i < playlist.length; i++) {
            if (playlist[i].id === +req.params.id) {
                playlist[i].artist = req.body.artist
                playlist[i].song = req.body.song
            }
        }
        res.status(200).send(playlist);
    },
    songAdder: (req, res) => {
        req.body.artist
        req.body.song
        playlist.push({ id: id, artist: req.body.artist, song: req.body.song })
        id++
        res.status(200).send(playlist)
    },
    // plistEditor: (req, res) => {
    //     const { plistName } = req.body;
    //     const updateID = req.params.id;
    //     const plistIndex = plists.findIndex(plist => plist.id == updateID);
    //     let plist = plists[plistIndex];

    //     plists[plistIndex] = {
    //         id: plist.id,
    //         plistName: plistName || plist.plistName
    //     };
    //     res.status(200).send(playlist);
    // },
    songRemover: (req, res) => {
        for (let i = 0; i < playlist.length; i++) {
            if (playlist[i].id === +req.params.id) {
                playlist.splice(i, 1)
            }
        }
        res.status(200).send(playlist)
    }

}