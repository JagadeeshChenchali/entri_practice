
truncate_string = function (string, length) 
{
    if ((string.constructor === String) && (length>0)) 
    {
        return string.slice(0, length);
    }
};
console.log(truncate_string("Robin Singh",4));
