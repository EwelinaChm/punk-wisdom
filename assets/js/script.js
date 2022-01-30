var quotes = [
    "I've got a feeling, this year's for me and you",
    "There's unlimited supply and there is no reason why",
    "There's no stopping the cretins from hopping",
    "It's alright to say things can only get better, you haven't lost your brand new sweater",
    "Dreaming is free",
    "The words are just rules and regulations to me",
    "Look here, junior, don't you be so happy and for heaven's sake, don't you be so sad",
    "I'm worth a million in prizes",
    "Ever fallen in love with someone you shouldn't've fallen in love with?",
    "Personality crisis, you got it while it was hot but now frustration and heartache is what you got",
    "Kick out the jams!",
    "What's so funny 'bout peace love and understanding?",
    "If I go there will be trouble, if I stay it will be double",
    "We're on the road to nowhere",
    "See the sun see the sun it shines. Don't get too close or it'll burn your eyes",
    "I'm special, so special, I gotta have some of your attention, give it to me!",
    "Oh bondage! Up yours!",
    "They say they've got control of you but that's a lie, you know"
]

function quotePick() {
    var randomQuote = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quote-area").innerHTML = quotes[randomQuote];
}