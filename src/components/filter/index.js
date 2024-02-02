import React, { useState } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

function Filter() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["available"]));
  
  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const [filter, setFilter] = useState({});

  const handleChangeFilter = event => {
    setFilter(event.target.value);
  }

  return (
    <Dropdown className="drpFilter">
      <DropdownTrigger>
        <Button
          variant="bordered"
          className="capitalize"
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={handleChangeFilter}
      >
        <DropdownItem key="available">Available</DropdownItem>
        <DropdownItem key="pending">Pending</DropdownItem>
        <DropdownItem key="sold">Sold</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default Filter