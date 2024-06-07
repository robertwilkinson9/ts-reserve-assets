import { AuxConfigRecordType, AuxDataRecordType, AuxType } from './interfaces';
export const auxdatamerge = (aux_config: AuxConfigRecordType[], aux_data: AuxDataRecordType[]): AuxType[] => {
  const merged = aux_config.map((c) => {
    const data = aux_data.filter((d) => {
      if (d.id == c.id) {
        return d;
      };
    });
    if (data && data[0] && data[0].value) {
      return {id: c.id, label: c.label, dbname: c.dbname, value: data[0].value};
    } else {
      return {id: c.id, label: c.label, dbname: c.dbname, value: ""};
    }
  });
  return merged;
};

export default auxdatamerge;
