var quotes = [
    {
        q:"I've got a feeling, this year's for me and you",
        o:["Sex Pistols", "The Pogues", "Ramones"],
        a:1
    },
    {
        q:"There's unlimited supply and there is no reason why",
        o:["Sex Pistols", "Ramones", "The Sultans of Ping FC"],
        a:0
    },
    {
        q:"There's no stopping the cretins from hopping",
        o:["The Sultans of Ping FC", "Blondie", "Ramones"],
        a:2
    },
    {
        q:"It's alright to say things can only get better, you haven't lost your brand new sweater",
        o:["Blondie", "The Sultans of Ping FC", "Patti Smith"],
        a:1
    },
    {
        q:"Dreaming is free",
        o:["Blondie", "Patti Smith", "Television"],
        a:0
    },
    {
        q:"The words are just rules and regulations to me",
        o:["Television", "Patti Smith", "Iggy Pop"],
        a:1
    },
    {
        q:"Look here, junior, don't you be so happy and for heaven's sake, don't you be so sad",
        o:["Iggy Pop", "Buzzcocks", "Television"],
        a:2
    },
    {
        q:"I'm worth a million in prizes",
        o:["Buzzcocks", "Iggy Pop", "New York Dolls"],
        a:1
    },
    {
        q:"Ever fallen in love with someone you shouldn't've fallen in love with?",
        o:["New York Dolls", "MC5", "Buzzcocks"],
        a:2
    },
    {
        q:"Trash, go pick it up, don't take your life away",
        o:["MC5", "New York Dolls", "Elvis Costello"],
        a:1
    },
    {
        q:"Kick out the jams!",
        o:["MC5", "The Clash", "Elvis Costello"],
        a:0
    },
    {
        q:"What's so funny 'bout peace love and understanding?",
        o:["The Clash", "Elvis Costello", "Talking Heads"],
        a:1
    },
    {
        q:"If I go there will be trouble, if I stay it will be double",
        o:["Talking Heads", "The Clash", "The Damned"],
        a:1
    },
    {
        q:"We're on the road to nowhere",
        o:["The Damned", "The Pretenders", "Talking Heads"],
        a:2
    },
    {
        q:"See the sun see the sun it shines. Don't get too close or it'll burn your eyes",
        o:["The Pretenders", "The Damned", "X-Ray Spex"],
        a:1
    },
    {
        q:"I'm special, so special, I gotta have some of your attention, give it to me!",
        o:["Stiff Little Fingers", "X-Ray Spex", "The Pretenders"],
        a:2
    },
    {
        q:"Oh bondage! Up yours!",
        o:["X-Ray Spex", "Stiff Little Fingers", "Sex Pistols"],
        a:0
    },
    {
        q:"They say they've got control of you but that's a lie, you know",
        o:["The Pogues", "Patti Smith", "Stiff Little Fingers"],
        a:2
    }
];

var quoteText = document.getElementById("quote-area");
var answerText = document.getElementById("answer");
var randomQuote;

function clearOptions() {
    var options = document.getElementsByName("options");
    for(var i=0; i<options.length; i++) {
        options[i].checked = false;
    }
}

function quotePick() {
    clearOptions();
    document.getElementById("answer").innerHTML = "";
    randomQuote = quotes[Math.floor(Math.random() * (quotes.length))];
    quoteText.innerHTML = randomQuote.q;
    document.getElementById("option-label0").innerHTML = randomQuote.o[0];
    document.getElementById("option-label1").innerHTML = randomQuote.o[1];
    document.getElementById("option-label2").innerHTML = randomQuote.o[2];
}

function handleRadioClick(optionRadio) {
    if (randomQuote.a == optionRadio.value) {
        answerText.innerHTML = "Correct!";
    } else {
        answerText.innerHTML = "Nope! Try again!";
    }
}

window.onload = function() {
    quotePick();
};