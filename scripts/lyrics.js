// Selecting necessary html elements
var divLyrics = document.querySelector('.lyrics');
var audio = document.querySelector('audio');
var audioSrc = document.querySelector('#audio');
var musicTitle = document.querySelector('.music-title');
var musicText = document.querySelector('.music-text');

//adding click listener for every song item
document.querySelector('#venom').addEventListener("click", displayVenom);
document.querySelector('#killshot').addEventListener("click", displayKillshot);
document.querySelector('#kamikaze').addEventListener("click", displayKamikaze);
document.querySelector('#revival').addEventListener("click", displayRevival);
document.querySelector('#recovery').addEventListener("click", displayRecovery);
document.querySelector('#when').addEventListener("click", displayWhen);
document.querySelector('#encore').addEventListener("click", displayEncore);
document.querySelector('#rapgod').addEventListener("click", displayRapGod);
document.querySelector('#lose-yourself').addEventListener("click", displayLoseYourself);

function displayVenom(){
    // Loading appropriate audio file for the song
    audioSrc.src = "media/venom.mp3"
    divLyrics.style.display = "block";
    audio.load();

    // Displaying Name of the song
    musicTitle.innerHTML = "VENOM";
    musicText.innerHTML = `
    <div>
I got a song filled with shit for the strong-willed<br>
When the world gives you a raw deal<br>
Sets you off 'til you scream, "Piss off! Screw you!"<br>
When it talks to you like you don't belong<br>
Or tells you you're in the wrong field<br>
When something's in your mitochondrial<br>
'Cause it latched on to you, like—<br>
<br>
Knock knock, let the devil in<br>
Malevolent as I've ever been, head is spinnin'<br>
This medicine's screamin', "L-L-L-Let us in!"<br>
L-L-L-Like a salad bowl, Edgar Allan Poe<br>
Bedridden, shoulda been dead a long time ago<br>
Liquid Tylenol, gelatins, think my skeleton's meltin'<br>
Wicked, I get all high when I think I've smelled the scent<br>
Of elephant manure—hell, I meant Kahlúa<br>
Screw it, to hell with it, I went through hell with accelerants<br>
And blew up my-my-myself again<br>
Volkswagen, tailspin, bucket matches my pale skin<br>
Mayo and went from Hellmann's and being rail thin<br>
Filet-o-Fish, Scribble Jam, Rap Olympics '97 Freaknik<br>
How can I be down? Me and Bizarre in Florida<br>
Proof's room slept on the floor of the motel then<br>
Dr. Dre said "hell yeah!"<br>
And I got his stamp like a postcard, word to Mel-Man<br>
And I know they're gonna hate<br>
But I don't care, I barely can wait<br>
To hit them with the snare and the bass<br>
Square in the face, this fuckin' world better prepare to get laced<br>
Because they're gonna taste my—<br>
<br>
Venom, (I got that) adrenaline momentum<br>
And I'm not knowin' when I'm<br>
Ever gonna slow up and I'm<br>
Ready to snap any moment I'm<br>
Thinkin' it's time to go get 'em<br>
They ain't gonna know what hit 'em<br>
(W-W-When they get bit with the—)<br>
Venom, (I got that) adrenaline momentum<br>
And I'm not knowin' when I'm<br>
Ever gonna slow up and I'm<br>
Ready to snap any moment I'm<br>
Thinkin' it's time to go get 'em<br>
They ain't gonna know what hit 'em<br>
(W-W-When they get bit with the—)<br>
<br>
I said knock knock, let the devil in<br>
Shotgun p-p-pellets in the felt pen<br>
Cocked, fuck around and catch a hot one<br>
It-it's evident I'm not done<br>
V-Venomous, the thoughts spun<br>
Like a web and you just caught in 'em<br>
Held against your will like a hubcap or mud flap<br>
Beat strangler attack<br>
So this ain't gonna feel like a love tap<br>
Eat painkiller pills, fuck up the track<br>
Like, what's her name's at the wheel? Danica Patrick<br>
Threw the car into reverse at the Indy, a nut crashin'<br>
Into ya, the back of it just mangled steel<br>
My Mustang and the Jeep Wrangler grill<br>
With the front smashed, much as my rear fender, assassin<br>
Slim be a combination of an actual kamikaze and Gandhi (Gandhi)<br>
Translation, I will probably kill us both<br>
When I end up backin' into ya<br>
You ain't gonna be able to tell what the fuck's happenin' to you<br>
When you're bit with the—<br>
<br>
Venom, adrenaline momentum<br>
And I'm not knowin' when I'm<br>
Ever gonna slow up and I'm<br>
Ready to snap any moment I'm<br>
Thinkin' it's time to go get 'em<br>
They ain't gonna know what hit 'em<br>
(W-W-When they get bit with the—)<br>
Venom, (I got that) adrenaline momentum<br>
And I'm not knowin' when I'm<br>
Ever gonna slow up and I'm<br>
Ready to snap any moment I'm<br>
Thinkin' it's time to go get 'em<br>
They ain't gonna know what hit 'em<br>
(W-W-When they get bit with the—)<br>
<br>
I said knock knock, let the devil in<br>
Alien, E-E-Elliott phone home<br>
Ain't no telling when this chokehold<br>
On this game will end, I'm loco<br>
Became a Symbiote, so<br>
My fangs are in your throat, ho<br>
You're snake-bitten with my—venom<br>
With the ballpoint pen I'm<br>
Gun cocked, bump stock, double-aught, buckshot<br>
Tire thumper, a garrote, tie a couple knots<br>
Fired up and caught fire, juggernaut<br>
Punk rock, bitch, it's goin' down like Yung Joc<br>
'Cause the Doc put me on like sunblock<br>
Why the fuck not, you only get one shot<br>
Ate shit 'til I can't taste it<br>
Chased it with straight liquor<br>
Then paint thinner, then drank 'til I faint<br>
And awake with a headache<br>
And I take anything in rectangular shape<br>
Then I wait to face the demons I'm bonded to<br>
'Cause they're chasin' me but I'm part of you<br>
So escapin' me is impossible<br>
I latch onto you like a—parasite<br>
And I probably ruined your parents' life<br>
And your childhood too<br>
'Cause if I'm the music that y'all grew up on<br>
I'm responsible for you retarded fools<br>
I'm the super villain Dad and Mom was losin' their marbles to<br>
You marvel that? Eddie Brock is you<br>
And I'm the suit, so call me—<br>
<br>
Venom, (I got that) adrenaline momentum<br>
And I'm not knowin' when I'm<br>
Ever gonna slow up and I'm<br>
Ready to snap any moment I'm<br>
Thinkin' it's time to go get 'em<br>
They ain't gonna know what hit 'em<br>
(W-W-When they get bit with the—)<br>
Venom, (I got that) adrenaline momentum<br>
And I'm not knowin' when I'm<br>
Ever gonna slow up and I'm<br>
Ready to snap any moment I'm<br>
Thinkin' it's time to go get 'em<br>
They ain't gonna know what hit 'em<br>
(W-W-When they get bit with the—)
</div>
    `
}

