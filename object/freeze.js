const a = {
    prop: 42
  };
  
  Object.freeze(a);
  
  obj.prop = 33;
  
  console.log(a.prop);
  