function scuberGreetingForFeet(someNumber){
  if (someNumber <= 400){
    return 'This one is on me!';
  } else if (someNumber <= 2000){
    return 'That will be twenty bucks.';
  } else if (someNumber <= 2500){
    return 'I will gladly take your thirty bucks.'
  } else if (someNumber > 2500){
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  let greeting = (city === 'NYC') ? 'Ok, sounds good.' : 'No go.';
  return greeting;
}

function switchOnCharmFromTip(tip){
  let greeting;
  switch (tip){
    case 'generous':
      greeting = 'Thank you so much.';
      break;
    case 'not as generous':
      greeting = 'Thank you.';
      break;
    default:
      greeting = 'Bye.';
      break;
  }
  return greeting;
}