import Icon from "./Icon.tsx";

export interface Props {
  subtitle?: string;
  title: string;
}

const Title = ({ subtitle, title }: Props) => {
  return (
    <div class="py-10 lg:py-14">
      {subtitle && (
        <h2 class="flex items-center gap-2 text-sm font-semibold uppercase mb-5">
          <Icon id="search" size={16} />
          {subtitle}
        </h2>
      )}
      <h1 class="text-4xl font-bold text-gray-900">{title}</h1>
    </div>
  );
};

export default Title;
