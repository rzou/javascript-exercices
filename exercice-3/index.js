function start() {
    

    var intervalID = setInterval(function() {
        var values = getValues();
        values = increment(values[0], values[1], values[2], values[3]);
        display(values[0], values[1], values[2], values[3]);
    }, 1);
    var span = document.createElement('span');
    span.setAttribute('id', 'intervalID');
    span.setAttribute('value', intervalID);
    document.body.appendChild(span);
}
function stop() {
    var span = document.querySelector('#intervalID');
    if(span) {
        var intervalID = span.getAttribute("value");
        clearInterval(intervalID);
        span.remove();
    }
}
function reset() {
    var span = document.querySelector('#intervalID');
    if(span) {
        stop();
    }
    display(0,0,0,0);
    
}
// get values 
function getValues() {
    var hstr = document.querySelector('div.tim > span:nth-child(1)').textContent;
    var h = hstr.split(' ')[0];
    var mstr = document.querySelector('div.tim > span:nth-child(2)').textContent;
    var m = mstr.split(' ')[0];
    var sstr = document.querySelector('div.tim > span:nth-child(3)').textContent;
    var s = sstr.split(' ')[0];
    var msstr = document.querySelector('div.tim > span:nth-child(4)').textContent;
    var ms = msstr.split(' ')[0];
    return [parseInt(h), parseInt(m), parseInt(s), parseInt(ms)];
}
// increment
function increment(h, m, s, ms) {
    
    if(ms < 9) {
        ms += 1;
    } else {
        ms = 0;
        if(s < 59) {
            s += 1;
        } else {
            s = 0;
            if(m < 59) {
                m += 1;
            } else {
                m = 0;
                if(h<23) {
                    h += 1;
                } else {
                    h = 0;
                }
            }
        }
    }
    return [h, m, s, ms];
}
//display
function display(h, m, s, ms) {
    var spans = document.querySelectorAll("div .tim > span");
    
    if(spans.length >= 4) {
        spans[0].textContent = h+' h';
        spans[1].textContent = m+' m';
        spans[2].textContent = s+' s';
        spans[3].textContent = ms+' ms';
    }

}