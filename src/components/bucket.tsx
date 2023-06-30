import './bucket.css';

import { BucketLabelProps, BucketProps, ButtonProps, configData } from './interfaces';

const BucketLabel = ({label}: BucketLabelProps,) => {
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


export const Bucket = ({config, bucket, set_bucket}: BucketProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {set_bucket(parseInt(e.target.value, 10));}

  const capitalizeFirstLetter = (name: string) => {return name.charAt(0).toUpperCase() + name.slice(1);}

  const build_config_matrix = (config: configData)  => {
    const matrix = [];
    for (let i = 0; i < config.BUCKETS.length; i++) {
      const name = config.BUCKETS[i].name;
      const uname = capitalizeFirstLetter(name);
      const vector = [ name, uname, i.toString()];
      matrix.push(vector);
   }
   return matrix;
 }

  const build_checked_vector = (config: configData, bucket: number | null)  => {
    const checked = []
    for (let i = 0; i < config.BUCKETS.length; i++) {
      const set = i == bucket;
      checked.push(set);
   }
   return checked;
 }

  const matrix = build_config_matrix(config);
  const checked = build_checked_vector(config, bucket);

  return(
    <>
      <BucketLabel label={capitalizeFirstLetter(config.BUCKET_NAME)} />
      <div className="container">
      {
        matrix.map((row, index) => (
          <BucketButton cb={handleChange} lcf={row[0]} ucf={row[1]} bucketst={row[2]} checked={checked[index]} key={index} />
        ))
      }
      </div>
    </>
  )
};

export default Bucket;
