const a = {
    property1: 42
  };
  
  const descriptor1 = Object.getOwnPropertyDescriptor(a, 'property1');
  
  console.log(descriptor1.configurable);
  
  console.log(descriptor1.value);
  
  