function displayKillshot(){
    // Loading appropriate audio file for the song
    audioSrc.src = "media/killshot.mp3"
    divLyrics.style.display = "block";
    audio.load();

    // Displaying Name of the song
    musicTitle.innerHTML = "KILLSHOT";
    musicText.innerHTML = `
    <div>
You sound like a bitch, bitch<br>
Shut the fuck up<br>
When your fans become your haters<br>
You done?<br>
Fuckin' beard's weird<br>
Alright<br>
You yellin' at the mic, fuckin' weird beard (You want smoke)<br>
We doin' this once<br>
You yellin' at the mic, your beard's weird<br>
Why you yell at the mic? (Illa)<br>
<br>
Rihanna just hit me on a text<br>
Last night I left hickeys on her neck<br>
Wait, you just dissed me? I'm perplexed<br>
Insult me in a line, compliment me on the next<br>
Damn, I'm really sorry you want me to have a heart attack<br>
Was watchin' 8 Mile on my NordicTrack<br>
Realized I forgot to call you back<br>
Here's that autograph for your daughter, I wrote it on a Starter cap<br>
Stan, Stan, son<br>
Listen, man, Dad isn't mad<br>
But how you gonna name yourself after a damn gun<br>
And have a man-bun?<br>
The giant's woke, eyes open, undeniable<br>
Supplyin' smoke, got the fire stoked<br>
Say you got me in a scope, but you grazed me<br>
I say one call to Interscope and you're Swayze<br>
Your reply got the crowd yelling, "Woo!"<br>
So before you die let's see who can out-petty who<br>
With your corny lines ("Slim, you're old") -ow, Kelly, ooh<br>
But I'm 45 and I'm still outselling you<br>
By 29, I had three albums that had blew<br>
Now let's talk about somethin' I don't really do<br>
Go in someone's daughter's mouth stealin' food<br>
But you're a fuckin' mole hill<br>
Now I'ma make a mountain out of you, woo!<br>
Ho, chill, actin' like you put the chrome barrel to my bone marrow<br>
Gunner? Bitch, you ain't a bow and arrow<br>
Say you'll run up on me like a phone bill, sprayin' lead (Brrt)<br>
Playin' dead, that's the only time you hold still (Hold up)<br>
Are you eating cereal or oatmeal?<br>
What the fuck's in the bowl, milk? Wheaties or Cheerios?<br>
'Cause I'm takin' a shit in 'em, Kelly, I need reading material<br>
…Dictionary…<br>
"Yo, Slim, your last four albums sucked<br>
Go back to Recovery," oh shoot, that was three albums ago<br>
What do you know? Oops<br>
Know your facts before you come at me, lil' goof<br>
Luxury, oh, you broke, bitch? Yeah, I had enough money in '02<br>
To burn it in front of you, ho<br>
Younger me? No, you the wack me, it's funny but so true<br>
I'd rather be 80-year-old me than 20-year-old you<br>
'Til I'm hitting old age<br>
Still can fill a whole page with a ten-year-old's rage<br>
Got more fans than you in your own city, lil' kiddy, go play<br>
Feel like I'm babysitting Lil Tay<br>
Got the Diddy okay so you spent your whole day<br>
Shootin' a video just to fuckin' dig your own grave<br>
Got you at your own wake, I'm the billy goat<br>
You ain't never made a list next to no Biggie, no Jay<br>
Next to Taylor Swift and that Iggy ho, you about to really blow<br>
Kelly, they'll be putting your name<br>
Next to Ja, next to Benzino-die, motherfucker!<br>
Like the last motherfucker sayin' Hailie in vain<br>
Alien brain, you Satanist (Yeah)<br>
My biggest flops are your greatest hits<br>
The game's mine again and ain't nothin' changed but the locks<br>
So before I slay this bitch I, mwah, give Jade a kiss<br>
Gotta wake up Labor Day to this (The fuck?)<br>
Bein' rich-shamed by some prick usin' my name for clickbait<br>
In a state of bliss 'cause I said his goddamn name<br>
Now I gotta cock back, aim<br>
Yeah, bitch, pop Champagne to this! (Pop)<br>
It's your moment<br>
This is it, as big as you're gonna get, so enjoy it<br>
Had to give you a career to destroy it<br>
Lethal injection<br>
Go to sleep six feet deep, I'll give you a B for the effort<br>
But if I was three-foot-eleven<br>
You'd look up to me, and for the record<br>
You would suck a dick to fuckin' be me for a second<br>
Lick a ballsack to get on my channel<br>
Give your life to be as solidified<br>
This mothafuckin' shit is like Rambo when he's out of bullets<br>
So what good is a fuckin' machine gun when it's out of ammo?<br>
Had enough of this tatted-up mumble rapper<br>
How the fuck can him and I battle?<br>
He'll have to fuck Kim in my flannel<br>
I'll give him my sandals<br>
'Cause he knows, long as I'm Shady he's gon' have to live in my shadow<br>
Exhausting, letting off on my offspring<br>
Lick a gun barrel, bitch, get off me!<br>
You dance around it like a sombrero, we can all see<br>
You're fuckin' salty<br>
'Cause Young Gerald's balls-deep inside of Halsey<br>
Your red sweater, your black leather<br>
You dress better, I rap better<br>
That a death threat or a love letter?<br>
Little white toothpick<br>
Thinks it's over a pic, I just don't like you, prick<br>
Thanks for dissing me<br>
Now I had an excuse on the mic to write "Not Alike"<br>
But really I don't care who's in the right<br>
But you're losin' the fight you picked<br>
Who else want it? Kells?<br>
Attempt fails! Budden, L's!<br>
Fuckin' nails in these coffins as soft as Cottonelle<br>
Killshot, I will not fail, I'm with the Doc still<br>
But this idiot's boss pops pills and tells him he's got skills<br>
But, Kells, the day you put out a hit's the day Diddy admits<br>
That he put the hit out that got Pac killed, ah!<br>
I'm sick of you bein' wack<br>
And still usin' that mothafuckin' Auto-Tune<br>
So let's talk about it (Let's talk about it)<br>
I'm sick of your mumble rap mouth<br>
Need to get the cock up out it<br>
Before we can even talk about it (Talk about it)<br>
I'm sick of your blonde hair and earrings<br>
Just 'cause you look in the mirror and think<br>
That you're Marshall Mathers (Marshall Mathers)<br>
Don't mean you are, and you're not about it<br>
So just leave my dick in your mouth and keep my daughter out it<br>
<br>
You fuckin'... oh<br>
And I'm just playin', Diddy<br>
You know I love you
</div>
    `
}

