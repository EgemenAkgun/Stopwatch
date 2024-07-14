function timeToString(time)
    {
        diffinHours = time / 3600000; // if time is ms we can use 3.600.000
        h = Math.floor(diffinHours)

        diffinMinute = (diffinHours-h)*60
        m = Math.floor(diffinMinute)

        diffinSecond = (diffinMinute-m)*60;
        s = Math.floor(diffinSecond);

        let diffInMs = (diffinSecond - s) * 100;
        let ms = Math.floor(diffInMs);
        let hh = h.toString();
        let mm = m.toString();
        let ss = s.toString();
        let msms = ms.toString();
        //padStart method is execute with toString method.
        let hhh=hh.padStart(2,"0");
        let mmm=mm.padStart(2,"0");
        let sss=ss.padStart(2,"0");
        let msmsms   =msms.padStart(2,"0"); 

        return `${mmm}:${sss}:${msmsms}`;
    }



    let startTime;
    let elapsedTime = 0;
    let timerInterval;
    function print(txt) 
    {
        document.getElementById("display").innerHTML = txt;
    }

    function start()
    {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(function printTime()
                    {
                        elapsedTime = Date.now() - startTime;
                        print(timeToString(elapsedTime));
                    }, 10) //10 yapmak onemlı
    showButton("PAUSE");
    }
    function pause() 
    {
        clearInterval(timerInterval);
        showButton("PLAY");
    }
    function reset()
    {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
    showButton("PLAY");
    }

    function showButton(buttonKey) 
    {
    const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
    const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
    }

    let playButton = document.getElementById("playButton");
    let pauseButton = document.getElementById("pauseButton");
    let resetButton = document.getElementById("resetButton");

    playButton.addEventListener("click", start);
    pauseButton.addEventListener("click", pause);
    resetButton.addEventListener("click", reset);