import './bucket.css';

import { BucketProps, ButtonProps, configData } from './interfaces';

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


export const Bucket = ({config, bucket, bucketsetter}: BucketProps) => {
  console.log(`CONFIG.BUCKET_NAME is ${config.BUCKET_NAME}`);
  console.log(`CONFIG.BUCKET SIZE is ${config.BUCKETS.length}`);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("HaNdLe ChAnGe");
    console.log(e.target.value)
    bucketsetter(parseInt(e.target.value, 10));
  }

  const capitalizeFirstLetter = (name: string) => {return name.charAt(0).toUpperCase() + name.slice(1);}

{ /*

  for (let i = 0; i < config.BUCKETS.length; i++) {
    const name = config.BUCKETS[i].name;
    console.log(`BUCKET i name is ${name} OR ${capitalizeFirstLetter(name)}`);
  }
*/}

  const build_config_matrix = (config: configData)  => {
    const matrix = [];
    for (let i = 0; i < config.BUCKETS.length; i++) {
      const name = config.BUCKETS[i].name;
      const uname = capitalizeFirstLetter(name);
      const vector = [ name, uname, i.toString()];
      console.log("VECTOR is ");
      console.log(vector);
      matrix.push(vector);
   }
   console.log("MATRIX is ");
   console.log(matrix);
   return matrix;
 }

  const build_checked_vector = (config: configData, bucket: number | null)  => {
    const checked = []
    for (let i = 0; i < config.BUCKETS.length; i++) {
      const set = i == bucket;
      checked.push(set);
   }
   console.log("CHECKED is ");
   console.log(checked);
   return checked;
 }

  switch (bucket)  {
    case 0:
      const matrix = build_config_matrix(config);
      const checked = build_checked_vector(config, bucket);
      console.log("2. MATRIX is ");
      console.log(matrix);
      console.log("2 CHECKED is ");
      console.log(checked);
      console.log("0.0 MATRIX is ");
      console.log(matrix[0][0]);
      console.log("0.1 MATRIX is ");
      console.log(matrix[0][2]);
      console.log("0.2 MATRIX is ");
      console.log(matrix[0][2]);
      console.log("0 CHECKED is ");
      console.log(checked[0]);
        return(
        <>
          <BucketLabel />
          <div className="container">
            <BucketButton cb={handleChange} lcf={matrix[0][0]} ucf={matrix[0][1]} bucketst={matrix[0][2]} checked={checked[0]} />
            <BucketButton cb={handleChange} lcf={matrix[1][0]} ucf={matrix[1][1]} bucketst={matrix[1][2]} checked={checked[1]} />
            <BucketButton cb={handleChange} lcf={matrix[2][0]} ucf={matrix[2][1]} bucketst={matrix[2][2]} checked={checked[2]} />
{ /*

            <BucketButton cb={handleChange} lcf={matrix[0][0]} ucf={matrix[0][1]} bucketst={matrix[0][2]} checked={matrix[0][3]} />
            <BucketButton cb={handleChange} lcf={matrix[0][1]} ucf={matrix[1][1]} bucketst={matrix[1][2]} checked={matrix[1][3]} />
            <BucketButton cb={handleChange} lcf={matrix[0][2]} ucf={matrix[2][1]} bucketst={matrix[2][2]} checked={matrix[2][3]} />
            <BucketButton cb={handleChange} lcf="ground" ucf="Ground" bucketst="0" checked={true} />
            <BucketButton cb={handleChange} lcf="first" ucf="First" bucketst="1" checked={false} />
            <BucketButton cb={handleChange} lcf="second" ucf="Second" bucketst="2" checked={false} />
*/ }
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