function displayKamikaze(){
    // Loading appropriate audio file for the song
    audioSrc.src = "media/kamikaze.mp3"
    divLyrics.style.display = "block";
    audio.load();

    // Displaying Name of the song
    musicTitle.innerHTML = "KAMIKAZE";
    musicText.innerHTML = `
    <div>
Okay, how do I say this? (fack, fack, fack)<br>
Last year didn't work out so well for me<br>
(fack, fack, fack) (fack last year)<br>
2018, welp (fack, fack)<br>
<br>
Yeah, I'm a fuckin' kamikaze crashin' into everything<br>
You beat me, Islamic Nazi, that means there is no such thing<br>
I've been goin' for your jugular since Craig G "Duck Alert"<br>
Wedgie in my underwear, the whole bedsheet and the comforter<br>
Stuck up in my rectal crack, kiss my disrespectful ass<br>
I'll ride through your cul-de-sac<br>
Window cracked, bumpin' your reference tracks<br>
You collab on a referent rap, I have never said his raps<br>
Overstayed my welcome, stepped in crap<br>
And ruined your welcome mat<br>
So spit that shit from the heart, you didn't write like you wrote it<br>
While I teabag the microphone 'cause I go nuts on it<br>
Like a fighter jet lined with explosives that'll strike any moment<br>
Headed right at opponents and I'm the fuckin' pilot that flown it<br>
I'm 'bout to—<br>
<br>
Smash into everyone, crash into everything<br>
Back and I've just begun, "FACK" 2017<br>
Fack, fack on everyone<br>
Fack, fack on everyone<br>
Fack, fack on everyone<br>
I'm a Kamikaze, gonna<br>
Smash into everyone, crash like an F-15<br>
Damage already done, y'all shoulda let me be<br>
Fack, fack on everyone<br>
Fack, fack on everyone<br>
Fack, fack on everyone<br>
I'm a Kamikaze, gonna<br>
<br>
I turned to rap 'cause it made me feel tough when I wasn't (wasn't)<br>
From the moment I heard rap was cussin', I was in (was in)<br>
Which is why I identify with the guy<br>
Who I was invented by, Dre's Frankenstein<br>
Energized like a nine volt, ice cold<br>
Like Snake Eyes, twice in a row on a dice roll<br>
But if the only reason I blowed is 'cause I'm white though<br>
Why don't every other white rapper sell what I sold? (ooh)<br>
Kamikaze pilot, I wrote my suicide note<br>
Here come the guys in white coats tryin' to stop me<br>
'Fore I jump behind the controls and try to fly into foes<br>
'Cause I'm takin' y'all with me when I go cyclone<br>
I don't think this typhoon's lettin' up any time soon, here I go<br>
Eyes closed, blindfolded, I'm 'bout to—<br>
<br>
Smash into everyone, crash into everything<br>
Back and I've just begun, "FACK" 2017<br>
Fack, fack on everyone<br>
Fack, fack on everyone<br>
Fack, fack on everyone<br>
I'm a Kamikaze, gonna<br>
Smash into everyone, crash like an F-15<br>
Damage already done, y'all should've let me be<br>
Fack, fack on everyone<br>
Fack, fack on everyone<br>
Fack, fack on everyone<br>
I'm a Kamikaze, gonna<br>
<br>
Smash<br>
Kamikaze, kamikaze<br>
Kamikaze, kamikaze, kami-kamikaze<br>
Look at what I've done<br>
<br>
I heard your freestyle on Shade 45, that shit was embarrassing<br>
There is no way we ever hear that shit again, I guarantee<br>
That way that shit was so ass it's somethin' we wouldn't dare re-air it<br>
The shit's embarrassing, as me rear-ending Tara Reid bare<br>
In my therapy chair, my dick is the hair length of Cher<br>
Each nut is the chair width of an acorn, stairlift beware of me<br>
Lyrically I'm terrible, better get your lyrics prepared<br>
Richard Ramirez is here, serial killin' every beat there is<br>
<br>
Wait, wait, got the eeriest feelin'<br>
Somethin' evil is lurkin', I'm no conspiracy theorist<br>
But somethin' here is afoot—oh yeah, it's my dick<br>
Get the measurement stick (what?), twelve inches of wood<br>
Wait, but I've been goin' for your jugular since Craig G Duck Alert<br>
And I've come to pay respects<br>
'Cause if you sleep you're fucked—other words, you get laid to rest<br>
And I hope your butt is hurt<br>
Put me on a track, I go cray on it like a color book<br>
You got some views, but you're still below me<br>
Mine are higher, so when you compare our views, you get overlooked<br>
And I don't say the hook unless I wrote the hook<br>
And now I'm just freestylin' in the vocal booth<br>
And you know I've always spoke the truth<br>
You lyin' through your teeth so much you broke a tooth<br>
And it ain't somethin' I need a phone to do<br>
When I say I can't wait till I get ahold of you<br>
And I don't know what I'm s'posed to do<br>
Line up the rappers, take my pic like a photo shoot
</div>
    `
}

