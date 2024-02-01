import { useFetch } from '../../utils/hooks'
import Card from '../card'
import style from '../../css/main.module.css'
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem,
    Button,
    AvailableIcon
  } from "@nextui-org/react";

function CardsSet() {
	const { data, isLoading, error } = useFetch(`https://petstore.swagger.io/v2/pet/findByStatus?status=available`, 'GET')
    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

	if (error) {
		return <span>Une erreur est survenue. Merci de réessayer ultérieurement.</span>
	}

	return (
		<Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
        >
          Open Menu
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
        <DropdownItem
          key="available"
          startContent={<AvailableIcon className={iconClasses} />}
        >
          Available
        </DropdownItem>
        <DropdownItem
          key="pending"
          startContent={<AvailableIcon className={iconClasses} />}
        >
          Pending
        </DropdownItem>
        <DropdownItem
          key="sold"
          startContent={<AvailableIcon className={iconClasses} />}
        >
          Sold
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
	)
}

export default CardsSet