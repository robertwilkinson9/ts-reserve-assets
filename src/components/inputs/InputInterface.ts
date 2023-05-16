export interface IOption {
   label: string;
   name?: string;
   value?: string;
   disabled?: boolean;
}

export interface IOptionGroup {
   label: string;
   options: IOption[];
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface RadioButtonOption {
   label: string;
   name?: string;
   value?: string;
   disabled?: boolean;
   key?: string;
   id?: string;
   defaultChecked?: boolean;
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface InputElementProps {
   label: string;
   disabled?: boolean;
   key?: string;
}