function displayRevival(){
    // Loading appropriate audio file for the song
    audioSrc.src = "media/river.mp3"
    divLyrics.style.display = "block";
    audio.load();

    // Displaying Name of the song
    musicTitle.innerHTML = "RIVER";
    musicText.innerHTML = `
    <div>
<i>[Ed Sheeran:]</i><br>
I've been a liar, been a thief<br>
Been a lover, been a cheat<br>
All my sins need holy water, feel it washing over me<br>
Well, little one, I don't want to admit to something<br>
If all it's gonna cause is pain<br>
Truth and my lies right now are falling like the rain<br>
So let the river run<br>
<br>
<i>[Eminem:]</i><br>
He's comin' home with his neck scratched, to catch flack<br>
Sweat jackets and dress slacks, mismatched<br>
On his breath's Jack, he's a sex addict<br>
And she just wants to exact revenge and get back<br>
It's a chess match, she's on his back like a jet-pack<br>
She's kept track of all his Internet chats<br>
And guess who just happens to be movin' on to the next<br>
Actually, just shit on my last chick and she has what my ex lacks<br>
'Cause she loves danger, psychopath<br>
And you don't fuck with no man's girl, even I know that<br>
But she's devised some plan to stab him in the back<br>
Knife in hand, says their relationship's hangin' by a strand<br>
So she's been on the web lately<br>
Says maybe she'll be my Gwen Stacy, to spite her man<br>
And I know she's using me to try to play him, I don't care<br>
Hi Suzanne, but I shoulda said "Bye Suzanne"<br>
After the first night, but tonight I am<br>
<br>
<i>[Ed Sheeran:]</i><br>
I've been a liar, been a thief<br>
Been a lover, been a cheat<br>
All my sins need holy water, feel it washing over me<br>
Well, little one, I don't want to admit to something<br>
If all it's gonna cause is pain<br>
The truth and my lies now are falling like the rain<br>
So let the river run<br>
<br>
<i>[Eminem:]</i><br>
One-night stand, turned to a two-night stand<br>
It was "come sunlight, scram," now we hug tight, and...<br>
<br>
He found out, now she feels deserted and used<br>
'Cause he left, so what? He did it first to her too<br>
Now how am I supposed to tell this girl that we're through?<br>
It's hard to find the words, I'm aloof, nervous, and Sue<br>
Don't want this to hurt, but what you deserve is the truth<br>
Don't take it personal, I just can't say this in person to you<br>
So I revert to the studio, like hole-in-the-wall diners<br>
Don't have to be reserved in a booth<br>
I just feel like the person who I'm turning into's<br>
Irreversible, I preyed on you like it's church at the pew<br>
And now that I got you I don't want you<br>
Took advantage in my thirst to pursue<br>
Why do I do this dirt that I do?<br>
Get on my soapbox and preach, my sermon and speech<br>
Detergent and bleach is burnin' the wound<br>
'Cause now with her in the womb<br>
We can't bring her in this world, shoulda knew<br>
To use protection 'fore I bit into your forbidden fruit<br>
Fuck!<br>
<br>
<i>[Ed Sheeran:]</i><br>
I've been a liar, been a thief<br>
Been a lover, been a cheat<br>
All my sins need holy water, feel it washing over me<br>
Well, little one, I don't want to admit to something<br>
If all it's gonna cause is pain<br>
The truth and my lies now are falling like the rain<br>
So let the river run<br>
<br>
<i>[Eminem (Ed Sheeran):]</i><br>
My name's (ooh), my name's (ooh)<br>
River (ooh), river run<br>
Call me (ooh), call me (ooh)<br>
River (ooh), we'll let the river run<br>
<br>
<i>[Eminem:]</i><br>
Always the bridesmaid, never “The bride, hey!”<br>
Fuck can I say? If life was a highway<br>
And deceit was an enclave, I'd be swerving in five lanes<br>
Speeds at a high rate, like I'm slidin' on ice, maybe<br>
That's why I may have came at you sideways<br>
I can't keep my lies straight<br>
But I made you terminate my baby<br>
This love triangle left us in a wreck, tangled<br>
What else can I say? It was fun for a while<br>
Bet I really woulda loved your smile<br>
Didn't really wanna abort, but fuck it<br>
What's one more lie, to tell our unborn child?<br>
<br>
<i>[Ed Sheeran (Eminem):]</i><br>
I've been a liar, been a thief<br>
Been a lover, been a cheat<br>
All my sins need holy water, feel it washing over me<br>
Well, little one (I'm sorry)<br>
I don't want to admit to something (I fucked up)<br>
If all it's gonna cause is pain<br>
The truth and my lies now are falling like the rain<br>
So let the river run
</div>
    `
}

function displayRecovery(){
    // Loading appropriate audio file for the song
    audioSrc.src = "media/notafraid.mp3"
    divLyrics.style.display = "block";
    audio.load();

    // Displaying Name of the song
    musicTitle.innerHTML = "NOT AFRAID";
    musicText.innerHTML = `
    <div>
I'm not afraid (I'm not afraid)<br>
To take a stand (to take a stand)<br>
Everybody (everybody)<br>
Come take my hand (come take my hand)<br>
We'll walk this road together, through the storm<br>
Whatever weather, cold or warm<br>
Just letting you know that you're not alone<br>
Holler if you feel like you've been down the same road (same road)<br>
<br>
Yeah, it's been a ride<br>
I guess I had to, go to that place, to get to this one<br>
Now some of you, might still be in that place<br>
If you're trying to get out, just follow me<br>
I'll get you there<br>
<br>
You can try and read my lyrics off of this paper before I lay 'em<br>
But you won't take the sting out these words before I say 'em<br>
'Cause ain't no way I'mma let you stop me from causing mayhem<br>
When I say I'mma do something I do it<br>
I don't give a damn what you think<br>
I'm doing this for me, so fuck the world<br>
Feed it beans, it's gassed up, if it thinks it's stopping me<br>
I'mma be what I set out to be, without a doubt undoubtedly<br>
And all those who look down on me I'm tearing down your balcony<br>
No ifs, ands or buts, don't try to ask him why or how can he<br>
From "Infinite" down to the last "Relapse" album<br>
He's still shitting, whether he's on salary paid hourly<br>
Until he bows out or he shits his bowels out of him<br>
Whichever comes first, for better or worse<br>
He's married to the game, like a "fuck you" for Christmas<br>
His gift is a curse, forget the Earth, he's got the urge<br>
To pull his dick from the dirt, and fuck the whole universe<br>
<br>
I'm not afraid (I'm not afraid)<br>
To take a stand (to take a stand)<br>
Everybody (everybody)<br>
Come take my hand (come take my hand)<br>
We'll walk this road together, through the storm<br>
Whatever weather, cold or warm<br>
Just letting you know that you're not alone<br>
Holler if you feel like you've been down the same road (same road)<br>
<br>
Okay quit playing with the scissors and shit, and cut the crap<br>
I shouldn't have to rhyme these words in a rhythm for you to know it's a rap<br>
You said you was king, you lied through your teeth<br>
For that fuck your feelings<br>
Instead of getting crowned you're getting capped<br>
And to the fans, I'll never let you down again, I'm back<br>
I promise to never go back on that promise<br>
In fact let's be honest<br>
That last "Relapse" CD was "ehh"<br>
Perhaps I ran them accents into the ground<br>
Relax, I ain't going back to that now<br>
All I'm trying to say is get back, click-clack, blow<br>
'Cause I ain't playing around<br>
There's a game called circle and I don't know how, I'm way too up to back down<br>
But I think I'm still trying to figure this crap out<br>
Thought I had it mapped out but I guess I didn't, this fucking black cloud<br>
Still follows me around but it's time to exorcise these demons<br>
These motherfuckers are doing jumping jacks now!<br>
<br>
I'm not afraid (I'm not afraid)<br>
To take a stand (to take a stand)<br>
Everybody (everybody)<br>
Come take my hand (come take my hand)<br>
We'll walk this road together, through the storm<br>
Whatever weather, cold or warm<br>
Just letting you know that you're not alone<br>
Holler if you feel like you've been down the same road (same road)<br>
<br>
And I just can't keep living this way<br>
So starting today, I'm breaking out of this cage<br>
I'm standing up, I'mma face my demons<br>
I'm manning up, I'mma hold my ground<br>
I've had enough, now I'm so fed up<br>
Time to put my life back together right now! (now)<br>
<br>
It was my decision to get clean, I did it for me<br>
Admittedly, I probably did it subliminally<br>
For you, so I could come back a brand-new me you helped see me through<br>
And don't even realize what you did, 'cause believe me you<br>
I've been through the wringer, but they could do little to the middle finger<br>
I think I got a tear in my eye, I feel like the king of<br>
My world, haters can make like bees with no stingers<br>
And drop dead, no more beef lingers<br>
No more drama from now on, I wanna promise<br>
To focus solely on handling my responsibilities as a father<br>
So I solemnly swear to always treat this roof, like my daughters<br>
And raise it, you couldn't lift a single shingle on it!<br>
'Cause the way I feel, I'm strong enough to go to the club<br>
Or the corner pub, and lift the whole liquor counter up<br>
'Cause I'm raising the bar<br>
I'd shoot for the moon but I'm too busy gazing at stars<br>
I feel amazing and I'm...<br>
<br>
I'm not afraid (I'm not afraid)<br>
To take a stand (to take a stand)<br>
Everybody (everybody)<br>
Come take my hand (come take my hand)<br>
We'll walk this road together, through the storm<br>
Whatever weather, cold or warm<br>
Just letting you know that you're not alone<br>
Holler if you feel like you've been down the same road (same road)
</div>
    `
}

