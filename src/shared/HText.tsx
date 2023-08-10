type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return (
    <h1 className="font-montserrat text-3xl font-bold basis-3/5">{children}</h1>
  );
};

export default HText;
