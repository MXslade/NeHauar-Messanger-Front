import React from "react";
import { Button } from "../ui/Button";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { SearchBar } from "../search/SearchBar";

export const SidebarNavigation: React.FC = () => {
  return (
    <div className="h-14 w-full flex align-center py-3 bg-main">
      <Button icon={faBars} className="ml-3 mr-1.5" />
      <SearchBar className="ml-1.5 mr-3" />
    </div>
  );
};
