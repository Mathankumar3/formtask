form = document.querySelector('#form');
form.addEventListener('submit',(e)=>{
  e.preventDefault()

  parent = document.querySelector('.user-data');
  row_table= document.createElement('tr')

  fN = document.createElement('td');
  fN_data = document.querySelector('[placeholder="First Name"]')
  fN.innerText= fN_data.value;
  row_table.append(fN)

  lN=document.createElement('td');
  lN_data = document.querySelector('[placeholder="Last Name"]')
  lN.innerText=lN_data.value;
  row_table.append(lN);

  email=document.createElement('td');
  email_data = document.querySelector('[placeholder="E-mail"]')
  email.innerText=email_data.value;
  row_table.append(email);

  pin=document.createElement('td');
  pin_data = document.querySelector('[placeholder="Pin"]')
  pin.innerText=pin_data.value;
  row_table.append(pin);

  male=document.createElement('td');
  male_data = document.querySelector('#male')
  male.innerText=male_data.value;
  row_table.append(male);

  female=document.createElement('td');
  female_data = document.querySelector('#female')
  female.innerText=female_data.value;
  row_table.append(female);
  
  if(male==true || female==true){
    male=document.createElement('td');
    male_data = document.querySelector('#male')
    male.innerText=male_data.value;
    row_table.append(male);
    female=document.createElement('td');
    female_data = document.querySelector('#female')
    female.innerText=female_data.value;
    row_table.append(female);
  }else

  north=document.createElement('td');
  north_data = document.querySelector('#food1')
  north.innerText=north_data.value;
  row_table.append(north);
  south=document.createElement('td');
  south_data = document.querySelector('#food2')
  south.innerText=south_data.value;
  row_table.append(south);
  chinese=document.createElement('td');
  chinese_data = document.querySelector('#food3')
  chinese.innerText=chinese_data.value;
  row_table.append(chinese);
  japanese=document.createElement('td');
  japanese_data = document.querySelector('#food4')
  japanese.innerText=chinese_data.value;
  row_table.append(japanese);

  state=document.createElement('td');
  state_data = document.querySelector('[placeholder="State"]')
  state.innerText=state_data.value;
  row_table.append(state);

  country=document.createElement('td');
  country_data = document.querySelector('[placeholder="Country"]')
  country.innerText=country_data.value;
  row_table.append(country);



  if(fN_data.value !='' && lN_data.value !='' && email_data.value != '' && pin_data.value!='' && male_data.value!='' 
  && female_data.value!='' && north_data.value!=''&& south_data.value!='' && chinese_data.value!='' && japanese_data.value!=''
  && state_data.value!='' && country_data !=''){
    parent.append(row_table);

  }

  fN_data.value='';
  lN_data.value='';
  email_data.value='';
  pin_data.value='';
  male_data.value='';
  female_data.value='';
  north_data.value='';
  south_data.value='';
  chinese_data.value='';
  japanese_data.value='';


  state_data.value='';
  country_data.value='';

    console.log('from submit');
})