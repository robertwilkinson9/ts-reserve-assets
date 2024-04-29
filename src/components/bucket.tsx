// We present a set of radio buttons for each of the collections - here called buckets
// e.g. rooms containing desks, authors who write books, tables having seats etc. 
// these radio buttons then have the individual items available as pull-down selects

import './bucket.css';

import { number_or_null, BucketLabelProps, BucketProps, ButtonProps, configData } from './interfaces';

import { capitalizeFirstLetter } from './capitalizeFirstLetter';

const BucketLabel = ({label}: BucketLabelProps,) => {
  return (
    <>
    <div data-testid="bucket_label_div" className="row" id="pull-left">
      <div className="col-sm-12 align-items-left" >
        <label data-testid="bucket_label_label" className="mb-0 font-weight-bold flabel">{label}</label>
      </div>
    </div>
    </>
  );
}

const BucketButton = ({cb, lcf, ucf, bucketst, checked} : ButtonProps) => {
  if (checked) {
    console.log(`checked is ${checked}, bucketst is ${bucketst}, ucf is ${ucf}`);
    return(
      <>
      <div data-testid="bucket_button_checked" className="row" id="bucket_radios">
        <div className="col">
          <input data-testid="bucket_button_checked_input" type="radio" value={bucketst} id={lcf} onChange={cb} name="bucket" checked={checked} />
          <label data-testid="bucket_button_checked_label" htmlFor={lcf}>{ucf}</label>
       </div>
     </div>
     </>
   );
  } else {
    console.log(`CHECKED IS ${checked}, BUCKETST IS ${bucketst}, UCF IS ${ucf}`);
    return(
      <>
      <div data-testid="bucket_button_unchecked" className="row" id="bucket_radios">
        <div className="col">
          <input data-testid="bucket_button_unchecked_input" type="radio" value={bucketst} id={lcf} onChange={cb} name="bucket" checked={checked} />
          <label data-testid="bucket_button_unchecked_label" htmlFor={lcf}>{ucf}</label>
       </div>
     </div>
     </>
   );
  }
}

export const Bucket = ({config, bucket, set_bucket, items_available}: BucketProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`STTEING BUUCKET TO ${e.target.value}`);
    set_bucket(parseInt(e.target.value, 10));
  }

  console.log("Bucket sees items_available of");
  console.dir(items_available);

  const build_config_matrix = (config: configData)  => {
    const matrix = [];
    for (let i = 0; i < config.BUCKETS.length; i++) {
      if (items_available[i]) {
        const name = config.BUCKETS[i].NAME;
        const uname = capitalizeFirstLetter(name);
        const vector = [ name, uname, i.toString()];
        matrix.push(vector);
      } else {
        matrix.push([ "","", ""]);
      }
    }
    console.log("MATRIX is ");
    console.dir(matrix);
    return matrix;
  }

  const build_checked_vector = (bucket_length: number, bucket: number_or_null, set_bucket : React.Dispatch<React.SetStateAction<number_or_null>>)  => {
    const checked: boolean[] = [];
    for (let i = 0; i < bucket_length; ++i) {
      checked.push(false);
    }

    if (items_available[bucket]) {
      checked[bucket] = true;
    } else {
//  set the checked button to be the first bucket with available items
      let checked_set = false;
      for (let i = 0; i < bucket_length; i++) {
        if ((!checked_set) && (items_available[i])) {
          checked_set = true;
          checked[i] = true;
          set_bucket(i);
        }
      }
    }
    console.log("CHECKED VECTOR is ");
    console.dir(checked);
    return checked;
  }

  const matrix = config.BUCKETS ? build_config_matrix(config) : [];
  const checked = config.BUCKETS ? build_checked_vector(config.BUCKETS.length, bucket, set_bucket) : [];

  return(
    <>
      <BucketLabel label={capitalizeFirstLetter(config.BUCKET_NAME)} />
      <div data-testid="bucket_div" className="container">
      {
        matrix.map((row, index) => (
          row[0].length
          ?  <BucketButton cb={handleChange} lcf={row[0]} ucf={row[1]} bucketst={row[2]} checked={checked[index]} key={index} />
          : null
        ))
      }
      </div>
    </>
  )
};

export default Bucket;
