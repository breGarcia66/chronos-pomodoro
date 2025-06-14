import styles from "./styles.module.css";

type DefaultInputProps = {
  id: string;
  labelText?: string; //'?' informa que essa propriedade é opcional
} & React.ComponentProps<'input'>;


export function DefaultInput({ id, labelText, type, ...props }: DefaultInputProps) {
  return (
    <>
      {labelText && <label className="labelText" htmlFor={id}>{labelText}</label>}
      <input className={styles.inputDefault} id={id} type={type} {...props}/>
    </>
  );
}
