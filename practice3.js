
sliceString = function (string, length) 
{
    if ((string.constructor === String) && (length>0)) 
    {
        return string.slice(0, length);
    }
};
console.log(sliceString("Robin Singh",4));
