import styles from "./styles.module.css";

type DefaultInputProps = {
  propId: string;
  propLabelText?: string; //'?' informa que essa propriedade é opcional
} & React.ComponentProps<'input'>;


export function DefaultInput({ propId, propLabelText, type, ...props }: DefaultInputProps) {
  return (
    <>
      {propLabelText && <label className="labelText" htmlFor={propId}>{propLabelText}</label>}
      <input className={styles.inputDefault} id={propId} type={type} {...props}/>
    </>
  );
}
