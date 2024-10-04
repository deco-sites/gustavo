import { useDevice } from "@deco/deco/hooks";
import { Avatar, Props as AvatarProps } from "../components/header/Avatar.tsx";
import { NavigationItems } from "../components/header/NavigationItems.tsx";
import Icon, { AvailableIcons } from "../components/ui/Icon.tsx";

export interface Link {
  icon: AvailableIcons;
  label: string;
  href?: string;
  children?: Link[];
}

interface Props {
  avatar: AvatarProps;
  menuLinks: Link[];
}

const Header = ({ menuLinks, avatar }: Props) => {
  const device = useDevice();

  if (device !== "desktop") {
    return (
      <div class="flex">
        <Avatar
          name={avatar.name}
          description={avatar.description}
          photo={avatar.photo}
        />
        <div class="collapse">
          <input type="checkbox" />
          <p class="collapse-title text-xl font-medium">
            <Icon id="menu" size={20} />
          </p>
          <div className="pl-6 mt-2 collapse-content">
            <NavigationItems items={menuLinks} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-64 bg-base-100 h-screen flex flex-col">
      <Avatar
        name={avatar.name}
        description={avatar.description}
        photo={avatar.photo}
      />
      <NavigationItems items={menuLinks} />
      <div className="p-4 text-sm text-gray-600">© 2024</div>
    </div>
  );
};

export default Header;
