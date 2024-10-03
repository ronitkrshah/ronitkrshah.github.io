type Props = {
  size?: number;
};

export function Logo({ size }: Props) {
  return <h1 style={{ fontSize: size ?? 30 }}>RKS</h1>;
}
