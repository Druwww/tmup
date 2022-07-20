import {showNotification} from "@mantine/notifications";
import {Check} from "tabler-icons-react";


const notificationSuccess = (title : string, message :string) => {
    showNotification({
        title : title,
        message : message,
        color: 'green',
        icon: <Check />,
        autoClose: 6000,
    })
}

export default notificationSuccess