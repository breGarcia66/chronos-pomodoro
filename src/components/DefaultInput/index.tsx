
type DefaultInputProps = {
  propId: string;
  propLabelText?: string; //'?' informa que essa propriedade é opcional
} & React.ComponentProps<'input'>;


export function DefaultInput({ propId, propLabelText, type, ...rest }: DefaultInputProps) {
  return (
    <>
      {propLabelText && <label htmlFor={propId}>{propLabelText}</label>}
      <input id={propId} type={type} {...rest}/>
    </>
  );
}
