import fs from 'fs';
export function ExportAds(file) {
    // sky, paint, juice, 
    const gameName = "bino2";
    const idea = "Saveprincess_MultiChar";

    const network = ['AppLovin', "Google", "Unity", "Mintegral", "Iron", "Tiktok"];
    let linkGameIos;
    let linkGameAndroid;
    linkGame();
    function linkGame() {

        if (gameName.toLowerCase() == 'sky') {
            linkGameIos = "https://apps.apple.com/us/app/sky-raptor/id1518974662";
            linkGameAndroid = "https://play.google.com/store/apps/details?id=com.skyraptor.spaceshooter";
        } else if (gameName.toLowerCase() == 'bino1') {
            linkGameIos = "";
            linkGameAndroid = "https://play.google.com/store/apps/details?id=com.superbinogo.jungleboyadventure";
        } else if (gameName.toLowerCase() == 'bino2') {
            linkGameIos = "https://apps.apple.com/us/app/super-bino-go-2-jump-n-run/id1482598122";
            linkGameAndroid = "https://play.google.com/store/apps/details?id=com.superbinogo.jungleboyadventure2";
        } else if (gameName.toLowerCase() == 'mano') {
            linkGameIos = "";
            linkGameAndroid = "https://play.google.com/store/apps/details?id=com.manojungle.superpixel.classicgame";
        } else if (gameName.toLowerCase() == 'paint') {
            linkGameIos = "";
            linkGameAndroid = "https://play.google.com/store/apps/details?id=monster.paintpicker.paintyourworld";
        } else if (gameName.toLowerCase() == 'juice') {
            linkGameIos = "";
            linkGameAndroid = "https://play.google.com/store/apps/details?id=monster.juiceblending.relaxingpingame";
        } else if (gameName.toLowerCase() == 'bl') {
            linkGameIos = "";
            linkGameAndroid = "https://play.google.com/store/apps/details?id=com.monster.beautyandlove.trickypuzzle";
        } else {
            console.log("Lỗi tên game");
        }
    }

    const upFolder = './../build';

    fs.readFile("../Bino1.html", 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        let date = new Date().toISOString().slice(0, 10).replace('-', '_').replace('-', '_');

        for (let i = 0; i < network.length; i++) {
            switch (network[i]) {
                case "AppLovin":
                    try {
                        var dir = `${upFolder}/${network[i]}`;
                        if (!fs.existsSync(dir)) {
                            fs.mkdirSync(dir);
                        }
                        var result = data
                            .replace(`background: #171717 url(./splash.png) no-repeat center`, `background: #171717`)
                            .split(`console.log("GOTOSTORE")`).join(`
                    let device = "Android";
                    const linkGameIos = "${linkGameIos}";
                    const linkGameAndroid = "${linkGameAndroid}";
                    function getMobileOperatingSystem() {
                        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
                    
                        if (/android/i.test(userAgent)) {
                            device = "Android";
                        } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                            device = "iOS";
                        } else {
                            device = "Android";
                        }
                    
                    }
                    getMobileOperatingSystem();
                    
                       switch (device) {
                            case "Android":
                                mraid.open("${linkGameAndroid}")
                                break;
                            case "iOS":
                                mraid.open("${linkGameIos}")
                                break;
                            default: 
                                mraid.open("${linkGameAndroid}")
    
                        }
                   ;`)
                        fs.writeFile(`./${dir}/${date}_PA_${gameName}_${idea}.html`, result, 'utf8', function (err) {
                            if (err) return console.log(err);
                        });
                    } catch { console.log(`error in network: ${network[i]}`) }
                    break;
                case "Google":
                    try {
                        var dir = `${upFolder}/${network[i]}`;
                        if (!fs.existsSync(dir)) {
                            fs.mkdirSync(dir);
                        }
                        var result = data
                            .replace(`background: #171717 url(./splash.png) no-repeat center`, `background: #171717`)
                            .split(`console.log("GOTOSTORE")`).join(`
                    let device = "Android";
                    const linkGameIos = "${linkGameIos}";
                    const linkGameAndroid = "${linkGameAndroid}";
                    function getMobileOperatingSystem() {
                        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
                    
                        if (/android/i.test(userAgent)) {
                            device = "Android";
                        } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                            device = "iOS";
                        } else {
                            device = "Android";
                        }
                    
                    }
                    getMobileOperatingSystem();
                    
                        window.open(device == "Android" ? linkGameAndroid : linkGameIos)
                   ;`)

                        fs.writeFile(`./${dir}/${date}_PA_${gameName}_${idea}.html`, result, 'utf8', function (err) {
                            if (err) return console.log(err);
                        });
                    } catch { console.log(`error in network: ${network[i]}`) }
                    break;

                case "Unity":
                    try {
                        var dir = `${upFolder}/${network[i]}`;
                        if (!fs.existsSync(dir)) {
                            fs.mkdirSync(dir);
                        }
                        var result = data
                            .replace(`background: #171717 url(./splash.png) no-repeat center`, `background: #171717`)
                            .split(`console.log("GOTOSTORE")`).join(`
                            let device = "Android";
                    const linkGameIos = "${linkGameIos}";
                    const linkGameAndroid = "${linkGameAndroid}";
                    function getMobileOperatingSystem() {
                        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
                    
                        if (/android/i.test(userAgent)) {
                            device = "Android";
                        } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                            device = "iOS";
                        } else {
                            device = "Android";
                        }
                    
                    }
                    getMobileOperatingSystem();
                    
                       switch (device) {
                            case "Android":
                                mraid.open("${linkGameAndroid}")
                                break;
                            case "iOS":
                                mraid.open("${linkGameIos}")
                                break;
                            default: 
                                mraid.open("${linkGameAndroid}")
    
                        }
                    `)

                        fs.writeFile(`./${dir}/${date}_PA_${gameName}_${idea}.html`, result, 'utf8', function (err) {
                            if (err) return console.log(err);
                        });
                    } catch { console.log(`error in network: ${network[i]}`) }
                    break;

                case "Mintegral":
                    try {
                        var dir = `${upFolder}/${network[i]}`;
                        if (!fs.existsSync(dir)) {
                            fs.mkdirSync(dir);
                        }
                        var result = data
                            .replace(`background: #171717 url(./splash.png) no-repeat center`, `background: #171717`)
                            .split(`console.log("GOTOSTORE")`).join(`
                                        window.install && window.install();
                                        window.gameEnd && window.gameEnd();
    
                                        `)
                            .replace("//MINTE", `
                            function gameStart() { };
                            window.gameReady && window.gameReady();
                            function gameClose() { };
                            `)

                        fs.writeFile(`./${dir}/${date}_PA_${gameName}_${idea}.html`, result, 'utf8', function (err) {
                            if (err) return console.log(err);
                        });
                    } catch { console.log(`error in network: ${network[i]}`) }
                    break;

                case "Iron":
                    try {
                        var dir = `${upFolder}/${network[i]}`;
                        if (!fs.existsSync(dir)) {
                            fs.mkdirSync(dir);
                        }
                        var result = data
                            .replace(`background: #171717 url(./splash.png) no-repeat center`, `background: #171717`)
                            .replace(`<!-- IRON1 -->`, `
                            
                        <script>
                        function getScript(e,i){var n=document.createElement("script");n.type="text/javascript",n.async=!0,i&&(n.onload=i),n.src=e,document.head.appendChild(n)}function parseMessage(e){var i=e.data,n=i.indexOf(DOLLAR_PREFIX+RECEIVE_MSG_PREFIX);if(-1!==n){var t=i.slice(n+2);return getMessageParams(t)}return{}}function getMessageParams(e){var i,n=[],t=e.split("/"),a=t.length;if(-1===e.indexOf(RECEIVE_MSG_PREFIX)){if(a>=2&&a%2===0)for(i=0;a>i;i+=2)n[t[i]]=t.length<i+1?null:decodeURIComponent(t[i+1])}else{var o=e.split(RECEIVE_MSG_PREFIX);void 0!==o[1]&&(n=JSON&&JSON.parse(o[1]))}return n}function getDapi(e){var i=parseMessage(e);if(!i||i.name===GET_DAPI_URL_MSG_NAME){var n=i.data;getScript(n,onDapiReceived)}}function invokeDapiListeners(){for(var e in dapiEventsPool)dapiEventsPool.hasOwnProperty(e)&&dapi.addEventListener(e,dapiEventsPool[e])}function onDapiReceived(){dapi=window.dapi,window.removeEventListener("message",getDapi),invokeDapiListeners()}function init(){window.dapi.isDemoDapi&&(window.parent.postMessage(DOLLAR_PREFIX+SEND_MSG_PREFIX+JSON.stringify({state:"getDapiUrl"}),"*"),window.addEventListener("message",getDapi,!1))}var DOLLAR_PREFIX="$$$",RECEIVE_MSG_PREFIX="DAPI_SERVICE:",SEND_MSG_PREFIX="DAPI_AD:",GET_DAPI_URL_MSG_NAME="connection.getDapiUrl",dapiEventsPool={},dapi=window.dapi||{isReady:function(){return!1},addEventListener:function(e,i){dapiEventsPool[e]=i},removeEventListener:function(e){delete dapiEventsPool[e]},isDemoDapi:!0};init();
                        </script>`)
                            .split(`console.log("GOTOSTORE")`).join(`
                            let device = "Android";
                            const linkGameIos = "${linkGameIos}";
                            const linkGameAndroid = "${linkGameAndroid}";
                            function getMobileOperatingSystem() {
                                var userAgent = navigator.userAgent || navigator.vendor || window.opera;
                            
                                if (/android/i.test(userAgent)) {
                                    device = "Android";
                                } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                                    device = "iOS";
                                } else {
                                    device = "Android";
                                }
                            
                            }
                            getMobileOperatingSystem();
    
                dapi.openStoreUrl(device == "Android" ? linkGameAndroid : linkGameIos);
            `)
                            .replace("//IRON2", `
                            
                window.onload = function(){
                    (dapi.isReady()) ? onReadyCallback() : dapi.addEventListener("ready", onReadyCallback);	
                    //here you can put other code that not related to dapi logic
                };
    
                function onReadyCallback(){
                    //no need to listen to this event anymore
                    dapi.removeEventListener("ready", onReadyCallback);
                    let isAudioEnabled = !!dapi.getAudioVolume();
    
                    if(dapi.isViewable()){
                        adVisibleCallback({isViewable: true});
                    }
    
                    dapi.addEventListener("viewableChange", adVisibleCallback);
                    dapi.addEventListener("adResized", adResizeCallback);
                    dapi.addEventListener("audioVolumeChange",         audioVolumeChangeCallback);
                }
    
                function adVisibleCallback(event){
                    console.log("isViewable " + event.isViewable);
                    if (event.isViewable){
                        screenSize = dapi.getScreenSize();
                        //START or RESUME the ad
                    } else {
                        //PAUSE the ad and MUTE sounds
                    }
                }
    
                function adResizeCallback(event){
                    screenSize = event;
                }
    
                function audioVolumeChangeCallback(volume){
                    let isAudioEnabled = !!volume;
                    if (isAudioEnabled){
                        //START or turn on the sound
                    } else {
                        //PAUSE the turn off the sound
                    }
                }
                `);

                        fs.writeFile(`./${dir}/${date}_PA_${gameName}_${idea}.html`, result, 'utf8', function (err) {
                            if (err) return console.log(err);
                        });
                    } catch { console.log(`error in network: ${network[i]}`) }
                    break;
                case "Tiktok":
                    try {
                        var dir = `${upFolder}/${network[i]}`;
                        if (!fs.existsSync(dir)) {
                            fs.mkdirSync(dir);
                        }
                        var result = data
                            .replace(`background: #171717 url(./splash.png) no-repeat center`, `background: #171717`)
                            .replace(`<!-- TIKTOK -->`, `<script src="https://sf16-muse-va.ibytedtos.com/obj/union-fe-nc-i18n/playable/sdk/playable-sdk.js"></script>`)
                            .split(`console.log("GOTOSTORE")`).join(`window.playableSDK.openAppStore();`)

                        fs.writeFile(`./${dir}/${date}_PA_${gameName}_${idea}.html`, result, 'utf8', function (err) {
                            if (err) return console.log(err);
                        });
                    } catch { console.log(`error in network: ${network[i]}`) }
                    break;
                default:
                    break;
            }

        }

    });

}
