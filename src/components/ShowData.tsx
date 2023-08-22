import './ShowData.css'

type ShowDataType = {
  formFields: object;
  valid: boolean;
  errors: object;
};
//  formFields: string[];

const ShowData = ({ formFields, valid, errors }: ShowDataType) => (
  <div className="ShowData">
    <dl>
      <dt>Current value:</dt>
      <dd>{JSON.stringify(formFields, null, 2)}</dd>
      <dt>Valid?</dt>
      <dd>{JSON.stringify(valid)}</dd>
      <dt>Errors?</dt>
      <dd>{JSON.stringify(errors, null, 2)}</dd>
    </dl>
  </div>
)

export default ShowData
