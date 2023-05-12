import Select from 'react-select'

type DeskEmail = {
  desk: string,
  email: string,
};

const desk2deskemail = (input: string): DeskEmail => {
  return {desk: input, email: ""};
}

type Select_type = {
  value: string,
  label: string,
};

const desk2select = (input: string): Select_type => {
  return {value: input, label: input};
}

{ /*
// gf07 - 43
// ff08 - 33
// 2f07 - 27
*/ }

const desks: string[] = [ "2f27", "2f26", "2f25", "2f24"];
console.log(desks);

function emptydesks(desks: string[]): DeskEmail[] {
  const edesks: DeskEmail[] = [];
  desks.forEach(item => edesks.push(desk2deskemail(item)));
  console.log(edesks);
  return edesks;
}

const emptieddesks = emptydesks(desks)
console.log(emptieddesks);

function desks_select(desks: string[]): Select_type[] {
  const select_desks: Select_type[] = [];
  desks.forEach(item => select_desks.push(desk2select(item)));
  console.log(select_desks);
  return select_desks;
}

const select_desk_list = desks_select(desks)
console.log(select_desk_list);

export const Desks = () => {
    return (
        <>
        <h4>Desks</h4>
{ /*
        <div className="col-md-4 d-flex align-items-center" style={borderClass}>
            <label className="mb-0 font-weight-bold" style={labelFont}>Technology</label>
                <Select
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderColor: state.isFocused ? 'grey' : 'red',
                      }),
                    options={select_desk_list}
                />
                    styles={styles}
                    defaultValue={select_desk_list.find(x => x.value === "2f27")},
                    placeholder="None Selected",
*/ }
        <div className="col-md-4 d-flex align-items-center">
            <label className="mb-0 font-weight-bold">Desk</label>
                <Select options={select_desk_list} />
        </div>
        </>
    );
};

export default Desks;