function displayWhen(){
    // Loading appropriate audio file for the song
    audioSrc.src = "media/whenimgone.mp3"
    divLyrics.style.display = "block";
    audio.load();

    // Displaying Name of the song
    musicTitle.innerHTML = "WHEN I'M GONE";
    musicText.innerHTML = `
    <div>
Yeah...<br>
It's my life...<br>
In my own words I guess...<br>
<br>
Have you ever loved someone so much, you'd give an arm for?<br>
Not the expression, no, literally give an arm for?<br>
When they know they're your heart<br>
And you know you were their armour<br>
And you will destroy anyone who would try to harm her<br>
But what happens when karma turns right around and bites you?<br>
And everything you stand for turns on you to spite you?<br>
What happens when you become the main source of her pain?<br>
"Daddy, look what I made", Dad's gotta go catch a plane<br>
"Daddy, where's Mommy? I can't find Mommy where is she?"<br>
I don't know go play, Hailie, baby, your Daddy's busy<br>
Daddy's writing a song, this song ain't gon' write itself<br>
I'll give you one underdog and you gotta swing by yourself<br>
Then turn right around on that song and tell her you love her<br>
And put hands on her mother, who's a spitting image of her<br>
That's Slim Shady, yeah, baby, Slim Shady's crazy<br>
Shady made me, but tonight Shady's rock-a-by baby...<br>
<br>
And when I'm gone, just carry on, don't mourn<br>
Rejoice every time you hear the sound of my voice<br>
Just know that I'm looking down on you smiling<br>
And I didn't feel a thing,<br>
So, baby, don't feel no pain<br>
Just smile back<br>
And when I'm gone, just carry on, don't mourn<br>
Rejoice every time you hear the sound of my voice<br>
Just know that I'm looking down on you smiling<br>
And I didn't feel a thing,<br>
So, baby, don't feel no pain<br>
Just smile back...<br>
<br>
I keep having this dream, I'm pushin' Hailie on the swing<br>
She keeps screaming, she don't want me to sing<br>
"You're making Mommy cry, why? Why is Mommy crying?"<br>
Baby, Daddy ain't leaving no more. "Daddy, you're lying.<br>
You always say that, you always say this is the last time<br>
But you ain't leaving no more, Daddy, you're mine."<br>
She's piling boxes in front of the door tryna block it<br>
"Daddy, please, Daddy, don't leave, Daddy, no, stop it!"<br>
Goes in her pocket, pulls out a tiny necklace locket<br>
It's got a picture, "This'll keep you safe, Daddy, take it with you."<br>
I look up, it's just me standing in the mirror<br>
These fucking walls must be talking, 'cause man I can hear 'em<br>
They're saying, "You've got one more chance to do right, and it's tonight.<br>
Now go out there and show 'em that you love 'em 'fore it's too late."<br>
And just as I go to walk out of my bedroom door<br>
It turns to a stage, they're gone, and this spotlight is on<br>
And I'm singing...<br>
<br>
And when I'm gone, just carry on, don't mourn<br>
Rejoice every time you hear the sound of my voice<br>
Just know that I'm looking down on you smiling<br>
And I didn't feel a thing,<br>
So, baby, don't feel no pain<br>
Just smile back<br>
And when I'm gone, just carry on, don't mourn<br>
Rejoice every time you hear the sound of my voice<br>
Just know that I'm looking down on you smiling<br>
And I didn't feel a thing,<br>
So, baby, don't feel no pain<br>
Just smile back...<br>
<br>
Sixty thousand people, all jumping out their seat<br>
The curtain closes, they're throwing roses at my feet<br>
I take a bow and thank you all for coming out<br>
They're screaming so loud, I take one last look at the crowd<br>
I glance down, I don't believe what I'm seeing<br>
"Daddy, it's me, help Mommy, her wrists are bleeding."<br>
But, baby, we're in Sweden, how did you get to Sweden?<br>
"I followed you, Daddy, you told me that you weren't leavin'.<br>
"You lied to me, Dad, and now you made Mommy sad.<br>
And I bought you this coin, it says 'Number One Dad'.<br>
That's all I wanted, I just wanna give you this coin.<br>
I get the point. Fine. Me and Mommy are going."<br>
But, baby, wait.<br>
"It's too late, Dad, you made your choice.<br>
Now go up there and show 'em that you love 'em more than us."<br>
That's what they want, they want you Marshall<br>
They keep screamin' your name<br>
It's no wonder you can't go to sleep, just take another pill<br>
Yeah, I bet you you will. You rap about it, yeah, word, k-keep it real<br>
I hear applause, all this time I couldn't see<br>
How could it be, that the curtain is closing on me?<br>
I turn around, find a gun on the ground, cock it<br>
Put it to my brain, scream, "Die Shady!" and pop it<br>
The sky darkens, my life flashes,<br>
The plane that I was supposed to be on crashes<br>
And burns to ashes<br>
That's when I wake up, alarm clock's ringin', there's birds singin'<br>
It's spring and Hailie's outside swinging,<br>
I walk right up to Kim and kiss her<br>
Tell her I miss her,<br>
Hailie just smiles and winks at her little sister<br>
Almost as if to say<br>
<br>
And when I'm gone, just carry on, don't mourn<br>
Rejoice every time you hear the sound of my voice<br>
Just know that I'm looking down on you smiling<br>
And I didn't feel a thing,<br>
So, baby, don't feel no pain<br>
Just smile back<br>
And when I'm gone, just carry on, don't mourn<br>
Rejoice every time you hear the sound of my voice<br>
Just know that I'm looking down on you smiling<br>
And I didn't feel a thing,<br>
So, baby, don't feel no pain<br>
Just smile back...<br>
<br>
<i>[*curtains closing and sounds of clapping*]</i>
</div>
    `
}

