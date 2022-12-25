import React from 'react';
import { Button, Pressable, Box, Text } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, removeUser } from '../../actions';
import notifee from '@notifee/react-native';

async function onDisplayNotification() {
    console.log('notif run')
    // Request permissions (required for iOS)
    // await notifee.requestPermission()

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
        title: 'Notification Title',
        body: 'Main body content of the notification',
        android: {
            channelId,
            smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
            // pressAction is needed if you want the notification to open the app when pressed
            pressAction: {
                id: 'default',
            },
        },
    });
}

const UserProfileScreen = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleSetUser = () => {
        dispatch(setUser({ name: 'John Doe' }));
    };

    const handleRemoveUser = () => {
        dispatch(removeUser());
    };

    return (
        <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
            <Pressable onPress={() => onDisplayNotification()}>
                <Text>Open up App.js to start working on your app!</Text>
            </Pressable>
            {user ? (
                <Box>
                    <Text>{user.name}</Text>
                    <Button title="Remove user" onPress={handleRemoveUser} >Remove User</Button>
                </Box>
            ) : (
                <Box>
                    <Button title="Set user" onPress={handleSetUser}>Set User</Button>
                </Box>
            )}
        </Box>
    );
};

export default UserProfileScreen;