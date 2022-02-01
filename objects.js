const author = {
    name: {
      firstName: "Philip",
      surname: "Pullman",
    },
    birthday: "1946-10-19",
  };
  
  console.log(author.name.firstName);  //dot notation
  console.log(author['name']['firstName']);  //bracket notation
  
  //Destructure

  let {birthday} = author;
  console.log(birthday) 
//Deep destructure  
  const {
    name: { firstName },
  } = author;
  console.log(firstName);
  //console.log(name);