function displayEncore(){
    // Loading appropriate audio file for the song
    audioSrc.src = "media/mokingbird.mp3"
    divLyrics.style.display = "block";
    audio.load();

    // Displaying Name of the song
    musicTitle.innerHTML = "MOCKINGBIRD";
    musicText.innerHTML = `
    <div>

Yeah<br>
I know sometimes things may not always make sense to you right now<br>
But hey, what daddy always tell you?<br>
Straighten up little soldier<br>
Stiffen up that upper lip<br>
What you crying about?<br>
You got me.<br>
<br>
Hailie, I know you miss your mom, and I know you miss your dad<br>
When I'm gone but I'm trying to give you the life that I never had<br>
I can see you're sad, even when you smile, even when you laugh<br>
I can see it in your eyes, deep inside you want to cry<br>
'Cause you're scared, I ain't there?<br>
Daddy's with you in your prayers<br>
No more crying, wipe them tears<br>
Daddy's here, no more nightmares<br>
We gon' pull together through it, we gon' do it<br>
Lainie Uncle's crazy, ain't he?<br>
Yeah, but he loves you girl and you better know it<br>
We're all we got in this world<br>
When it spins, when it swirls<br>
When it whirls, when it twirls<br>
Two little beautiful girls<br>
Lookin' puzzled, in a daze<br>
I know it's confusing you<br>
Daddy's always on the move, mamma's always on the news<br>
I try to keep you sheltered from it but somehow it seems<br>
The harder that I try to do that, the more it backfires on me<br>
All the things growing up as daddy, that he had to see<br>
Daddy don't want you to see but you see just as much as he did<br>
We did not plan it to be this way, your mother and me<br>
But things have got so bad between us<br>
I don't see us ever being together ever again<br>
Like we used to be when we was teenagers<br>
But then of course everything always happens for a reason<br>
I guess it was never meant to be<br>
But it's just something we have no control over and that's what destiny is<br>
But no more worries, rest your head and go to sleep<br>
Maybe one day we'll wake up and this will all just be a dream<br>
<br>
Now hush little baby, don't you cry<br>
Everything's gonna be alright<br>
Stiffen that upper lip up, little lady, I told ya<br>
Daddy's here to hold ya through the night<br>
I know mommy's not here right now and we don't know why<br>
We fear how we feel inside<br>
It may seem a little crazy, pretty baby<br>
But I promise mama's gon' be alright<br>
<br>
(Ha)<br>
It's funny<br>
I remember back one year when daddy had no money<br>
Mommy wrapped the Christmas presents up<br>
And stuck 'em under the tree and said some of 'em were from me<br>
'Cause daddy couldn't buy 'em<br>
I'll never forget that Christmas I sat up the whole night crying<br>
'Cause daddy felt like a bum, see daddy had a job<br>
But his job was to keep the food on the table for you and mom<br>
And at the time every house that we lived in<br>
Either kept getting broken into and robbed<br>
Or shot up on the block and your mom was saving money for you in a jar<br>
Tryna start a piggy bank for you so you could go to college<br>
Almost had a thousand dollars 'til someone broke in and stole it<br>
And I know it hurts so bad it broke your mamma's heart<br>
And it seemed like everything was just startin' to fall apart<br>
Mom and dad was arguin' a lot so momma moved back<br>
On the Chalmers in the flat one bedroom apartment<br>
And dad moved back to the other side of 8 Mile on Novara<br>
And that's when daddy went to California with his CD and met Dr. Dre<br>
And flew you and momma out to see me<br>
But daddy had to work, you and momma had to leave me<br>
Then you started seeing daddy on the T.V. and momma didn't like it<br>
And you and Lainnie were too young to understand it<br>
Papa was a rollin' stone, momma developed a habit<br>
And it all happened too fast for either one of us to grab it<br>
I'm just sorry you were there and had to witness it first hand<br>
'Cause all I ever wanted to do was just make you proud<br>
Now I'm sitting in this empty house, just reminiscing<br>
Lookin' at your baby pictures, it just trips me out<br>
To see how much you both have grown, it's almost like you're sisters now<br>
Wow, I guess you pretty much are and daddy's still here<br>
Lainnie I'm talkin' to you too, daddy's still here<br>
I like the sound of that, yeah<br>
It's got a ring to it don't it?<br>
Shh, mama's only gone for the moment<br>
<br>
Now hush little baby, don't you cry<br>
Everything's gonna be alright<br>
Stiffen that upper lip up, little lady, I told ya<br>
Daddy's here to hold ya through the night<br>
I know mommy's not here right now and we don't know why<br>
We fear how we feel inside<br>
It may seem a little crazy, pretty baby<br>
But I promise mama's gon' be alright<br>
<br>
And if you ask me to<br>
Daddy's gonna buy you a mockingbird<br>
I'mma give you the world<br>
I'mma buy a diamond ring for you<br>
I'mma sing for you<br>
I'll do anything for you to see you smile<br>
And if that mockingbird don't sing and that ring don't shine<br>
I'mma break that birdie's neck<br>
I'll go back to the jeweler who sold it to ya<br>
And make him eat every carat don't fuck with dad (ha ha)
</div>
    `
}


