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
      <>
        <div class="flex justify-between items-center relative container bg-base-100 pt-3">
          <Avatar
            name={avatar.name}
            description={avatar.description}
            photo={avatar.photo}
          />
          <label for="mobile-menu" class="text-xl font-medium">
            <Icon id="menu" size={26} />
          </label>
        </div>
        <div class="collapse rounded-none mt-4 items-start">
          <input type="checkbox" id="mobile-menu" class="min-h-0" />
          <div className="collapse-content bg-base-100 px-0">
            <NavigationItems
              class="border-b border-neutral px-5 pb-5"
              items={menuLinks}
            />
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="w-80 float-left bg-base-100 h-screen flex flex-col px-8 pt-14 pb-12">
      <Avatar
        name={avatar.name}
        description={avatar.description}
        photo={avatar.photo}
      />
      <NavigationItems class="pt-10" items={menuLinks} />
      <div className="text-sm text-gray-600">© 2024</div>
    </div>
  );
};

export default Header;
