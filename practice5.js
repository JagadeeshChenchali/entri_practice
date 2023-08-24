function protect_email (email) 
{
    let avg, splitted, part1, part2;
    splitted = email.split("@");
    part1 = splitted[0].substring(0,5);
    part2 = splitted[1];
    return part1 + "...@" + part2;
};

console.log(protect_email("robin_singh@example.com"));