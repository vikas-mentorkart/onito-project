export const storeToLocalstorage = (data:Object, name:string)=>{
  const dataStr = localStorage.getItem(name);
  if(dataStr){
    const parsedStr = [...JSON.parse(dataStr), data];
    localStorage.setItem(name, JSON.stringify(parsedStr))
    return;
  }
  localStorage.setItem(name, JSON.stringify([data]))
}
