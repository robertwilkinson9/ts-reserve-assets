import { AuxConfigRecordType, AuxDataRecordType, AuxType } from './interfaces';
export const auxdatamerge = (aux_config: AuxConfigRecordType[], aux_data: AuxDataRecordType[]): AuxType[] => {
  const merged = aux_config.map((c) => {
    const data = aux_data.filter((d) => {return d.id == c.id}); return {id: c.id, label: c.label, dbname: c.dbname, value: data[0].value} 
  });
  return merged;
};

export default auxdatamerge;
