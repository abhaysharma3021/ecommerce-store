import { formatter } from "@/libs/utils";

interface CurrencyProps {
  value: string;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};

export default Currency;
