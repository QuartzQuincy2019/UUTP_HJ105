//display.js
function areaDisplay() {
    if (_SANDBOX_MODE == true) {
        keyTip.style.display = "none";
        displayElement.style.display = "none";
        progressCounter.style.display = "none";
    } else {
        keyTip.style.display = "";
        displayElement.style.display = "";
        progressCounter.style.display = "";
    }
}

function refreshTimerStatusText() {
    if (timer.intervalId) {
        timerStatusDisplayer.innerHTML = "Timer is running";
    } else {
        timerStatusDisplayer.innerHTML = "Timer stopped";
    }
}

/**
 * 
 * @param {Boolean} isCurrentDisplay 是否是这一个
 * @returns -1:失败 0:成功
 */
function refreshNextDisplay(isCurrentDisplay) {
    //刷新_NEXT_DISPLAY的元素
    //_NEXT_DISPLAY定义：当前输入的顶端
    if (!inputElement) {
        return -1;
    }
    if (inputElement.children.length <= 1/*仅光标或加载前 */ || inputElement.children.length - 1/*减1是光标*/ > displayElement.children.length) {
        return -1;
    }
    var currentNumber = inputElement.children.length - 1;
    _CURRENT_NUMBER = currentNumber - 1;
    if (isCurrentDisplay) {
        currentNumber -= 1;
    }
    if (currentNumber >= displayElement.children.length) {
        return -1;
    }
    //console.log(currentNumber);
    _NEXT_DISPLAY = document.getElementById("TYPING_TASK_CHARACTER_" + currentNumber + "");
    //console.log(_NEXT_DISPLAY);
    return 0;
}

function refreshDisplayKeyMap(key, chara) {
    displayKey.textContent = "[" + key + "] key is [" + chara + "]";
}

function refreshLoadingInfoText(article_number) {
    loadingInfo.innerHTML = "Article: " + (article_number + 1) + " / " + articles.length;
}

function refreshProgressText() {
    if (keyTipArray.length == 0) {
        return;
    }
    _CURRENT_NUMBER = getCurrentNumber();
    //console.log(_CURRENT_NUMBER);
    var len = keyTipArray.length;
    var rate = Math.round(_CURRENT_NUMBER / len * 10000) / 100;
    progressCounter.innerHTML = "Progress: " + _CURRENT_NUMBER + " / " + len + " (" + rate + "%)";
}

/**
 * 核心函数，刷新按键提示
 */
function refreshKeyTip() {
    if (keyTipArray.length == 0) {
        return;
    }
    _CURRENT_NUMBER = getCurrentNumber();//刷新现在要输入的number
    var idx = _CURRENT_NUMBER;
    setDone();
    if (!done) {
        var writeIn = "";
        var target = keyTipArray[idx];
        if (target == " ") {
            writeIn = "Space";
        } else {
            writeIn = target;
        }
        keyTip.innerHTML = "Please press KEY: " + writeIn;
    } else {
        //done
        var date = new Date();
        addTypingRecord(date);
        refreshTrl();
        keyTip.innerHTML = "Nice Job!<br>You completed your task within " + timer.totalTime / 1000 + " seconds!<br>Press " + __FK_LAUNCH_TASK + " to launch a new task!";
        timer.stop();
    }
}

function refreshSpeedDisplay(typingCount, _timer) {
    var speedDisplay = speedDisplayer;
    var LETTER_PER_SECOND = typingCount / (_timer.totalTime / 1000);
    LETTER_PER_SECOND = LETTER_PER_SECOND.toFixed(2);
    var LETTER_PER_MINUTE = LETTER_PER_SECOND * 60;
    LETTER_PER_MINUTE = LETTER_PER_MINUTE.toFixed(0);
    speedDisplay.innerHTML = LETTER_PER_SECOND + "   letters/s<br>" + LETTER_PER_MINUTE + "   letters/min";
    if (LETTER_PER_MINUTE == Infinity || LETTER_PER_SECOND == NaN) {
        speedDisplay.style.display = "none";
    } else {
        speedDisplay.style.display = "";
    }
    if (LETTER_PER_MINUTE <= 60) {
        speedDisplay.style.color = "#ff0000";
    } else if (LETTER_PER_MINUTE > 60 && LETTER_PER_MINUTE < 120) {
        speedDisplay.style.color = "#e43d00";
    } else if (LETTER_PER_MINUTE > 120 && LETTER_PER_MINUTE < 180) {
        speedDisplay.style.color = "#e48d00";
    } else if (LETTER_PER_MINUTE > 180 && LETTER_PER_MINUTE < 240) {
        speedDisplay.style.color = "#e4d100";
    } else if (LETTER_PER_MINUTE > 240 && LETTER_PER_MINUTE < 300) {
        speedDisplay.style.color = "#cde400";
    } else if (LETTER_PER_MINUTE > 300 && LETTER_PER_MINUTE < 360) {
        speedDisplay.style.color = "#a7e400";
    } else if (LETTER_PER_MINUTE > 360 && LETTER_PER_MINUTE < 420) {
        speedDisplay.style.color = "#1f9312";
    } else if (LETTER_PER_MINUTE > 420 && LETTER_PER_MINUTE < 480) {
        speedDisplay.style.color = "#0facae";
    } else if (LETTER_PER_MINUTE > 480) {
        speedDisplay.style.color = "#411bcb";
    }
}

function refreshKeyCounterText() {
    typingCounter.innerHTML = typingCount + " Ltr(s)&Sp(s)";
    backspaceCounter.innerHTML = backspaceCount + " Backspace(s)";
    keydownCounter.innerHTML = keydownCount + " Keydown(s)";
}

