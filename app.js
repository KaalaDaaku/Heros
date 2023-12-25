
let hero =[["Spiderman","Hulk","Doctor Strange","Ironman"],["Flash","Batman","Superman","Aquaman"]]

for(let i=0; i<hero.length;i++)
{
    console.log(`List #${i+1}`)
    {
        for(let j=0;j<hero[i].length;j++)
        console.log(hero[i][j]);
    }
}