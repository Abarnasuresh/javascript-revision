const a = {
    a: 'somestring',
    b: 42
  };
  
  for (const [key, value] of Object.entries(a)) {
    console.log(`${key}: ${value}`);
  }