function refreshTelescope() {
    if (!__IS_TELESCOPE_ALWAYS_DISPLAY) {
        console.log(inputElement.isBelowViewport(false));
        if (inputElement.isBelowViewport(false)) {
            telescope.style.display = "";
        } else {
            telescope.style.display = "none";
            return;
        }
    } else {
        telescope.style.display = "";
    }
    telescope.innerHTML = "";
    var I_len = inputElement.children.length;
    if (I_len <= __MAX_TELESCOPE_CHARACTER) {
        for (var i = 0; i < inputElement.children.length; i++) {
            var writeIn;
            var thisChar = inputElement.children[i].innerHTML;
            if (thisChar == "<br>") {
                writeIn = __TELESCOPE_BREAKLINE;
            } else if (thisChar == " " || thisChar == "&nbsp;") {
                writeIn = __TELESCOPE_SPACE;
            } else {
                writeIn = thisChar;
            }
            telescope.innerHTML += "<span id=\"TELESCOPE_" + i + "\">" + writeIn + "</span>";
        }
    } else {
        for (var i = I_len - __MAX_TELESCOPE_CHARACTER; i < I_len; i++) {
            var writeIn;
            var thisChar = inputElement.children[i].innerHTML;
            if (thisChar == "<br>") {
                writeIn = __TELESCOPE_BREAKLINE;
            } else if (thisChar == " " || thisChar == "&nbsp;") {
                writeIn = __TELESCOPE_SPACE;
            } else {
                writeIn = thisChar;
            }
            telescope.innerHTML += "<span id=\"TELESCOPE_" + i + "\">" + writeIn + "</span>";
        }
    }
    if (_SANDBOX_MODE == false && keyTipArray.length != 0) {
        var T_id = 0;
        var I_id = 0;
        var T_key = "";
        var D_key = "";
        var T_len = telescope.children.length;
        //console.log("telescope.children.length = " + T_len);
        for (var j = 0; j <= T_len - 2; j++) {
            T_id = Number(telescope.children[j].id.slice(10));
            //console.log(telescope.children[j].id);
            I_id = T_id;
            //console.log("j=" + j + ", I_id=" + I_id);
            T_key = extractValue(CHARACTER, KEY, inputElement.children[I_id].innerHTML);//获取当前对应的key
            //console.log("j=" + j + ", T_key=" + T_key);
            D_key = keyTipArray[I_id];
            //console.log("j=" + j + ", D_key=" + D_key);
            if (D_key == T_key) {
                telescope.children[j].className = "TTC_correct";
            }
            if (D_key != T_key) {
                telescope.children[j].className = "TTC_incorrect";
            }
        }
    }
}

function clearTrl() {
    trl.innerHTML = "";
}

function refreshTrl() {
    var _arr = _TYPING_RECORDS;
    clearTrl();
    var _time;
    var _dateText = "";
    var _articleNum = 0;
    var _articleLen = 0;
    var _timeCost = 0;
    var _speedPerSec = 0;
    var _speedPerMin = 0;
    var _str = "";
    var strong = "<strong>";
    var _strong = "</strong>";
    var l = "[";
    var r = "]";
    var nbsp = " ";
    var _an_str = "";
    var _al_str = "";
    var _tc_str = "";
    var _sp_str = "";
    for (var i = 0; i < _arr.length; i++) {
        _time = _arr[i].completeTime;
        _dateText = "" + _time.getDate() + "/"
            + (_time.getMonth() + 1) + "/"
            + (_time.getYear() + 1900) + " "
            + _time.getHours() + ":"
            + _time.getMinutes() + ":"
            + _time.getSeconds();
        console.log(_dateText);
        _articleNum = _arr[i].chosenArticle;
        _articleLen = _arr[i].articleLength;
        _timeCost = _arr[i].timeCost;
        _speedPerSec = _arr[i].speedPerSec;
        _speedPerMin = _arr[i].speedPerMin;
        var id = i;
        var seq = i + 1;
        _an_str = __LIST_TEXT_ATCN + ": " + strong + _articleNum + _strong + "; ";
        _al_str = __LIST_TEXT_ATCL + ": " + strong + _articleLen + _strong + "; ";
        _tc_str = __LIST_TEXT_TIMEC + ": " + strong + _timeCost + "s" + _strong + "; ";
        _sp_str = __LIST_TEXY_SPD + ": "
            + strong + _speedPerSec + _strong + nbsp + __LIST_TEXT_U_LS + "; "
            + strong + _speedPerMin + _strong + nbsp + __LIST_TEXT_U_LM;
        _str = "<p id=\"TRL_" + id + "\">"
            + l + strong + seq + _strong + r + nbsp
            + l + strong + _dateText + _strong + r + nbsp
            + _an_str
            + _al_str
            + _tc_str
            + _sp_str
            + "</p>";
        trl.innerHTML += _str;
    }
    trl.scrollTop = trl.scrollHeight;
}

function adjustIoAreaSize(isAssignment, _SIZE) {
    if (!isAssignment) {
        for (var i = 0; i < _ioAreaPara.length; i++) {
            var cur = Number(window.getComputedStyle(_ioAreaPara[i])["font-size"].slice(0, -2));
            cur += _SIZE;
            _ioAreaPara[i].style["font-size"] = cur + "px";
        }
    } else {
        for (var i = 0; i < _ioAreaPara.length; i++) {
            _ioAreaPara[i].style["font-size"] = _SIZE + "px";
        }
    }
}