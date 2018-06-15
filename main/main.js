// Write your cade below:
function main()
{
    var i=99;
    var song='';
    while(i>1)
    {
        song+=i+' bottles of beer on the wall, '+i+' bottles of beer.\n'+'Take one down and pass it around, '+(--i);
        if(i>1) song+=' bottles of beer on the wall.\n';
        else    song+=' bottle of beer on the wall.\n';
    }
    song+='1 bottle of beer on the wall, 1 bottle of beer.\n'+
          'Take one down and pass it around, no more bottles of beer on the wall.\n' +
          'No more bottles of beer on the wall, no more bottles of beer.\n' +
          'Go to the store and buy some more, 99 bottles of beer on the wall.'
    return song;
};


module.exports = main;