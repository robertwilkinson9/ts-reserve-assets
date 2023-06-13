import './bucket.css';

import { BucketLabelProps, BucketProps, ButtonProps, configData } from './interfaces';

const BucketLabel = ({label}: BucketLabelProps,) => {
  console.log("LABEL is ")
  console.log(label)
  return (
    <>
    <div className="row" id="pull-left">
      <div className="col-sm-12 align-items-left" >
        <label className="mb-0 font-weight-bold flabel">{label}</label>
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

  const build_config_matrix = (config: configData)  => {
    const matrix = [];
    for (let i = 0; i < config.BUCKETS.length; i++) {
      const name = config.BUCKETS[i].name;
      const uname = capitalizeFirstLetter(name);
      const vector = [ name, uname, i.toString()];
{ /*
      console.log("VECTOR is ");
      console.log(vector);
*/ } 
      matrix.push(vector);
   }
{ /*
   console.log("MATRIX is ");
   console.log(matrix);
*/ } 
   return matrix;
 }

  const build_checked_vector = (config: configData, bucket: number | null)  => {
    const checked = []
    for (let i = 0; i < config.BUCKETS.length; i++) {
      const set = i == bucket;
      checked.push(set);
   }
{ /*
   console.log("CHECKED is ");
   console.log(checked);
      <BucketLabel label="Whatever" />
*/ } 
   return checked;
 }

  const matrix = build_config_matrix(config);
  const checked = build_checked_vector(config, bucket);
  console.log("2. MATRIX is ");
  console.log(matrix);
  console.log("2 CHECKED is ");
  console.log(checked);

  console.log(`${bucket}.0 MATRIX is ${matrix[bucket!][0]}`);
  console.log(`${bucket}.1 MATRIX is ${matrix[bucket!][1]}`);
  console.log(`${bucket}.2 MATRIX is ${matrix[bucket!][2]}`);
  console.log(`${bucket} CHECKED is ${checked[bucket!]}`);

  return(
    <>
      <BucketLabel label={capitalizeFirstLetter(config.BUCKET_NAME)} />
      <div className="container">
        <BucketButton cb={handleChange} lcf={matrix[0][0]} ucf={matrix[0][1]} bucketst={matrix[0][2]} checked={checked[0]} />
        <BucketButton cb={handleChange} lcf={matrix[1][0]} ucf={matrix[1][1]} bucketst={matrix[1][2]} checked={checked[1]} />
        <BucketButton cb={handleChange} lcf={matrix[2][0]} ucf={matrix[2][1]} bucketst={matrix[2][2]} checked={checked[2]} />
      </div>
    </>
  )
};

export default Bucket;
