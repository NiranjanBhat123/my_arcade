let choices = [1,2,3,4,5,6]
let score = 0;
while(1)
{
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computer_choice = parseInt(choices[randomIndex]);
    const  user_choice = parseInt(prompt("enter a number between 1-6"))
    if(user_choice>= 1 && user_choice<= 6)
    {
        if(user_choice==computer_choice)
    {
        break;
    }
    else{
        score = score + user_choice;
        alert(`good job! current score is ${score}\ncontinue playing !`);
    }
    }
    else{
        alert("invalid number");
    }
    
}

alert(`game over !\nyour final score is ${score}`)


