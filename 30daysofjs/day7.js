/*
You are a spy. You lurk in the enemy's control zone. Your task is to get the length data of a railway, accurate to meters.
Although you have taken all kinds of technical measures, you still haven't finished your task.
Now, You can only use the last method: Take the train, record the sounds you hear, and then calculate the length of the railroad.
You will hear these voices:
1. "呜呜呜". This is the whistle of the train when it comes in or out of the station.

That is, When you hear the sound for the first time, the train leaves the
station and goes into high speed; When you hear the sound for the second
time, The train pulled into the station and goes into low speed. and so on.

2. "哐当". This is the sound of the train hitting the railroad track.

That is, Every time you hear it, the train advances 20 meters(high speed) 
or 10 meters(low speed).

3. Any other sound. These are all noise, please ignore them ;-)
*/
function lengthOfRailway(sounds){
    sounds = sounds.split("呜呜呜");
    let hs=0;
    let ls=0;
    for(let i=1;i<sounds.length;i++){
        if (i%2!=0){
            hs += sounds[i].replace(/[^哐]/gi,'').length*20;
        }
        else if (i%2==0){
            ls += sounds[i].replace(/[^哐]/gi,'').length*10;
        }
        }
        return hs+ls;
    }