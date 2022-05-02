import { Button, Card, Text } from "@nextui-org/react"
import utils from "../utils/Utils"

import styles from '../styles/NavBar.module.css'

export default function Navbar() {
    return <Card className={styles.card} style={{ opacity: 0.8 }}>
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
        }}>
            <Text className={styles.card_text} onClick={() => utils.redirect('/')}>
                BeatSaber Playlists
            </Text>

            <div style={{ flex: 1 }}></div>
            {
                utils.isLoggedIn() ? <>
                    <Button size={'sm'} className={styles.card_button} onClick={() => utils.redirect('/login')}>
                        Upload Playlist
                    </Button>
                    <div style={{ marginRight: '0.5em' }}></div>
                    <Button size={'sm'} className={styles.card_button} onClick={() => utils.redirect('/login')}>
                        Profile
                    </Button>
                    <div style={{ marginRight: '0.5em' }}></div>
                    <Button color={'error'} size={'sm'} className={styles.card_button} onClick={() => utils.redirect('/login')}>
                        Logout
                    </Button>
                </> : 
                <>
                    <div style={{ marginRight: '0.5em' }}></div>
                    <Button size={'sm'} className={styles.card_button} onClick={() => utils.redirect('/login')}>
                        Login
                    </Button>
                </>
            }
        </div>
    </Card>
}