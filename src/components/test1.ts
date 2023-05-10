type DeskEmail = {
  desk: string,
  email: string,
};

const desks: DeskEmail[] = [ {desk: "2f27", email: "a@b.c"} , {desk: "2f26", email: "d@e.f"} , {desk: "2f25", email: "g@h.i"} ];

//const desks: string[] = [ "2f27", "2f26", "2f25"];
console.log(desks);

// const emptydesks: DeskEmail[] = desks.forEach(item => {desk:item, email: ""}});
//let emptydesks: DeskEmail[];

//desks.forEach(item => emptydesks.push({desk:item, email: ""}));

function emptydesks(desks: DeskEmail[]): DeskEmail[] {
  return desks.forEach(item => {item.email = ""});
}

const emptieddesks = emptydesks(desks)
console.log(emptieddesks);
