
let choices = ["stone", "paper", "scissor"];

function take_data() {
    while(1)
    {
        let user_choice = prompt("enter stone/paper/scissor");
        if(user_choice== "stone" || user_choice=="paper" || user_choice == "scissor")
        {
            return user_choice;
        }
        alert("invalid choice");
    }
}

function computerChoice()
{
    
    const randomIndex = Math.floor(Math.random() * choices.length);
    let computer_choice = choices[randomIndex];
    return computer_choice
}

let user_choice = take_data();
let computer_choice = computerChoice();

while(user_choice == computer_choice)
{
    alert("its a tie !\nenter again");
    user_choice = take_data();
    computer_choice = computerChoice();
    

}

if (user_choice == "stone" && computer_choice == "paper")
{
    alert(`you chose ${user_choice} and computer chose ${computer_choice}\nyou lost !`);
  }
else if (user_choice == "paper" && computer_choice == "scissor") {
    alert(`you chose ${user_choice} and computer chose ${computer_choice}\nyou lost !`);
} 
  else if (user_choice == "scissor" && computer_choice == "stone") {
    alert(`you chose ${user_choice} and computer chose ${computer_choice}\nyou lost !`);
  }
  else{
    alert(`you chose ${user_choice} and computer chose ${computer_choice}\nyou won !`);
}