function displayRapGod(){
    // Loading appropriate audio file for the song
    audioSrc.src = "media/rapgod.mp3"
    divLyrics.style.display = "block";
    audio.load();

    // Displaying Name of the song
    musicTitle.innerHTML = "RAP GOD";
    musicText.innerHTML = `
    <div>
Look, I was gonna go easy on you not to hurt your feelings<br>
But I'm only going to get this one chance<br>
(Six minutes, six minutes)<br>
Something's wrong, I can feel it<br>
(Six minutes, six minutes, Slim Shady, you're on)<br>
Just a feeling I've got<br>
Like something's about to happen<br>
But I don't know what<br>
If that means, what I think it means, we're in trouble<br>
Big trouble. And if he is as bananas as you say<br>
I'm not taking any chances<br>
You are just what the doc ordered<br>
<br>
I'm beginning to feel like a Rap God, Rap God<br>
All my people from the front to the back nod, back nod<br>
Now who thinks their arms are long enough to slap box, slap box?<br>
They said I rap like a robot, so call me rap-bot<br>
<br>
But for me to rap like a computer must be in my genes<br>
I got a laptop in my back pocket<br>
My pen'll go off when I half-cock it<br>
Got a fat knot from that rap profit<br>
Made a living and a killing off it<br>
Ever since Bill Clinton was still in office<br>
With Monica Lewinsky feeling on his nutsack<br>
I'm an MC still as honest<br>
But as rude and as indecent as all hell<br>
Syllables, skill-a-holic (Kill 'em all with)<br>
This flippity, dippity-hippity hip-hop<br>
You don't really wanna get into a pissing match<br>
With this rappity brat<br>
Packing a MAC in the back of the Ac<br>
Backpack rap, crap, yap-yap, yackety-yack<br>
And at the exact same time<br>
I attempt these lyrical acrobat stunts while I'm practicing that<br>
I'll still be able to break a motherfuckin' table<br>
Over the back of a couple of faggots and crack it in half<br>
Only realized it was ironic<br>
I was signed to Aftermath after the fact<br>
How could I not blow? All I do is drop "F" bombs<br>
Feel my wrath of attack<br>
Rappers are having a rough time period<br>
Here's a maxi pad<br>
It's actually disastrously bad<br>
For the wack while I'm masterfully constructing this masterpiece yeah<br>
<br>
'Cause I'm beginning to feel like a Rap God, Rap God<br>
All my people from the front to the back nod, back nod<br>
Now who thinks their arms are long enough to slap box, slap box?<br>
Let me show you maintaining this shit ain't that hard, that hard<br>
<br>
Everybody want the key and the secret to rap<br>
Immortality like I have got<br>
Well, to be truthful the blueprint's<br>
Simply rage and youthful exuberance<br>
Everybody loves to root for a nuisance<br>
Hit the Earth like an asteroid<br>
Did nothing but shoot for the moon since (pew)<br>
MCs get taken to school with this music<br>
'Cause I use it as a vehicle to 'bust a rhyme'<br>
Now I lead a new school full of students<br>
Me? I'm a product of Rakim<br>
Lakim Shabazz, 2Pac, N.W.A., Cube, hey, Doc, Ren<br>
Yella, Eazy, thank you, they got Slim<br>
Inspired enough to one day grow up<br>
Blow up and be in a position<br>
To meet Run-D.M.C. and induct them<br>
Into the motherfuckin' Rock n'<br>
Roll Hall of Fame even though I walk in the church<br>
And burst in a ball of flames<br>
Only Hall of Fame I'll be inducted in is the alcohol of fame<br>
On the wall of shame<br>
You fags think it's all a game<br>
'Til I walk a flock of flames<br>
Off a plank and<br>
Tell me what in the fuck are you thinking?<br>
Little gay-looking boy<br>
So gay I can barely say it with a 'straight' face, looking boy<br>
You're witnessing a mass-occur like you're watching a church gathering take place, looking boy<br>
Oy vey, that boy's gay<br>
That's all they say, looking boy<br>
You get a thumbs up, pat on the back<br>
And a "way to go" from your label every day, looking boy<br>
Hey, looking boy, what d'you say, looking boy?<br>
I get a "hell yeah" from Dre, looking boy<br>
I'mma work for everything I have<br>
Never asked nobody for shit<br>
Get outta my face, looking boy<br>
Basically boy you're never gonna be capable<br>
Of keeping up with the same pace, looking boy, 'cause<br>
<br>
I'm beginning to feel like a Rap God, Rap God<br>
All my people from the front to the back nod, back nod<br>
The way I'm racing around the track, call me NASCAR, NASCAR<br>
Dale Earnhardt of the trailer park, the White Trash God<br>
Kneel before General Zod this planet's Krypton, no Asgard, Asgard<br>
<br>
So you'll be Thor and I'll be Odin<br>
You're rodent, I'm omnipotent<br>
Let off then I'm reloading<br>
Immediately with these bombs I'm totin'<br>
And I should not be woken<br>
I'm the walking dead<br>
But I'm just a talking head, a zombie floating<br>
But I got your mom deep-throating<br>
I'm out my Ramen Noodle<br>
We have nothing in common, poodle<br>
I'm a Doberman, pinch yourself<br>
In the arm and pay homage, pupil<br>
It's me<br>
My honesty's brutal<br>
But it's honestly futile if I don't utilize<br>
What I do though for good<br>
At least once in a while so I wanna make sure<br>
Somewhere in this chicken scratch I scribble and doodle<br>
Enough rhymes to<br>
Maybe try to help get some people through tough times<br>
But I gotta keep a few punchlines<br>
Just in case 'cause even you unsigned<br>
Rappers are hungry looking at me like it's lunchtime<br>
I know there was a time where once I<br>
Was king of the underground<br>
But I still rap like I'm on my Pharoahe Monch grind<br>
So I crunch rhymes<br>
But sometimes when you combine<br>
Appeal with the skin color of mine<br>
You get too big and here they come trying to<br>
Censor you like that one line I said<br>
On "I'm Back" from The Mathers LP<br>
One when I tried to say I'll take seven kids from Columbine<br>
Put 'em all in a line<br>
Add an AK-47, a revolver and a nine<br>
See if I get away with it now<br>
That I ain't as big as I was, but I'm<br>
Morphin' into an immortal coming through the portal<br>
You're stuck in a time warp from two thousand four though<br>
And I don't know what the fuck that you rhyme for<br>
You're pointless as Rapunzel<br>
With fucking cornrows<br>
You write normal? Fuck being normal<br>
And I just bought a new ray gun from the future<br>
Just to come and shoot ya<br>
Like when Fabolous made Ray J mad<br>
'Cause Fab said he looked like a fag<br>
At Mayweather's pad singin' to a man<br>
While he played piano<br>
Man, oh man, that was a 24/7 special<br>
On the cable channel<br>
So Ray J went straight to the radio station the very next day<br>
"Hey, Fab, I'mma kill you"<br>
Lyrics coming at you with supersonic speed, (JJ Fad)<br>
Uh, summa lumma dooma lumma you assuming I'm a human<br>
What I gotta do to get it through to you? I'm superhuman<br>
Innovative and I'm made of rubber, so that anything you say is<br>
Ricocheting off of me and it'll glue to you<br>
I'm devastating more than ever demonstrating<br>
How to give a motherfuckin' audience a feeling like it's levitating<br>
Never fading, and I know that haters are forever waiting<br>
For the day that they can say I fell off, they'll be celebrating<br>
'Cause I know the way to get 'em motivated<br>
I make elevating music<br>
You make elevator music<br>
"Oh, he's too mainstream."<br>
Well, that's what they do<br>
When they get jealous, they confuse it<br>
"It's not hip-hop, it's pop."<br>
'Cause I found a hella way to fuse it<br>
With rock, shock rap with Doc<br>
Throw on "Lose Yourself" and make 'em lose it<br>
"I don't know how to make songs like that<br>
I don't know what words to use."<br>
Let me know when it occurs to you<br>
While I'm ripping any one of these verses that versus you<br>
It's curtains, I'm inadvertently hurtin' you<br>
How many verses I gotta murder to<br>
Prove that if you were half as nice<br>
Your songs you could sacrifice virgins to<br>
Unghh, school flunky, pill junky<br>
But look at the accolades these skills brung me<br>
Full of myself, but still hungry<br>
I bully myself 'cause I make me do what I put my mind to<br>
When I'm a million leagues above you<br>
Ill when I speak in tongues<br>
But it's still tongue-in-cheek, fuck you<br>
I'm drunk. So, Satan, take the fucking wheel<br>
I'm asleep in the front seat<br>
Bumping Heavy D and the Boyz<br>
Still "Chunky, but Funky"<br>
But in my head there's something<br>
I can feel tugging and struggling<br>
Angels fight with devils and<br>
Here's what they want from me<br>
They're asking me to eliminate some of the women hate<br>
But if you take into consideration the bitter hatred I had<br>
Then you may be a little patient and more sympathetic to the situation<br>
And understand the discrimination<br>
But fuck it<br>
Life's handing you lemons<br>
Make lemonade then<br>
But if I can't batter the women<br>
How the fuck am I supposed to bake them a cake then?<br>
Don't mistake him for Satan<br>
It's a fatal mistake if you think I need to be overseas<br>
And take a vacation to trip a broad<br>
And make her fall on her face and<br>
Don't be a retard, be a king?<br>
Think not<br>
Why be a king when you can be a God?
</div>
    `
}


