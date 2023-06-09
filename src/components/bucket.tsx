import './bucket.css';

export interface BucketProps {
   bucket : number | null;
   bucketsetter: React.Dispatch<React.SetStateAction<number | null>>
}

interface ButtonProps {
  cb : React.ChangeEventHandler<HTMLInputElement>;
  lcf: string;
  ucf: string;
  bucketst: string;
  checked: boolean;
}

const BucketLabel = () => {
  return (
    <>
    <div className="row" id="pull-left">
      <div className="col-sm-12 align-items-left" >
        <label className="mb-0 font-weight-bold flabel">Bucket</label>
      </div>
    </div>
    </>
  );
}

const BucketButton = ({cb, lcf, ucf, bucketst, checked} : ButtonProps) => {
  if (checked) {
    return(
      <>
      <div className="row" id="bucket_radios">
        <div className="col-sm-6">
          <input type="radio" value={bucketst} id={lcf} onChange={cb} name="bucket" defaultChecked />
         <label htmlFor={lcf}>{ucf}</label>
       </div>
     </div>
     </>
   );
  } else {
    return(
      <>
      <div className="row" id="bucket_radios">
        <div className="col-sm-6">
          <input type="radio" value={bucketst} id={lcf} onChange={cb} name="bucket"/>
         <label htmlFor={lcf}>{ucf}</label>
       </div>
     </div>
     </>
   );
  }
}

export const Bucket = ({bucket, bucketsetter}: BucketProps) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("HaNdLe ChAnGe");
    console.log(e.target.value)
    bucketsetter(parseInt(e.target.value, 10));
  }

  switch (bucket)  {
    case 0:
        return(
        <>
          <BucketLabel />
          <div className="container">
            <BucketButton cb={handleChange} lcf="ground" ucf="Ground" bucketst="0" checked={true} />
            <BucketButton cb={handleChange} lcf="first" ucf="First" bucketst="1" checked={false} />
            <BucketButton cb={handleChange} lcf="second" ucf="Second" bucketst="2" checked={false} />
          </div>
        </>)
    case 1:
        return(
        <>
          <BucketLabel />
          <div className="container">
            <BucketButton cb={handleChange} lcf="ground" ucf="Ground" bucketst="0" checked={false} />
            <BucketButton cb={handleChange} lcf="first" ucf="First" bucketst="1" checked={true} />
            <BucketButton cb={handleChange} lcf="second" ucf="Second" bucketst="2" checked={false} />
          </div>
        </>)
    case 2:
        return(
        <>
          <BucketLabel />
          <div className="container">
            <BucketButton cb={handleChange} lcf="ground" ucf="Ground" bucketst="0" checked={false} />
            <BucketButton cb={handleChange} lcf="first" ucf="First" bucketst="1" checked={false} />
            <BucketButton cb={handleChange} lcf="second" ucf="Second" bucketst="2" checked={true} />
          </div>
        </>)
    default:
        return(
        <>
        </>)
  }
};

export default Bucket;
