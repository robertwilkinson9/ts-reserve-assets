import './collection.css';

export interface CollectionProps {
   collection : number | null;
   collectionsetter: React.Dispatch<React.SetStateAction<number | null>>
}

interface ButtonProps {
  cb : React.ChangeEventHandler<HTMLInputElement>;
  lcf: string;
  ucf: string;
  collectionst: string;
  checked: boolean;
}

const CollectionLabel = () => {
  return (
    <>
    <div className="row" id="pull-left">
      <div className="col-sm-12 align-items-left" >
        <label className="mb-0 font-weight-bold flabel">Collection</label>
      </div>
    </div>
    </>
  );
}

const CollectionButton = ({cb, lcf, ucf, collectionst, checked} : ButtonProps) => {
  if (checked) {
    return(
      <>
      <div className="row" id="collection_radios">
        <div className="col-sm-6">
          <input type="radio" value={collectionst} id={lcf} onChange={cb} name="collection" defaultChecked />
         <label htmlFor={lcf}>{ucf}</label>
       </div>
     </div>
     </>
   );
  } else {
    return(
      <>
      <div className="row" id="collection_radios">
        <div className="col-sm-6">
          <input type="radio" value={collectionst} id={lcf} onChange={cb} name="collection"/>
         <label htmlFor={lcf}>{ucf}</label>
       </div>
     </div>
     </>
   );
  }
}

export const Collection = ({collection, collectionsetter}: CollectionProps) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("HaNdLe ChAnGe");
    console.log(e.target.value)
    collectionsetter(parseInt(e.target.value, 10));
  }

  switch (collection)  {
    case 0:
        return(
        <>
          <CollectionLabel />
          <div className="container">
            <CollectionButton cb={handleChange} lcf="ground" ucf="Ground" collectionst="0" checked={true} />
            <CollectionButton cb={handleChange} lcf="first" ucf="First" collectionst="1" checked={false} />
            <CollectionButton cb={handleChange} lcf="second" ucf="Second" collectionst="2" checked={false} />
          </div>
        </>)
    case 1:
        return(
        <>
          <CollectionLabel />
          <div className="container">
            <CollectionButton cb={handleChange} lcf="ground" ucf="Ground" collectionst="0" checked={false} />
            <CollectionButton cb={handleChange} lcf="first" ucf="First" collectionst="1" checked={true} />
            <CollectionButton cb={handleChange} lcf="second" ucf="Second" collectionst="2" checked={false} />
          </div>
        </>)
    case 2:
        return(
        <>
          <CollectionLabel />
          <div className="container">
            <CollectionButton cb={handleChange} lcf="ground" ucf="Ground" collectionst="0" checked={false} />
            <CollectionButton cb={handleChange} lcf="first" ucf="First" collectionst="1" checked={false} />
            <CollectionButton cb={handleChange} lcf="second" ucf="Second" collectionst="2" checked={true} />
          </div>
        </>)
    default:
        return(
        <>
        </>)
  }
};

export default Collection;
