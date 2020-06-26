if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}
else {
    ready()
}

var playState = false;
var music = new Sound('music/fcpremix.mp3', 100, true)

function ready() {
    var playButton = document.getElementsByClassName('btn-play')[0]
    playButton.addEventListener('click', playClick)
}

function playClick(event) {
    if (!playState) play(event)
    else pause(event)
}

function play(event) {
    music.start()
    playState = true;
    var button = event.target
    button.innerText = '▐▐'
    button.style.fontSize = '10px'
}

function pause(event) {
    music.stop()
    playState = false;
    var button = event.target
    button.innerText = '▶️'
    button.style.fontSize = '1em'
}

function Sound(source, volume, loop)
{
    this.source = source;
    this.volume = volume;
    this.loop = loop;
    var son;
    this.son = son;
    this.finish = false;
    this.stop = function()
    {
        document.body.removeChild(this.son);
    }
    this.start = function()
    {
        if (this.finish) return false;
        this.son = document.createElement("embed");
        this.son.setAttribute("src", this.source);
        this.son.setAttribute("hidden", "true");
        this.son.setAttribute("volume", this.volume);
        this.son.setAttribute("autostart", "true");
        this.son.setAttribute("loop", this.loop);
        document.body.appendChild(this.son);
    }
    this.remove = function()
    {
        document.body.removeChild(this.son);
        this.finish = true;
    }
    this.init = function(volume, loop)
    {
        this.finish = false;
        this.volume = volume;
        this.loop = loop;
    }
}