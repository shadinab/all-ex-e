function oneParameter (language)
{
  switch (language) {
  case 'mandarin':
  console.log('Most number of native speakers!');
  break;
  case 'spanish':
    console.log('2nd place in a number of native speakers');
    break;
  case 'English':
    console.log('3rd place');
    break;
  case 'Hindi':
    console.log('Number 4');
    break;
    case 'Arabic':
      console.log('5th most spoken language');
      break;

      default:
        console.log('Not in the top 5');    
}
}

oneParameter('mandarin');  
oneParameter('Spanish');   
oneParameter('English');   
oneParameter('Hindi');     
oneParameter('Arabic');    
oneParameter('russian');    