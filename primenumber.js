let arr=[2,5,7,6,8,11,21,23];
let l = arr.length;
for(let i=0; i<l ;i++)
{
    if(arr[i] == 1)
    {
        console.log(`${arr[i]} is neither prime nor composite`);
    }
    else if(arr[i] == 2)
    {
       console.log(`${arr[i]} is a even prime number`);   
    }
    else if(arr[i]>2)
    {
            if(arr[i] % 2 == 0)
            {
                console.log(`${arr[i]} is not a prime number`);
            }
            else
            {
                console.log(`${arr[i]} is a prime number`);
            }
    }

}


