type Props = {
  text: string;
  subtext: string;
  children: JSX.Element | JSX.Element[];
};

export function Pruebas({ text, subtext, children }: Props) {
  return (
    <>
      <h1>{text}</h1>
      <h2>{subtext}</h2>
      {children}
    </>
  );
}