function displayLoseYourself(){
    // Loading appropriate audio file for the song
    audioSrc.src = "media/loseyourself.mp3"
    divLyrics.style.display = "block";
    audio.load();

    // Displaying Name of the song
    musicTitle.innerHTML = "LOSE YOURSELF";
    musicText.innerHTML = `
    <div>
Look, if you had one shot, or one opportunity<br>
To seize everything you ever wanted, in one moment<br>
Would you capture it, or just let it slip?<br>
<br>
Yo! His palms are sweaty, knees weak, arms are heavy<br>
There's vomit on his sweater already: Mom's spaghetti<br>
He's nervous, but on the surface he looks calm and ready<br>
To drop bombs, but he keeps on forgetting<br>
What he wrote down, the whole crowd goes so loud<br>
He opens his mouth, but the words won't come out<br>
He's choking, how? Everybody's joking now<br>
The clock's run out, time's up, over, blaow!<br>
Snap back to reality, ope there goes gravity, ope<br>
There goes Rabbit, he choked, he's so mad but he won't<br>
Give up that easy, no, he won't have it, he knows<br>
His whole back's to these ropes, it don't matter, he's dope<br>
He knows that but he's broke, he's so stagnant, he knows<br>
When he goes back to this mobile home, that's when it's<br>
Back to the lab again yo, this whole rhapsody<br>
Better go capture this moment and hope it don't pass him, and<br>
<br>
You better lose yourself in the music<br>
The moment, you own it, you better never let it go<br>
You only get one shot, do not miss your chance to blow<br>
This opportunity comes once in a lifetime, yo<br>
You better lose yourself in the music<br>
The moment, you own it, you better never let it go<br>
You only get one shot, do not miss your chance to blow<br>
This opportunity comes once in a lifetime, yo<br>
You better…<br>
<br>
His soul's escaping through this hole that is gaping<br>
This world is mine for the taking, make me king<br>
As we move toward a New World Order<br>
A normal life is boring; but superstardom's<br>
Close to post-mortem, it only grows harder<br>
Homie grows hotter, he blows, it's all over<br>
These hoes is all on him, coast-to-coast shows<br>
He's known as the Globetrotter, lonely roads<br>
God only knows, he's grown farther from home, he's no father<br>
He goes home and barely knows his own daughter<br>
But hold your nose, 'cause here goes the cold water<br>
These hoes don't want him no mo', he's cold product<br>
They moved on to the next schmoe who flows<br>
He nose-dove and sold nada, and so the soap opera<br>
Is told, it unfolds, I suppose it's old, partner<br>
But the beat goes on: da da dum da dum da da da da<br>
<br>
You better lose yourself in the music<br>
The moment, you own it, you better never let it go<br>
You only get one shot, do not miss your chance to blow<br>
This opportunity comes once in a lifetime, yo<br>
You better lose yourself in the music<br>
The moment, you own it, you better never let it go<br>
You only get one shot, do not miss your chance to blow<br>
This opportunity comes once in a lifetime, yo<br>
You better…<br>
<br>
No more games, I'ma change what you call rage<br>
Tear this motherfuckin' roof off like two dogs caged<br>
I was playin' in the beginning, the mood all changed<br>
I've been chewed up and spit out and booed off stage<br>
But I kept rhymin' and stepped right in the next cypher<br>
Best believe somebody's payin' the Pied Piper<br>
All the pain inside amplified by the<br>
Fact that I can't get by with my 9-to-5<br>
And I can't provide the right type of life for my family<br>
'Cause man, these goddamn food stamps don't buy diapers<br>
And there's no movie, there's no Mekhi Phifer, this is my life<br>
And these times are so hard, and it's gettin' even harder<br>
Tryna feed and water my seed, plus teeter-totter<br>
Caught up between bein' a father and a prima donna<br>
Baby mama drama, screamin' on her, too much for me to wanna<br>
Stay in one spot, another day of monotony's<br>
Gotten me to the point I'm like a snail, I've got<br>
To formulate a plot or end up in jail or shot<br>
Success is my only motherfuckin' option, failure's not<br>
Mom, I love you, but this trailer's got<br>
To go; I cannot grow old in Salem's Lot<br>
So here I go, it's my shot: feet, fail me not<br>
This may be the only opportunity that I got<br>
<br>
You better lose yourself in the music<br>
The moment, you own it, you better never let it go (go)<br>
You only get one shot, do not miss your chance to blow<br>
This opportunity comes once in a lifetime, yo<br>
You better lose yourself in the music<br>
The moment, you own it, you better never let it go (go)<br>
You only get one shot, do not miss your chance to blow<br>
This opportunity comes once in a lifetime, yo<br>
You better…<br>
<br>
You can do anything you set your mind to, man
</div>
    `
}

function lyricsClose(){
    divLyrics.style.display = "none";
    audio.pause();
    audio.currentTime = 0;
}