const tg = window.Telegram.WebApp;

export function useTelegram() {
    const onClose = () => {
        tg.close()
    }
    const onTogleButton = () => {
        if (tg.MainButton) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }


    return {
        onClose,
        onTogleButton,
        tg,
        user: tg.initDataUnsafe?.user

    }
}