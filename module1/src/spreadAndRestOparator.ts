{
  // how can i solve Cannot redeclare block-scoped variable 'poorUser'.ts(2451) this problem?

  // i can add curly {} in th fle 1st line and last line and all content should be middle.

  const poorUser = {
    name: "nissan",
  };

  //   learn spread operator in typescript
  const friend: string[] = ["nissan", "rakib", "roki"];
  const bestFriend:string[]=["azmin","Najim","Abir"]
  friend.push(...bestFriend)



//   now use spread operator for object

const developers ={
    frontend:"Nissan",
    backend:"jessan"
}

const otherTeam ={
    floorInc:"Sojal",
    SQA:"Arif"
}

const jsEmployee ={
    ...developers,
    ...otherTeam
}


}
